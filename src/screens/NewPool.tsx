import {VStack, Heading, Text} from 'native-base';
import {Header} from '../components/Header';
import {Input} from '../components/Input';

import Logo from '../assets/logo.svg';
import {Button} from '../components/Button';

export function NewPool() {
  return (
    <VStack flex={1} bg="gray.900">
      <Header title="Criar novo bolão" />

      <VStack mt={8} mx={5} alignItems="center">
        <Logo />

        <Heading
          fontFamily="heading"
          color="white"
          fontSize="xl"
          mt={10}
          mx={8}
          textAlign="center">
          Crie seu próprio bolão da copa e compartilhe entre seus amigos!
        </Heading>

        <Input mt={8} mb={2} placeholder="Qual o nome do seu bolão?" />

        <Button text="Criar meu bolão" />

        <Text color="gray.200" mt={4} px={10} textAlign="center" fontSize="md">
          Após criar seu bolão, você receberá um código único que poderá usar
          para convidar outras pessoas.
        </Text>
      </VStack>
    </VStack>
  );
}
