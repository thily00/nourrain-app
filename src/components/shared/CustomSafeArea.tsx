import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'react-native'

type CustomSafeAreaProps = {
    children: React.ReactNode,
    statusBarColor?: string,
    statusBarStyle?: 'light-content' | 'dark-content',
    translucent?: boolean
}

const CustomSafeArea: React.FC<CustomSafeAreaProps> = ({
  children, 
  statusBarStyle, 
  statusBarColor, 
  translucent
}): React.JSX.Element => {
  return (
    <SafeAreaView edges={[]} style={{flex: 1}}>
    <StatusBar 
        barStyle={statusBarStyle ? statusBarStyle : 'dark-content'}
        backgroundColor={statusBarColor ? statusBarColor : 'white'} 
        translucent = { translucent === true ? true : false }
    />
      { children }
    </SafeAreaView>
  )
}

export default CustomSafeArea