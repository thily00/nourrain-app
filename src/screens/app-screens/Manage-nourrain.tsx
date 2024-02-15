import CustomSafeArea from "@/components/shared/CustomSafeArea";
import BaseButton from "@/components/shared/BaseButton";
import { Box, Text, VStack, ScrollView } from "@gluestack-ui/themed";
import React from "react";

const ManageScreen = (): React.JSX.Element => {
  return (
    <CustomSafeArea>
      <ScrollView flex={1} bg="$white" pt="$4" px="$4">
        <BaseButton
          name="Gérer"
          todo={() => console.log("test")}
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
          total
        </Text>
        <VStack gap="$4" mb="$4" width="$full">
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
        <Text fontSize="$xl" color="$black" textAlign="center" mb="$8">
          total
        </Text>
      </ScrollView>
    </CustomSafeArea>
  );
};

export default ManageScreen;
