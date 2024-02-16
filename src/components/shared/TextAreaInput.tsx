import React from 'react'
import { Box, Textarea, TextareaInput } from "@gluestack-ui/themed";
import { Text } from 'react-native';

type TextAreaInputProps = {
  label?: string,
  value?: string,
  placeholder: string,
  onChange?: (value: string) => void
}
const TextAreaInput = ({label, value, placeholder, onChange}: TextAreaInputProps) => {
  return (
    <Box>
         { label && <Text style={{marginBottom: 5, fontWeight:'500'}}>{label}</Text> }
        <Textarea
            size="md"
            w="$full"
            isReadOnly={false}
            isInvalid={false}
            isDisabled={false}
            bg="$blueGray100"
            borderWidth={0}
            borderRadius={"$md"}
            >
            <TextareaInput placeholder={placeholder}  value={value} onChangeText={onChange}/>
        </Textarea>
    </Box>
  )
}

export default TextAreaInput