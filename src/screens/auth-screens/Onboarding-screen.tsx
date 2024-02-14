import { Platform } from 'react-native';
import { Box, Text, VStack} from '@gluestack-ui/themed';
import BaseButton from '@/components/shared/BaseButton';
import CustomSafeArea  from '@/components/shared/CustomSafeArea';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


type Props = NativeStackScreenProps<any>;
const OnboardingScreen = ({navigation}: Props): React.JSX.Element => {

  const goToLogin = () => {
    navigation.navigate('login') 
  }  

  return (
    <CustomSafeArea statusBarStyle='dark-content' statusBarColor='white'>
      <Box flex={1} bg="$white" px="$4" pt="$10">
        <Text fontSize="$2xl" color='$black' mt="$10" textAlign='center'>NOURRAIN</Text>
        <Text mt="$4" mb="$10" textAlign='center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>

        <VStack position='absolute' alignSelf='center' bottom={Platform.OS === 'ios' ? "$10" : "$4"} gap="$4" width="$full">
            <BaseButton name='Se connecter' todo={goToLogin} btnVariant='solid'/>
            <BaseButton name="S'inscrire" todo={() => console.log('go to register')} btnVariant='outline'/>
        </VStack>
      </Box>
    </CustomSafeArea>
  )
}

export default OnboardingScreen