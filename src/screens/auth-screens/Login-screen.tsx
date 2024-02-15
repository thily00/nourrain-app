import React from 'react';
import CustomSafeArea  from '@/components/shared/CustomSafeArea';
import { Box, Text, VStack, Pressable } from '@gluestack-ui/themed';
import { Platform } from 'react-native';
import TextInputField from '@/components/shared/TextInput';
import BaseButton from '@/components/shared/BaseButton';
import { Feather } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { login } from '@/services/auth';
import useGLobalStore from '@/store';


type Props = NativeStackScreenProps<any>;
const LoginScreen = ({navigation}: Props): React.JSX.Element => {
  const { signIn } = useGLobalStore();

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const loginUser = async () => {
    console.log(email, password)
    const token = await login(email, password)
    signIn(token);
  }

  const goToregister = () => {
    navigation.navigate('register')
  }

  return (
    <CustomSafeArea statusBarStyle='dark-content' statusBarColor='white'>
      <Box flex={1} bg="$white" px="$4" pt="$10">

        <Pressable onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="black" />
        </Pressable>

        <Text fontSize="$2xl" color='$black' pt="$2" mt="$10">Bienvenue 👋</Text>
        <Text mb="$10">Veuillez renseigner vos identifiants pour vous connecter</Text>

        <TextInputField label='Email *' placeholder='Entrez votre adresse email' type='text' value={email} onChange={setEmail}/>
        <TextInputField label='Mot de passe *' placeholder='Entrez votre mot de passe' type='password' value={password} onChange={setPassword}/>
        <Pressable>
          <Text fontSize="$sm" textAlign='right' color="$primary500">Mot de passe oublié ?</Text>
        </Pressable>

        <VStack position='absolute' alignSelf='center' bottom={Platform.OS === 'ios' ? "$10" : "$4"} gap="$4" width="$full">
            <BaseButton name='Se connecter' todo={loginUser} btnVariant='solid'/>
            <Pressable onPress={goToregister}>
              <Text fontSize="$sm" textAlign='center'>Vous n'avez pas de compte ? <Text color="$primary500" fontWeight='$semibold'>S'inscrire</Text></Text>
            </Pressable>
        </VStack>
      </Box>
    </CustomSafeArea>      
  )
}

export default LoginScreen