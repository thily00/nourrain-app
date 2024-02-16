import { Text, TextInput } from 'react-native'
import { Box, Input, InputField, InputIcon, Pressable } from '@gluestack-ui/themed';
import { EyeIcon, EyeOffIcon } from 'lucide-react-native';

import React from 'react'

type TextInputFieldPropd = {
    label?: string,
    value?: string,
    placeholder: string,
    type?: "text" | "password",
    onChange?: (value: string) => void
}

const TextInputField: React.FC<TextInputFieldPropd> = ({
    label,
    placeholder,
    type,
    value,
    onChange
}): React.JSX.Element => {
  const [showText, setShowText] = React.useState(false)

  const tooglePassword = () => {
    setShowText(!showText)
  }

  React.useEffect(() => {
    if(type === "text") {
      setShowText(true)
    }

    if(type === "password") {
      setShowText(showText)
    }
  }, [showText])

  return (
    <Box mb="$4" position='relative'>
        { label && <Text style={{marginBottom: 5, fontWeight:'500'}}>{label}</Text> }
        <TextInput
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
            secureTextEntry={!showText}
            style={{ height: 50, borderColor: 'gray', backgroundColor:'#f1f4f9', borderRadius: 10, paddingHorizontal:10 }}
        />
        
        {/* <Input variant="outline" size="md" isDisabled={false} isInvalid={false} isReadOnly={false} >
          <InputField
              placeholder='Enter Text here'
          />
        </Input> */}
      
         { type === "password" && (
          <Pressable onPress={tooglePassword} position='absolute' bottom="$4" right="$2">
             <InputIcon as={showText ? EyeIcon : EyeOffIcon} color="$secondary300"/>
          </Pressable>
        )}
    </Box>
  )
}

export default TextInputField