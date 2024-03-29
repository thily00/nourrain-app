import { Button, ButtonText} from '@gluestack-ui/themed';
import React from 'react'

type BaseButtonProps = {
    todo : () => void 
    btnVariant?: "outline" | "solid" | "link" | undefined,
    name?: string,
    action?:  "primary" | "negative"
    isDisabled?: boolean
    width?: string
}

const BaseButton:React.FC<BaseButtonProps> = ({todo, btnVariant, name, action, isDisabled, width}) => {
  return (
    <Button
      size="md"
      variant={btnVariant ? btnVariant : "solid"}
      action={action ? action : "primary"}
      w={width ? width : "$full"}
      onPress={todo}
      isDisabled={isDisabled ? true : false }>
        <ButtonText>{name}</ButtonText>
    </Button>
  )
}

export default BaseButton