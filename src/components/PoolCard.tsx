import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {Heading, HStack, Text, VStack} from 'native-base';

import {Participants, ParticipantProps} from './Participants';
import {useNavigation} from '@react-navigation/native';

export interface PoolProps {
  id: string;
  code: string;
  title: string;
  ownerId: string;
  createdAt: string;
  owner: {
    name: string;
  };
  usersAtPoll: ParticipantProps[];
  _count: {
    usersAtPoll: number;
  };
}

interface PoolCardProps extends TouchableOpacityProps {
  data: PoolProps;
}

export function PoolCard({data, ...others}: PoolCardProps) {
  const {navigate} = useNavigation();

  return (
    <TouchableOpacity
      {...others}
      onPress={() => navigate('details', {id: data.id})}>
      <HStack
        w="full"
        h={20}
        bgColor="gray.800"
        borderBottomWidth={3}
        borderBottomColor="yellow.500"
        justifyContent="space-between"
        alignItems="center"
        rounded="sm"
        mb={3}
        p={4}>
        <VStack>
          <Heading color="white" fontSize="md" fontFamily="heading">
            {data.title}
          </Heading>

          <Text color="gray.200" fontSize="xs">
            Criado por {data.owner.name}
          </Text>
        </VStack>

        <Participants
          count={data._count.usersAtPoll}
          participants={data.usersAtPoll}
        />
      </HStack>
    </TouchableOpacity>
  );
}
