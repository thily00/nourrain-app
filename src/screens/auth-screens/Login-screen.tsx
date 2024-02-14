import CustomSafeArea  from '@/components/shared/CustomSafeArea';
import { Box, Text, VStack } from '@gluestack-ui/themed';
import { Pressable, Platform } from 'react-native';
import TextInputField from '@/components/shared/TextInput';
import BaseButton from '@/components/shared/BaseButton';
import { Feather } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';



type Props = NativeStackScreenProps<any>;
const LoginScreen = ({navigation}: Props): React.JSX.Element => {

  const login = () => {
    console.log('login')
  }


  return (
    <CustomSafeArea statusBarStyle='dark-content' statusBarColor='white'>
      <Box flex={1} bg="$white" px="$4" pt="$10">

        <Pressable onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="black" />
        </Pressable>

        <Text fontSize="$2xl" color='$black' mt="$10">Bienvenue 👋</Text>
        <Text mb="$10">Veuillez renseigner vos identifiants pour vous connecter</Text>

        <TextInputField label='Email' placeholder='Entrez votre adresse email'/>
        <TextInputField label='Mot de passe' placeholder='Entrez votre mot de passe'/>
        <Pressable>
          <Text fontSize="$sm" textAlign='right' color="$blue">Mot de passe oublié ?</Text>
        </Pressable>

        <VStack position='absolute' alignSelf='center' bottom={Platform.OS === 'ios' ? "$10" : "$4"} gap="$4" width="$full">
            <BaseButton name='Se connecter' todo={login} btnVariant='solid'/>
        </VStack>
      </Box>
    </CustomSafeArea>      
  )
}

export default LoginScreen