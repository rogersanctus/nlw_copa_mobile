import {Divider, VStack, Icon, FlatList} from 'native-base';
import {Header} from '../components/Header';
import {Button} from '../components/Button';
import Octicons from 'react-native-vector-icons/Octicons';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useCallback, useState} from 'react';
import {api, ApiError} from '../lib/api';
import {useToastAlert} from '../components/ToastAlert';
import {PoolCard, PoolProps} from '../components/PoolCard';
import {Loading} from '../components/Loading';
import {EmptyPoolList} from '../components/EmptyPoolList';

export function Pools() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [pools, setPools] = useState<PoolProps[]>([]);
  const toast = useToastAlert();

  const RenderPoolCard = useCallback((data: {item: PoolProps}) => {
    return <PoolCard data={data.item} />;
  }, []);

  // Load all the pools
  useFocusEffect(
    useCallback(() => {
      const abortController = new AbortController();

      (async function () {
        try {
          setIsLoading(true);
          const {data} = await api.get<PoolProps[]>('/pools', {
            signal: abortController.signal,
          });
          setPools(data);
        } catch (error) {
          if (error instanceof ApiError) {
            toast.show({
              title: 'Lista de Bolões',
              description: error.message,
            });
          } else {
            console.error(error);
          }
        } finally {
          setIsLoading(false);
        }
      })();

      return () => {
        abortController.abort();
      };
    }, []), // eslint-disable-line react-hooks/exhaustive-deps
  );

  return (
    <VStack flex={1} bg="gray.900">
      <Header title="Meus bolões" showBackButton />

      <VStack p={5}>
        <Button
          text="Buscar bolão por código"
          leftIcon={
            <Icon as={Octicons} name="search" color="black" size="md" />
          }
          onPress={() => navigation.navigate('find')}
        />
        <Divider mt={4} bg="gray.600" />
      </VStack>

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={pools}
          px={5}
          keyExtractor={pool => pool.id}
          _contentContainerStyle={
            {pb: 16} /* eslint-disable-line react-native/no-inline-styles */
          }
          renderItem={RenderPoolCard}
          ListEmptyComponent={EmptyPoolList}
        />
      )}
    </VStack>
  );
}
