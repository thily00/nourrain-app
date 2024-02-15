import { View, Text, Pressable } from 'react-native'
import React from 'react'
import useGLobalStore from '@/store';

const HomeScreen = (): React.JSX.Element => {
  const { signOut } = useGLobalStore();

  const logout = () => {
    signOut()
  }

  return (
    <View>
      <Text>Home-screen</Text>
      <Pressable onPress={logout}>
        <Text>Se deconnecter</Text>
      </Pressable>
    </View>
  )
}

export default HomeScreen