import CustomSafeArea from "@/components/shared/CustomSafeArea";
import BaseButton from "@/components/shared/BaseButton";
import { Box, Text, VStack, ScrollView } from "@gluestack-ui/themed";
import TextInputField from "@/components/shared/TextInput";
import TextAreaInput from "@/components/shared/TextAreaInput";
import { addNourrain } from "@/services/nourrain";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<any>;
const CreateNourrain = ({navigation}: Props): React.JSX.Element => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  const add = async () => {
    try {
      const result = await addNourrain(name, description);
      if(result.status === 201) {
        console.log('Nourrain ajouté avec succès');
        navigation.navigate('Home');
      }
    } catch (error) {
      console.log("Erreur capturée avec async/await :", error);
    }
  };

  return (
    <CustomSafeArea>
      <ScrollView flex={1} bg="$white" pt="$4" px="$4">
        {/* <Text>Manager nourrain</Text> */}

        <TextInputField
          label="Nom du nourrain"
          placeholder="Entrez votre adresse email"
          type="text"
          value={name}
          onChange={setName}
        />
        <TextAreaInput
          label="Description du nourrain"
          placeholder="Entrez votre adresse email"
          value={description}
          onChange={setDescription}
        />

        <VStack alignSelf="center" gap="$4" width="$full" mt="$8">
          <BaseButton
            name="Sauvegarder"
            todo={() => add()}
            btnVariant="solid"
          />
        </VStack>
      </ScrollView>
    </CustomSafeArea>
  );
};

export default CreateNourrain;
