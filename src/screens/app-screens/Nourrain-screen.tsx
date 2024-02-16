import CustomSafeArea from "@/components/shared/CustomSafeArea";
import BaseButton from "@/components/shared/BaseButton";
import { Box, Text, VStack, ScrollView, Pressable } from "@gluestack-ui/themed";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<any>;
const NourrainScreen = ({ navigation }: Props): React.JSX.Element => {
    const goToManageScreen = () => {
        navigation.navigate("ManageNourrain");
    }

    const goToMapsScreen = () => {
      navigation.navigate("Maps");
    }

  return (
    <CustomSafeArea>
      <ScrollView flex={1} bg="$white" pt="$4" px="$4">
        <BaseButton
          name="Gérer"
          todo={goToManageScreen}
          btnVariant="solid"
        />
        <Box bg="$white">
          <Text fontSize="$2xl" color="$black" mt="$4" mb="$4">
            Nourrain “Team EduSign”
          </Text>
          <Text fontSize="$xl" color="$black" mb="$2">
            Nourrain “Team EduSign”
          </Text>
          <Text fontSize="$xl" color="$black">
            Nourrain “Team EduSign”
          </Text>
        </Box>
        <Text fontSize="$8xl" pt="$32" color="$black" textAlign="center">
          86$
        </Text>
        <Text fontSize="$xl" color="$black" textAlign="center" mb="$8">
          Solde total
        </Text>
        <VStack gap="$4" mb="$4" width="$full">
          <BaseButton
            name="Ajouter un Guirk"
            todo={() => console.log("test")}
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
