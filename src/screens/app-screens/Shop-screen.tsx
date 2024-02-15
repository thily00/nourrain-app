import CustomSafeArea from "@/components/shared/CustomSafeArea";
import BaseButton from "@/components/shared/BaseButton";
import { Box, Text, VStack, ScrollView, Pressable } from "@gluestack-ui/themed";
import React from "react";

const ShopScreen = (): React.JSX.Element => {
  return (
    <CustomSafeArea>
      <ScrollView flex={1} bg="$white" pt="$4" px="$4">
        <Text fontSize="$4xl" color="$black" mt="$10" pt="$10" mb="$12">
          Boutique
        </Text>
        <Box bg="$white">
          <Text fontSize="$xl" color="$black" mb="$4">
            Pack de 5 guirk
          </Text>
          <Pressable
            onPress={() => console.log("test")}
            bg="$grey"
            rounded="$md"
            mb="$4"
            px="$4"
          >
            <Text color="$black" p="$4" textAlign="center" fontSize="$xl">
              36$
            </Text>
          </Pressable>
        </Box>
        <Box bg="$white">
          <Text fontSize="$xl" color="$black" mb="$4">
            Pack de 5 guirk
          </Text>
          <Pressable
            onPress={() => console.log("test")}
            bg="$grey"
            rounded="$md"
            mb="$4"
            px="$4"
          >
            <Text color="$black" p="$4" textAlign="center" fontSize="$xl">
              36$
            </Text>
          </Pressable>
        </Box>
        <Box bg="$white">
          <Text fontSize="$xl" color="$black" mb="$4">
            Pack de 5 guirk
          </Text>
          <Pressable
            onPress={() => console.log("test")}
            bg="$grey"
            rounded="$md"
            mb="$4"
            px="$4"
          >
            <Text color="$black" p="$4" textAlign="center" fontSize="$xl">
              36$
            </Text>
          </Pressable>
        </Box>
        <Box bg="$white">
          <Text fontSize="$xl" color="$black" mb="$4">
            Pack de 5 guirk
          </Text>
          <Pressable
            onPress={() => console.log("test")}
            bg="$grey"
            rounded="$md"
            mb="$4"
            px="$4"
          >
            <Text color="$black" p="$4" textAlign="center" fontSize="$xl">
              36$
            </Text>
          </Pressable>
        </Box>
      </ScrollView>
    </CustomSafeArea>
  );
};

export default ShopScreen;
