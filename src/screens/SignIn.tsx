import Logo from "../assets/logo.svg"
import { Button } from "../components/Button";
import { Fontisto } from '@expo/vector-icons'
import { Text, Icon } from "native-base";

export function SignIn() {
    return (
        <>
            <Logo width={212} height={40} />
            <Button
                text="Entrar com Google"
                variant="secondary"
                leftIcon={
                    <Icon as={Fontisto} name="google" color="white" size="md" />
                }
                mt={12}
            />
            <Text color="gray.200" textAlign="center" mt={4}>
                Não utilizamos nenhuma informação além {'\n'}
                do seu e-mail para a criação de sua conta.
            </Text>
        </>
    )
}