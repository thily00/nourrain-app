import CustomSafeArea from "@/components/shared/CustomSafeArea";
import BaseButton from "@/components/shared/BaseButton";
import { Box, Text, VStack, ScrollView } from "@gluestack-ui/themed";
import React from "react";

const ShopScreen = (): React.JSX.Element => {
  return (
    <CustomSafeArea>
      <ScrollView flex={1} bg="$white" pt="$4" px="$4">
        <BaseButton
          name="toto"
          todo={() => console.log("test")}
          btnVariant="solid"
        />
      </ScrollView>
    </CustomSafeArea>
  );
};

export default ShopScreen;
