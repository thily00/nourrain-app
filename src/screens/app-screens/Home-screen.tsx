import CustomSafeArea from "@/components/shared/CustomSafeArea";
import BaseButton from "@/components/shared/BaseButton";
import { Box, Text, VStack, ScrollView } from "@gluestack-ui/themed";
import React from "react";

const HomeScreen = (): React.JSX.Element => {
 
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
          Bienvenue Ilies
        </Text>
        <Text color="$black" fontSize="$xl">
          Mon solde
        </Text>
        <Text color="$black" pt="$8" mb="$4" textAlign="center" fontSize="$4xl">
          36$
        </Text>

        <BaseButton
          name="Acheter des Guirk"
          todo={() => console.log("test")}
          btnVariant="solid"
        />

        <Text color="$black" fontSize="$xl" mt="$4" mb="$2">
          Mes nourrains
        </Text>

        <Box bg="$grey" rounded="$md" mb="$4" px="$4">
          <Text color="$black" pt="$8" textAlign="center" fontSize="$2xl">
            36$
          </Text>
          <Text color="$black" p="$4" textAlign="center">
            Acheter des Guirk
          </Text>
        </Box>

        <Text color="$black" fontSize="$xl" mb="$2">
          Les nourrains que j’ai rejoint
        </Text>

        <Box bg="$grey" rounded="$md" mb="$4" px="$4">
          <Text color="$black" pt="$8" textAlign="center" fontSize="$2xl">
            0$
          </Text>
          <Text color="$black" p="$4" textAlign="center">
            Nourrain entres collègues
          </Text>
        </Box>

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
        </VStack>
      </ScrollView>
    </CustomSafeArea>
  );
};

export default HomeScreen;
