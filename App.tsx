import ModalGlobal from 'components/ModalGlobal';
import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components/native';
import Routes from './src/routes';
import store from './src/store';
import {defaultTheme} from './src/styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Provider store={store}>
        <ModalGlobal />
        <Routes />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
