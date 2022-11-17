import {useFocusEffect} from '@react-navigation/native';
import {FlatList} from 'native-base';
import {ListRenderItemInfo} from 'react-native';
import {useCallback, useState} from 'react';
import {api} from '../lib/api';
import {Game, GameType} from './Game';
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

          console.log('games data: ', data);
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

  const GameItem = useCallback(({item}: ListRenderItemInfo<GameType>) => {
    const onGuessConfirm = () => {
      console.log('guess confirmed for: ', item.id);
    };

    const setFirstTeamPoints = (points: string) => {
      console.log(
        'setting points for the first team: ',
        points,
        ' for: ',
        item.id,
      );
    };

    const setSecondTeamPoints = (points: string) => {
      console.log(
        'setting points for the second team: ',
        points,
        ' for: ',
        item.id,
      );
    };

    return (
      <Game
        data={item}
        setFirstTeamPoints={setFirstTeamPoints}
        setSecondTeamPoints={setSecondTeamPoints}
        onGuessConfirm={onGuessConfirm}
      />
    );
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <FlatList
      mt={4}
      data={games}
      renderItem={GameItem}
      _contentContainerStyle={
        {pb: 16} /* eslint-disable-line react-native/no-inline-styles */
      }
    />
  );
}
