import { Platform } from 'react-native'
import BaseButton from '@/components/shared/BaseButton'
import CustomSafeArea from '@/components/shared/CustomSafeArea'
import TextInputField from '@/components/shared/TextInput'
import { Box, VStack, Text, ProgressFilledTrack, Progress, Pressable } from '@gluestack-ui/themed'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';
import React from 'react'
import { register } from '@/services/auth'
import useGLobalStore from '@/store'


type Props = NativeStackScreenProps<any>;
const RegisterScreen = ({navigation}: Props): React.JSX.Element => {
  const [step, setStep] = React.useState(1)
  const [stepValue, setStepValue] = React.useState(50)
  const [firstname, setFirstname] = React.useState('')
  const [lastname, setLastname] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')
  
  const { signIn } = useGLobalStore();


  const registerUser = async () => {
    if(step === 1) {
      if(firstname.trim() === '' || lastname.trim() === '' || email.trim() === '') {
        return
      }
      setStep(2)
      setStepValue(100)
      return
    }
    
    if(step === 2) {
      if(password.trim() === '' || confirmPassword.trim() === '') {
        return
      } else if( password !== confirmPassword){
        return
      }
      const token = await register(firstname, lastname, email, password)
      signIn(token);
    }

  }

  const goBack = () => {
    if(step === 2) {
      setStep(1)
      setStepValue(50)
      return
    }
    navigation.goBack()
  }

  const goToLogin = () => {
    navigation.navigate('login') 
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

        {step === 1 && (
          <StepOne 
            firstname={firstname}
            lastname={lastname}
            email={email}
            setFirstname={setFirstname}
            setLastname={setLastname}
            setEmail={setEmail}
          />)
        }
        {step === 2 && (
          <StepTwo 
            password={password}
            confirmPassword={confirmPassword}
            setPassword={setPassword}
            setConfirmPassword={setConfirmPassword}
          />)
        }

        <VStack position='absolute' alignSelf='center' bottom={Platform.OS === 'ios' ? "$10" : "$4"} gap="$4" width="$full">
            <BaseButton name="S'inscrire" todo={registerUser} btnVariant='solid'/>
            <Pressable onPress={goToLogin}>
              <Text fontSize="$sm" textAlign='center'>Vous n'avez pas de compte ? <Text color="$primary500" fontWeight='$semibold'>S'inscrire</Text></Text>
            </Pressable>
        </VStack>
      </Box>
    </CustomSafeArea>  
  )
}


type StepOnePros = {
  firstname: string,
  lastname: string,
  email: string,
  setFirstname: (value: string) => void
  setLastname: (value: string) => void
  setEmail: (value: string) => void
}
const StepOne = ({firstname, lastname, email, setFirstname, setLastname, setEmail}: StepOnePros) => {
  return (
    <>
      <TextInputField label='Prénom' placeholder='Entrez votre prénom' type='text' value={firstname} onChange={setFirstname}/>
      <TextInputField label='Nom' placeholder='Entrez votre nom' type='text' value={lastname} onChange={setLastname} />
      <TextInputField label='Email' placeholder='Entrez votre adresse email' type='text' value={email} onChange={setEmail}/>
    </>
  )
}

type StepTwoPros = {
  password: string,
  confirmPassword: string,
  setPassword: (value: string) => void
  setConfirmPassword: (value: string) => void
}
const StepTwo = ({password, confirmPassword, setPassword, setConfirmPassword}:StepTwoPros) => {
  return (
    <>
      <TextInputField label='Mot de passe' placeholder='Entrez votre mot de passe' type='password' value={password} onChange={setPassword}/>
      <TextInputField label='Confirmation mot de passe' placeholder='Confirmez votre mot de passe' type='password' value={confirmPassword} onChange={setConfirmPassword}/>
    </>
  )
}

export default RegisterScreen