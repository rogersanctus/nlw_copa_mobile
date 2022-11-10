import {VStack, Heading} from 'native-base';
import {Header} from '../components/Header';
import {Input} from '../components/Input';

import {Button} from '../components/Button';

export function FindPool() {
  return (
    <VStack flex={1} bg="gray.900">
      <Header title="Buscar por código" showBackButton />

      <VStack mt={8} mx={5} alignItems="center">
        <Heading
          fontFamily="heading"
          color="white"
          fontSize="xl"
          mx={8}
          textAlign="center">
          Encontre um bolão através de seu código único
        </Heading>

        <Input mt={8} mb={2} placeholder="Qual o código do bolão?" />

        <Button text="Buscar Bolão" />
      </VStack>
    </VStack>
  );
}
