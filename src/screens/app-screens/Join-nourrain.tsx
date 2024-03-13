import CustomSafeArea from "@/components/shared/CustomSafeArea";
import BaseButton from "@/components/shared/BaseButton";
import { Box, Text, VStack, ScrollView } from "@gluestack-ui/themed";
import TextInputField from "@/components/shared/TextInput";
import UserCard from "@/components/shared/UserCard";
import TextAreaInput from "@/components/shared/TextAreaInput";

const JoinNourrain = (): React.JSX.Element => {
  return (
    <CustomSafeArea>
      <ScrollView flex={1} bg="$white" pt="$4" px="$4">
        {/* <Text>Manager nourrain</Text> */}

        <TextInputField
          label="Rejoindre un nourrain"
          placeholder="Entrez le code du nourrain"
          type="text"
          value={"code nourrain"}
        />
        <VStack alignSelf="center" gap="$4" width="$full" mt="$8">
          <BaseButton
            name="Rejoindre"
            todo={() => console.log("test")}
            btnVariant="solid"
          />
        </VStack>
      </ScrollView>
    </CustomSafeArea>
  );
};

export default JoinNourrain;
