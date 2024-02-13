import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, RegisterScreen } from '@/screens';

const Stack = createNativeStackNavigator();
const AuthStack = (): JSX.Element => {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{
            headerShown: false,
            animation: 'fade',
            }}
        />
        <Stack.Screen
            name="register"
            component={RegisterScreen}
            options={{
            headerShown: false,
            animation: 'fade',
            }}
        />
    </Stack.Navigator>
  );
}

export default AuthStack;