import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, ManageScreen, ShopScreen } from "@/screens";

const Stack = createNativeStackNavigator();

// Home Stack Navigator
const HomeStack = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Manage"
        component={ManageScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export { HomeStack };
