import CustomSafeArea from "@/components/shared/CustomSafeArea";
import BaseButton from "@/components/shared/BaseButton";
import { Box, Text, VStack, ScrollView, Pressable } from "@gluestack-ui/themed";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import useGLobalStore from "@/store";

type Props = NativeStackScreenProps<any>;
const HomeScreen = ({ navigation }: Props): React.JSX.Element => {
  const { signOut } = useGLobalStore();
  const firstname = useGLobalStore((state) => state.firstname);
  const wallet = useGLobalStore((state) => state.wallet);
  const createdNourrains = [
    {
      id: 1,
      name: "Team Ilies",
      wallet: 32,
    },
    {
      id: 2,
      name: "Team gay",
      wallet: 33,
    },
  ];
  const joinedNourrains = [
    {
      id: 1,
      name: "Team Ilies2",
      wallet: 92,
    },
    {
      id: 2,
      name: "Team gay2",
      wallet: 42,
    },
  ];

  const goToNourrainScreen = () => {
    navigation.navigate("Nourrain");
  };
  const goToShop = () => {
    navigation.navigate("Shop");
  };
  return (
    <CustomSafeArea>
      <ScrollView flex={1} bg="$white" px="$4">
        <Text
          fontSize="$2xl"
          color="$black"
          mt="$10"
          mb="$12"
          textAlign="center"
        >
          Bienvenue {firstname}
        </Text>
        <Text color="$black" fontSize="$xl">
          Mon solde
        </Text>
        <Text color="$black" pt="$8" mb="$4" textAlign="center" fontSize="$4xl">
          {wallet} $
        </Text>

        <BaseButton
          name="Acheter des Guirk"
          todo={goToShop}
          btnVariant="solid"
        />

        <Text color="$black" fontSize="$xl" mt="$4" mb="$2">
          Mes nourrains
        </Text>

        {createdNourrains.map((nourrain) => (
          <Pressable
            key={nourrain.id}
            onPress={goToNourrainScreen}
            bg="$grey"
            rounded="$md"
            mb="$4"
            px="$4"
          >
            <Text color="$black" pt="$8" textAlign="center" fontSize="$2xl">
              {nourrain.wallet} $
            </Text>
            <Text color="$black" p="$4" textAlign="center">
              {nourrain.name}
            </Text>
          </Pressable>
        ))}

        <Text color="$black" fontSize="$xl" mb="$2">
          Les nourrains que j’ai rejoint
        </Text>

        {joinedNourrains.map((nourrain) => (
          <Box key={nourrain.id} bg="$grey" rounded="$md" mb="$4" px="$4">
            <Text color="$black" pt="$8" textAlign="center" fontSize="$2xl">
              {nourrain.wallet} $
            </Text>
            <Text color="$black" p="$4" textAlign="center">
              {nourrain.name}
            </Text>
          </Box>
        ))}

        <Text color="$black" fontSize="$xl" mb="$4">
          Accéder à plus de nourrain
        </Text>
        <VStack gap="$4" width="$full">
          <BaseButton
            name="Créer un nourrain"
            todo={() => console.log("test")}
            btnVariant="solid"
          />
          <BaseButton
            name="Rejoindre un nourrain"
            todo={() => console.log("test")}
            btnVariant="solid"
          />

          <BaseButton
            name="Se deconnecter"
            todo={signOut}
            btnVariant="solid"
            action="negative"
          />
        </VStack>
      </ScrollView>
    </CustomSafeArea>
  );
};

export default HomeScreen;
