import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack } from '@/router/App-stack';


const AppTabs: React.FC = () : JSX.Element => {
    const Tab = createBottomTabNavigator();
    
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="home" 
                component={HomeStack}
            />
        </Tab.Navigator>
    )
}

export default AppTabs;