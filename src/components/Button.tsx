import { Button as ButtonBase, IButtonProps, Text } from 'native-base'

interface ButtonProps extends IButtonProps {
    text: string
    variant: 'primary' | 'secondary'
}

export function Button({text, variant = 'primary', ...others}: ButtonProps) {
    return (
        <ButtonBase
            w="full"
            h="14"
            rounded="sm"
            fontSize="md"
            bg={
                variant === 'primary' ? 'yellow.500' : 'red.500'
            }
            _pressed={{
                bg: variant === 'primary' ? 'yellow.600' : 'red.600'
            }}
            {...others}
        >
            <Text
                color={ variant === 'primary' ? 'black' : 'white' }
                fontSize="md"
                textTransform="uppercase">
                {text}
            </Text>
        </ButtonBase>
    )
}