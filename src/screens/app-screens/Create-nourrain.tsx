import CustomSafeArea from "@/components/shared/CustomSafeArea";
import BaseButton from "@/components/shared/BaseButton";
import { Box, Text, VStack, ScrollView } from "@gluestack-ui/themed";
import TextInputField from "@/components/shared/TextInput";
import UserCard from "@/components/shared/UserCard";
import TextAreaInput from "@/components/shared/TextAreaInput";

const CreateNourrain = (): React.JSX.Element => {
  return (
    <CustomSafeArea>
      <ScrollView flex={1} bg="$white" pt="$4" px="$4">
        {/* <Text>Manager nourrain</Text> */}

        <TextInputField
          label="Nom du nourrain"
          placeholder="Entrez votre adresse email"
          type="text"
          value={"Team EduSign"}
        />
        <TextAreaInput
          label="Description du nourrain"
          placeholder="Entrez votre adresse email"
          value={
            "Le nourrain lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae dolorem nobis"
          }
        />

        <VStack alignSelf="center" gap="$4" width="$full" mt="$8">
          <BaseButton
            name="Sauvegarder"
            todo={() => console.log("test")}
            btnVariant="solid"
          />
        </VStack>
      </ScrollView>
    </CustomSafeArea>
  );
};

export default CreateNourrain;
