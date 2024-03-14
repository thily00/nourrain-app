import CustomSafeArea from "@/components/shared/CustomSafeArea";
import BaseButton from "@/components/shared/BaseButton";
import { Box, Text, VStack, ScrollView, useToast, HStack } from "@gluestack-ui/themed";
import TextInputField from "@/components/shared/TextInput";
import UserCard from "@/components/shared/UserCard";
import TextAreaInput from "@/components/shared/TextAreaInput";
import { joinNourrain } from "@/services/nourrain";
import React from "react";
import AppToast from "@/components/shared/Toast";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Platform } from "react-native";

type Props = NativeStackScreenProps<any>;
const JoinNourrain = ({navigation}: Props): React.JSX.Element => {
  const [code, setCode] = React.useState('' as string)
  const toast = useToast();


  const join = async (code: string) => {
    try { 
      const result = await joinNourrain(code);
      if(result.status === 200) {
        showToast('success', '', 'Nourrain rejoint avec succès');
        navigation.navigate('Home');
      }
    } catch (error) {
      showToast('error', '', 'Code invalide');
    }
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

  return (
    <CustomSafeArea>
      <ScrollView flex={1} bg="$white" pt="$4" px="$4">
        {/* <Text>Manager nourrain</Text> */}
        <HStack justifyContent="space-between" alignItems="center" mt={Platform.OS === 'ios' ?  "$16" : "$8"} mb="$8">
          <Text fontSize="$2xl" color="$black" pt="$4">
            Rejoindre un nourrain
          </Text>
        </HStack>

        <TextInputField
          label="Rejoindre un nourrain"
          placeholder="Entrez le code du nourrain"
          type="text"
          value={code}
          onChange={setCode}
        />
        <VStack alignSelf="center" gap="$4" width="$full" mt="$4">
          <BaseButton
            name="Rejoindre"
            todo={() => join(code)}
            btnVariant="solid"
          />
        </VStack>
      </ScrollView>
    </CustomSafeArea>
  );
};

export default JoinNourrain;
