import { LoginScreen, RegisterScreen, OnboardingScreen } from '@/screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const AuthStack = (): JSX.Element => {
  return (
    <Stack.Navigator>
        <Stack.Screen
          name='onboarding'
          component={OnboardingScreen}
          options={{
            headerShown: false,
            animation: 'fade',
          }}
        />
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