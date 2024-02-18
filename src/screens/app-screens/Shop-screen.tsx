import CustomSafeArea from "@/components/shared/CustomSafeArea";
import { Box, Text, ScrollView, Pressable } from "@gluestack-ui/themed";
import React, {useEffect, useState} from "react";
import {
  StripeProvider,
  CardField,
  useStripe,
  useConfirmPayment,
} from "@stripe/stripe-react-native";
import {createCheckout, getAllGuirkPricingItems} from "@/services/guirk";
import {Alert} from "react-native";
import {MessageEnum} from "@/enums/message.enum";
import {GuirkPricingItem} from "@/types/api";

const ShopScreen = (): React.JSX.Element => {
  const [pricingItems, setPricingItems] = useState<GuirkPricingItem[] | null>(null);
  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  useEffect(() => {
    getAllGuirkPricingItems()
      .then((res) => {
        setPricingItems(res.data);
      })
      .catch((err) => {
        Alert.alert(MessageEnum.GENERIC_ERROR);
        console.error(err);
      });
  }, []);

  const handlePress = async (prop: GuirkPricingItem) => {
    createCheckout(prop.id)
        .then(res => {
          console.log('Successfully received client secret from API');
          openPayment(res.data.client_secret);
        })
        .catch((err) => {
          console.error(err);
          Alert.alert(MessageEnum.GENERIC_ERROR);
        });
  };

  const openPayment = async (clientSecret: string) => {
    const { error } = await initPaymentSheet({
      merchantDisplayName: "Nourrain",
      paymentIntentClientSecret: clientSecret,
      allowsDelayedPaymentMethods: false,
      returnURL: 'nourrain-app://stripe-redirect'
    });
    if (error) {
      console.error(error);
      Alert.alert(MessageEnum.GENERIC_ERROR);
    }

    presentPaymentSheet().then((ev) => {
      // FIXME: can be improved
      Alert.alert("Nous avons bien reçu votre paiement, votre solde sera mis à jour dans quelques secondes");
    }).catch(() => {
      Alert.alert(MessageEnum.GENERIC_ERROR);
    })
  };

  const publishableKey = String(process.env.STRIPE_PUBLIC_KEY);

  return (
    <StripeProvider
      publishableKey={publishableKey}
      urlScheme="nourrain-app"
    >
      <CustomSafeArea>
        <ScrollView flex={1} bg="$white" pt="$4" px="$4">
          <Text fontSize="$4xl" color="$black" mt="$10" pt="$10" mb="$12">
            Boutique
          </Text>
          {pricingItems ?
                pricingItems.map((prop, key) => {
                  return (
                      <Box bg="$white" key={key}>
                        <Text fontSize="$xl" color="$black" mb="$4">
                          Pack de {prop.amount} Guirk
                        </Text>
                        <Pressable onPress={() => handlePress(prop)} bg="$grey" rounded="$md" mb="$4" px="$4">
                          <Text color="$black" p="$4" textAlign="center" fontSize="$xl">
                            {prop.euro_price} €
                          </Text>
                        </Pressable>
                      </Box>
                  )
                })
          :
              <Text>Chargement de la boutique...</Text>
          }
        </ScrollView>
      </CustomSafeArea>
    </StripeProvider>
  );
};

export default ShopScreen;
