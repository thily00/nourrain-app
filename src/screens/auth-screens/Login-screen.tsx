import CustomSafeArea  from '@/components/shared/CustomSafeArea';
import { Box, Text, } from '@gluestack-ui/themed';

const LoginScreen = (): React.JSX.Element => {
  return (
    <CustomSafeArea statusBarStyle='dark-content' statusBarColor='white'>
      <Box flex={1} bg="$white">
        <Text>Login Screen</Text>
      </Box>
    </CustomSafeArea>      
  )
}

export default LoginScreen