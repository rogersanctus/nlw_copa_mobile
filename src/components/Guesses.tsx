import {useFocusEffect} from '@react-navigation/native';
import {FlatList} from 'native-base';
import {useCallback, useState} from 'react';
import {api} from '../lib/api';
import {GameType} from './Game';
import {GameItem} from './GameItem';
import {Loading} from './Loading';

interface GuessesProps {
  poolId?: string;
}

export function Guesses({poolId}: GuessesProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [games, setGames] = useState<GameType[]>([]);

  useFocusEffect(
    useCallback(() => {
      const abortController = new AbortController();

      (async function () {
        try {
          setIsLoading(true);
          const {data} = await api.get('/pools/' + poolId + '/games', {
            signal: abortController.signal,
          });

          setGames(data);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      })();

      return () => abortController.abort();
    }, [poolId]),
  );

  return isLoading ? (
    <Loading />
  ) : (
    <FlatList
      mt={4}
      data={games}
      renderItem={({item}) => <GameItem poolId={poolId} data={item} />}
      _contentContainerStyle={
        {pb: 16} /* eslint-disable-line react-native/no-inline-styles */
      }
    />
  );
}
