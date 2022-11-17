import {VStack, Heading, Text, useClipboard} from 'native-base';
import {Header} from '../components/Header';
import {Input} from '../components/Input';

import Logo from '../assets/logo.svg';
import {Button} from '../components/Button';
import {useState} from 'react';
import {api, ApiError} from '../lib/api';
import {useToastAlert} from '../components/ToastAlert';

export function NewPool() {
  const [poolName, setPoolName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToastAlert();
  const clipboard = useClipboard();

  async function handleCreatePool() {
    if (!poolName.trim()) {
      toast.show({
        title: 'Novo bolão',
        description: 'Nome do bolão não informado',
        status: 'error',
      });
      return;
    }

    try {
      setIsLoading(true);
      const {data} = await api.post<{code: string}>('/pools', {
        title: poolName,
      });

      await clipboard.onCopy(data.code);

      toast.show({
        title: 'Novo Bolão',
        description:
          'Bolão criado com sucesso. Seu código foi copiado para área de transferência',
        status: 'success',
      });

      setPoolName('');
    } catch (error) {
      if (error instanceof ApiError) {
        toast.show({
          title: 'Novo Bolão',
          description: error.message,
          status: 'error',
        });
      }
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

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

        <Input
          mt={8}
          mb={2}
          placeholder="Qual o nome do seu bolão?"
          onChangeText={setPoolName}
          value={poolName}
        />

        <Button
          text="Criar meu bolão"
          onPress={handleCreatePool}
          isLoading={isLoading}
        />

        <Text color="gray.200" mt={4} px={10} textAlign="center" fontSize="md">
          Após criar seu bolão, você receberá um código único que poderá usar
          para convidar outras pessoas.
        </Text>
      </VStack>
    </VStack>
  );
}
