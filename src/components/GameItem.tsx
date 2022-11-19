import {useState} from 'react';
import {api, ApiError} from '../lib/api';
import {i18n} from '../lib/i18n';
import {Game, GameType, GuessType} from './Game';
import {useToastAlert} from './ToastAlert';

export function GameItem({poolId, data}: {poolId?: string; data?: GameType}) {
  const toast = useToastAlert();
  const [isLoading, setIsLoading] = useState(false);
  const [firstTeamPointsStr, setFirstTeamPoints] = useState('');
  const [secondTeamPointsStr, setSecondTeamPoints] = useState('');

  async function onGuessConfirm() {
    if (!data || !poolId) {
      toast.show({
        status: 'error',
        title: 'Palpite',
        description: 'Você precisa estar em um bolão para dar palpites',
      });

      return;
    }

    if (firstTeamPointsStr.trim() === '' || secondTeamPointsStr.trim() === '') {
      toast.show({
        status: 'warning',
        title: 'Palpite',
        description: 'Você precisa fornecer as pontuações para este palpite',
      });

      return;
    }

    try {
      setIsLoading(true);

      const firstTeamPoints = parseInt(firstTeamPointsStr, 10);
      const secondTeamPoints = parseInt(secondTeamPointsStr, 10);

      const {data: guess} = await api.post<GuessType>(
        '/pools/' + poolId + '/games/' + data.id + '/guesses',
        {
          firstTeamPoints,
          secondTeamPoints,
        },
      );

      data.guess = guess;

      toast.show({
        status: 'success',
        title: 'Palpite',
        description: 'Seu palpite foi concluído',
      });
    } catch (error) {
      if (error instanceof ApiError) {
        toast.show({
          status: 'error',
          title: 'Erro',
          description: i18n.t(`messages.${error.message}`),
        });
      }
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSetFirstTeamPoints(points: string) {
    setFirstTeamPoints(points);
  }

  function handleSetSecondTeamPoints(points: string) {
    setSecondTeamPoints(points);
  }

  if (!data) {
    return null;
  }

  return (
    <Game
      data={data}
      setFirstTeamPoints={handleSetFirstTeamPoints}
      setSecondTeamPoints={handleSetSecondTeamPoints}
      onGuessConfirm={onGuessConfirm}
      isLoading={isLoading}
    />
  );
}
