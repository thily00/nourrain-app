import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack } from '@/router/App-stack';
import { Home, User, Coins } from 'lucide-react-native';



const AppTabs: React.FC = () : JSX.Element => {
    const Tab = createBottomTabNavigator();
    
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="home" 
                component={HomeStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <Home color={ focused ? "#0077E6" : "#748c94" } />
                    )
                }}
            />
            <Tab.Screen 
                name="nourrains" 
                component={HomeStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <Coins color={ focused ? "#0077E6" : "#748c94" } />
                    )
                    
                }}
            />
            <Tab.Screen 
                name="profile" 
                component={HomeStack}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <User color={ focused ? "#0077E6" : "#748c94" } />
                    )
                    
                }}
            />
        </Tab.Navigator>
    )
}

export default AppTabs;