import { Platform, Pressable } from 'react-native'
import BaseButton from '@/components/shared/BaseButton'
import CustomSafeArea from '@/components/shared/CustomSafeArea'
import TextInputField from '@/components/shared/TextInput'
import { Box, VStack, Text, ProgressFilledTrack, Progress } from '@gluestack-ui/themed'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';
import React from 'react'


type Props = NativeStackScreenProps<any>;
const RegisterScreen = ({navigation}: Props): React.JSX.Element => {
  const [step, setStep] = React.useState(1)
  const [stepValue, setStepValue] = React.useState(50)
  
  const register = () => {
    if(step === 1) {
      setStep(2)
      setStepValue(100)
      return
    }
    console.log('register')
  }

  const goBack = () => {
    if(step === 2) {
      setStep(1)
      setStepValue(50)
      return
    }
    navigation.goBack()
  }

  return (
    <CustomSafeArea statusBarStyle='dark-content' statusBarColor='white'>
      <Box flex={1} bg="$white" px="$4" pt="$10">

        <Pressable onPress={() => goBack()}>
          <Feather name="arrow-left" size={24} color="black" />
        </Pressable>

        <Text fontSize="$2xl" color='$black' mt="$10">Inscription</Text>
        <Text my="$4">Veuillez renseigner vos identifiants pour vous inscrire</Text>

        <Progress value={stepValue} w="$full" size="sm" mb="$8">
          <ProgressFilledTrack />
        </Progress>

        {step === 1 && stepOne()}
        {step === 2 && stepTwo()}

        <VStack position='absolute' alignSelf='center' bottom={Platform.OS === 'ios' ? "$10" : "$4"} gap="$4" width="$full">
            <BaseButton name="S'inscrire" todo={register} btnVariant='solid'/>
        </VStack>
      </Box>
    </CustomSafeArea>  
  )
}



const stepOne = () => {
  return (
    <>
      <TextInputField label='Prénom' placeholder='Entrez votre prénom'/>
      <TextInputField label='Nom' placeholder='Entrez votre nom'/>
      <TextInputField label='Email' placeholder='Entrez votre adresse email'/>
    </>
  )
}

const stepTwo = () => {
  return (
    <>
      <TextInputField label='Mot de passe' placeholder='Entrez votre mot de passe' type='password'/>
      <TextInputField label='Confirmation mot de passe' placeholder='Confirmez votre mot de passe' type='password'/>
    </>
  )
}

export default RegisterScreen