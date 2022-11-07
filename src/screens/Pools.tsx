import { Divider, Text, VStack } from "native-base";
import { Header } from "../components/Header"
import { Button } from "../components/Button"
import { Icon } from "native-base";
import { Octicons } from '@expo/vector-icons'

export function Pools() {
    return (
        <VStack flex={1} bg="gray.900">
            <Header title="Meus bolões" showBackButton />

            <VStack p={5}>
                <Button
                    text="Buscar bolão por código"
                    leftIcon={
                        <Icon as={Octicons} name="search" color="black" size="md" />
                    }
                />
                <Divider my={4} bg="gray.600" />
                <Text color="gray.200">Just a text</Text>
            </VStack>
        </VStack>
    )
}