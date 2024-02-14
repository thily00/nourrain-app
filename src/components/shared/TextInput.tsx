import { Text, TextInput } from 'react-native'
import { Box, InputIcon, Pressable } from '@gluestack-ui/themed';
import { EyeIcon, EyeOffIcon } from 'lucide-react-native';

import React from 'react'

type TextInputFieldPropd = {
    label?: string,
    placeholder: string,
    type?: "text" | "password"
}

const TextInputField: React.FC<TextInputFieldPropd> = ({
    label,
    placeholder,
    type
}): React.JSX.Element => {
  const [showPassword, setShowPassword] = React.useState(false)

  const tooglePassword = () => {
    setShowPassword(!showPassword)
  }


  return (
    <Box mb="$4" position='relative'>
        { label && <Text style={{marginBottom: 5, fontWeight:'500'}}>{label}</Text> }
        <TextInput
            placeholder={placeholder}
            secureTextEntry={!showPassword}
            style={{ height: 50, borderColor: 'gray', backgroundColor:'#f1f4f9', borderRadius: 10, paddingHorizontal:10 }}
        />
         { type === "password" && (
          <Pressable onPress={tooglePassword} position='absolute' bottom="$4" right="$2">
             <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} color="$secondary300"/>
          </Pressable>
        )}
    </Box>
  )
}

export default TextInputField