import { Button, ButtonText} from '@gluestack-ui/themed';
import React from 'react'

type BaseButtonProps = {
    todo : () => void 
    btnVariant?: "outline" | "solid" | "link" | undefined,
    name?: string,
    action?:  "primary" | "negative"
}

const BaseButton:React.FC<BaseButtonProps> = ({todo, btnVariant, name, action}) => {
  return (
    <Button
      size="md"
      variant={btnVariant ? btnVariant : "solid"}
      action={action ? action : "primary"}
      width="$full"
      onPress={todo}>
        <ButtonText>{name}</ButtonText>
    </Button>
  )
}

export default BaseButton