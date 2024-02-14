import { Button, ButtonText} from '@gluestack-ui/themed';
import React from 'react'

type BaseButtonProps = {
    todo : () => void 
    btnVariant?: "outline" | "solid" | "link" | undefined,
    name?: string
}

const BaseButton:React.FC<BaseButtonProps> = ({todo, btnVariant, name}) => {
  return (
    <Button
      size="md"
      variant={btnVariant ? btnVariant : "solid"}
      action="primary"
      width="$full"
      onPress={todo}>
        <ButtonText>{name}</ButtonText>
    </Button>
  )
}

export default BaseButton