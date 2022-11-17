import {VStack, Heading, Divider, Text} from 'native-base';
import {Header} from '../components/Header';
import {Input} from '../components/Input';

import {Button} from '../components/Button';
import {useCallback, useState} from 'react';
import {api, ApiError} from '../lib/api';
import {PoolProps} from '../components/PoolCard';
import {Loading} from '../components/Loading';
import {PoolHeader} from '../components/PoolHeader';
import {useToastAlert} from '../components/ToastAlert';

export function FindPool() {
  const [poolCode, setPoolCode] = useState<string | null>(null);
  const [pool, setPool] = useState<PoolProps | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const toast = useToastAlert();

  function fetchPoolByCode() {
    const abortController = new AbortController();

    if (poolCode) {
      (async function () {
        try {
          setIsLoading(true);
          const {data} = await api.get('/pools/code/' + poolCode, {
            signal: abortController.signal,
          });

          setPool(data);
          console.log('Pool', pool);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      })();
    } else {
      console.log('No pool code was provided');
    }

    return abortController;
  }

  async function handleJoinPool() {
    try {
      setIsProcessing(true);

      await api.post('/pools/join', {code: poolCode});

      toast.show({
        title: 'Juntar-se ao bolão',
        description: 'Você se juntou com sucesso ao bolão!',
        status: 'success',
      });
    } catch (error) {
      if (error instanceof ApiError) {
        toast.show({
          title: 'Erro ao juntar-se ao bolão',
          description: error.message,
          status: 'warning',
        });
      }
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  }

  const DrawPool = useCallback(() => {
    if (!pool) {
      return null;
    }

    return (
      <VStack mt={4} w="full">
        <Text color="gray.200" textAlign="center">
          Bolão Encontrado:
        </Text>
        <PoolHeader data={pool} />
        <Button
          text="Juntar-se ao Bolão"
          variant="secondary"
          onPress={handleJoinPool}
          isLoading={isProcessing}
        />
      </VStack>
    );
  }, [pool, isProcessing]);

  return (
    <VStack flex={1} bg="gray.900">
      <Header title="Buscar por código" showBackButton />

      <VStack mt={8} px={5} alignItems="center">
        <Heading
          fontFamily="heading"
          color="white"
          fontSize="xl"
          mx={8}
          textAlign="center">
          Encontre um bolão através de seu código único
        </Heading>

        <Input
          mt={8}
          mb={2}
          placeholder="Qual o código do bolão?"
          onChangeText={setPoolCode}
          value={poolCode ?? undefined}
        />

        <Button
          text="Buscar Bolão"
          disabled={isLoading}
          onPress={() => fetchPoolByCode()}
        />
        <Divider mt={4} bg="gray.600" />

        {isLoading ? <Loading /> : <DrawPool />}
      </VStack>
    </VStack>
  );
}
