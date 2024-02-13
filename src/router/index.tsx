import AppTabs from '@/router/tabs';
import useGLobalStore from '@/store';
import AuthStack from '@/router/Auth-stack';
import { NavigationContainer } from '@react-navigation/native';

const Router: React.FC = () : JSX.Element => {
  const { userToken } = useGLobalStore();

  return (
    <NavigationContainer>
      { userToken  ? <AppTabs /> : <AuthStack /> }
    </NavigationContainer>
  )
}

export default Router;
