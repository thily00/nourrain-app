import { Text, TextInput } from 'react-native'
import { Box } from '@gluestack-ui/themed';

import React from 'react'

type TextInputFieldPropd = {
    label?: string,
    placeholder: string
}

const TextInputField: React.FC<TextInputFieldPropd> = ({
    label,
    placeholder
}): React.JSX.Element => {
  return (
    <Box mb="$4">
        { label && <Text style={{marginBottom: 5, fontWeight:'500'}}>{label}</Text> }
        <TextInput
            placeholder={placeholder}
            style={{ height: 50, borderColor: 'gray', backgroundColor:'#f1f4f9', borderRadius: 10, paddingHorizontal:10 }}
        />
    </Box>
  )
}

export default TextInputField