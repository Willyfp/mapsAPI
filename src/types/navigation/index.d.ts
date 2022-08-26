export {};

export type RootStackParamList = {
  Home: undefined;
  History: undefined;
};

declare global {
  namespace ReactNavigation {
    type RootParamList = RootStackParamList;
  }
}
