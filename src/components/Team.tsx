import {HStack} from 'native-base';
import CountryFlag from 'react-native-country-flag';

import {Input} from './Input';

interface TeamProps {
  code: string;
  isDisabled: boolean;
  points?: number;
  position: 'left' | 'right';
  onChangeText: (value: string) => void;
}

export function Team({
  code,
  isDisabled,
  points,
  position,
  onChangeText,
}: TeamProps) {
  return (
    <HStack alignItems="center">
      {position === 'left' && (
        <CountryFlag isoCode={code} size={25} style={{marginRight: 12}} />
      )}

      <Input
        w={14}
        h={9}
        textAlign="center"
        fontSize="xs"
        keyboardType="numeric"
        onChangeText={onChangeText}
        isDisabled={isDisabled}
        value={points?.toString()}
      />

      {position === 'right' && (
        <CountryFlag isoCode={code} size={25} style={{marginLeft: 12}} />
      )}
    </HStack>
  );
}
