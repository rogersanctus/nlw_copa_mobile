import {ParamListBase} from '@react-navigation/native';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParamListBase {
      new: undefined;
      polls: undefined;
      find: undefined;
      details: {
        id: string;
      };
    }
  }
}

export {};
