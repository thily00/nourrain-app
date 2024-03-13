import CustomSafeArea from "@/components/shared/CustomSafeArea";
import BaseButton from "@/components/shared/BaseButton";
import { Box, Text, VStack, ScrollView, Pressable, useToast } from "@gluestack-ui/themed";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { loadNourrain } from "@/services/nourrain";
import { add } from "@/services/guirk";
import AppToast from "@/components/shared/Toast";

type Props = NativeStackScreenProps<any>;
const NourrainScreen = ({ navigation, route }: Props): React.JSX.Element => {
  const [nourrain, setNourrain] = React.useState({} as any);
  const toast = useToast();

  const load = async (id: number) => {
    const response = await loadNourrain(id);
    setNourrain(response.data);
  }

  const addGuirk = async(id: number) => {
    try {
      const result = await add(id);
      load(id);
      showToast('success', '', 'Guirk ajouté avec succès');
    } catch (error) {
      // console.error("Erreur capturée avec async/await :", error);
      showToast('error', '', 'Vous n\'avez pas assez de guirk');
    }
  }
  
  const goToManageScreen = () => {
    navigation.navigate("ManageNourrain");
  }

  const goToMapsScreen = () => {
    navigation.navigate("Maps");
  }

  const showToast = (action:any, message:string, description:string) => {
    toast.show({
        placement:"top",
        render: ({ id }) => {
          const toastId = "toast-" + id;
          return (
             <AppToast action={action} message={message} description={description} />
          );
        },
    })
  }

  React.useEffect(() => {
      const { id } = route.params;
      load(id);
  }, []);

  return (
    <CustomSafeArea>
      <ScrollView flex={1} bg="$white" pt="$4" px="$4">
        <BaseButton
          name="Gérer"
          todo={goToManageScreen}
          btnVariant="solid"
          isDisabled={!nourrain?.isOwner}
        />
        <Box bg="$white" mt="$6">
          <Text fontSize="$2xl" color="$black" mt="$4" mb="$4" fontWeight="$bold">
            Nourrain: {nourrain?.nourrain?.name}
          </Text>
          <Text fontSize="$lg" color="$black" mb="$1" fontWeight="$light">
            Créateur: {nourrain?.owner?.firstname} {nourrain?.owner?.lastname}
          </Text>
          <Text fontSize="$lg" color="$black" mb="$2" fontWeight="$light">
            {nourrain?.nourrain?.description}
          </Text>
          
        </Box>
        <Text fontSize="$8xl" pt="$32" color="$black" textAlign="center">
          {nourrain?.nourrain?.wallet} $
        </Text>
        <Text fontSize="$xl" color="$black" textAlign="center" mb="$8">
          Solde total
        </Text>
        <VStack gap="$4" mb="$4" width="$full">
          <BaseButton
            name="Ajouter un Guirk"
            todo={() => addGuirk(nourrain?.nourrain?.id)}
            btnVariant="solid"
          />
          <BaseButton
            name="Collecter"
            todo={() => console.log("test")}
            btnVariant="solid"
          />
        </VStack>
        <Pressable onPress={goToMapsScreen}>
          <Text fontSize="$xl" color="$black" textAlign="center" mb="$8" underline>
            Ou les depenser ?
          </Text>
        </Pressable>
        
      </ScrollView>
    </CustomSafeArea>
  );
};

export default NourrainScreen;
