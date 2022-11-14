import {RouteProp, useFocusEffect, useRoute} from '@react-navigation/native';
import {HStack, VStack} from 'native-base';
import {Header} from '../components/Header';
import {useCallback, useState} from 'react';
import {api} from '../lib/api';
import {Loading} from '../components/Loading';
import {PoolPros} from '../components/PoolCard';
import {PoolHeader} from '../components/PoolHeader';
import {Option} from '../components/Option';
import {EmptyPoolUserList} from '../components/EmptyPoolUserList';

type TabOption = 'palpites' | 'ranking';

export function PoolDetails() {
  const route = useRoute<RouteProp<ReactNavigation.RootParamList, 'details'>>();
  const {id} = route.params;
  const [isLoading, setIsLoading] = useState(true);
  const [poolDetails, setPoolDetails] = useState({} as PoolPros);
  const [tabOption, setTabOption] = useState<TabOption>('palpites');

  useFocusEffect(
    useCallback(() => {
      const abortController = new AbortController();

      (async function () {
        try {
          setIsLoading(true);
          const {data} = await api.get<PoolPros>('/pools/' + id, {
            signal: abortController.signal,
          });

          setPoolDetails(data);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      })();

      return () => abortController.abort();
    }, [id]),
  );

  const TabOptions = useCallback(() => {
    return (
      <HStack p={1} bg="gray.800" rounded="sm">
        <Option
          title="Seus palpites"
          isSelected={tabOption === 'palpites'}
          onPress={() => setTabOption('palpites')}
        />
        <Option
          title="Ranking do grupo"
          isSelected={tabOption === 'ranking'}
          onPress={() => setTabOption('ranking')}
        />
      </HStack>
    );
  }, [tabOption]);

  const Details = useCallback(() => {
    if (poolDetails._count.usersAtPoll <= 0) {
      return <EmptyPoolUserList code={poolDetails.code} />;
    }

    return (
      <VStack px={5} flex={1}>
        <PoolHeader data={poolDetails} />
        <TabOptions />
      </VStack>
    );
  }, [poolDetails, TabOptions]);

  return (
    <VStack flex={1} bg="gray.900">
      <Header
        title={isLoading ? 'Carregando...' : poolDetails.title.toUpperCase()}
        showBackButton
      />
      {isLoading ? <Loading /> : <Details />}
    </VStack>
  );
}
