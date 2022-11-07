import { Image, IImageProps } from 'native-base';

export function Flag({ ...others }: IImageProps) {
  return (
    <Image
      {...others}
      alt="Bandeira"
      w={8}
      h={6}
      mx={3}
    />
  );
}