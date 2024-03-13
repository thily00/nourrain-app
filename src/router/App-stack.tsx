import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HomeScreen,
  NourrainScreen,
  ManageScreen,
  ShopScreen,
  CreateNourrain,
  MapsScreen,
} from "@/screens";

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
        name="Nourrain"
        component={NourrainScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ManageNourrain"
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
      <Stack.Screen
        name="CreateNourrain"
        component={CreateNourrain}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Maps"
        component={MapsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export { HomeStack };
