import {
  Alert,
  CloseIcon,
  HStack,
  IconButton,
  Text,
  VStack,
  useToast,
  IAlertProps,
  IToastProps,
} from 'native-base';
import {IToastService} from 'native-base/lib/typescript/components/composites/Toast';
import {useRef} from 'react';

const alertProps = {} as IAlertProps;

export interface ToastAlertProps extends IToastProps {
  status?: typeof alertProps.status;
  title: string;
  description: string;
  isClosable?: boolean;
}

export function ToastAlert({
  id,
  status,
  title,
  description,
  isClosable = true,
  toast,
  ...others
}: ToastAlertProps & {id: any; toast: IToastService}) {
  function close() {
    if (!id) {
      console.log('No id for this toast');
      return;
    }

    console.log('cosing toast id: ', id);
    toast.close(id);
  }

  return (
    <Alert
      maxWidth="100%"
      alignSelf="center"
      flexDirection="row"
      status={status ? status : 'info'}
      variant="left-accent"
      {...others}>
      <VStack w="100%" flexShrink={1} space={1}>
        <HStack
          flexShrink={1}
          alignItems="center"
          justifyContent="space-between">
          <HStack space={2} flexShrink={1} alignItems="center">
            <Alert.Icon />
            <Text
              fontSize="md"
              fontWeight="black"
              flexShrink={1}
              color="darkText">
              {title}
            </Text>
          </HStack>
          {isClosable ? (
            <IconButton
              variant="unstyled"
              icon={<CloseIcon size={3} />}
              _icon={{color: 'darkText'}}
              onPress={close}
            />
          ) : null}
        </HStack>
        <Text px={6} color="darkText">
          {description}
        </Text>
      </VStack>
    </Alert>
  );
}

export const useToastAlert = () => {
  const toast = useToast();
  const toastRef = useRef();

  return {
    show: (props: ToastAlertProps) => {
      if ('description' in props && typeof props.description !== 'string') {
        props.description = '';
        console.warn('ToastAlert: description property is not a string');
      }

      if ('title' in props && typeof props.title !== 'string') {
        props.title = 'Alert';
        console.warn('ToastAlert: title property is not a string');
      }

      toastRef.current = toast.show({
        render: ({id}) => {
          return <ToastAlert toast={toast} id={id} {...props} />;
        },
      });
    },

    close: () => {
      toast.close(toastRef.current);
    },
  };
};
