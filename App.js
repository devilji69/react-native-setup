/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Keval Rana
 * 20-09-2021
 * Use react-native paper and use redux thunk ,redux-persist
 */

import React, {useState, useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import 'react-native-gesture-handler';
import {Text, Image, View} from 'react-native';
import Toast from 'react-native-toast-message';
import Navigation from './src/Navigation';
import NetInfo from '@react-native-community/netinfo';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import rootReducer from './src/Store/Reducers/index';
import {Theme} from './src/Helper/Theme';
import {PersistGate} from 'redux-persist/integration/react';


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const Store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(Store);

const App = () => {
  const [isConnected, setConnection] = useState(true);

  useEffect(() => {

    // use  listeners for check internet available or not.
    NetInfo.addEventListener(state => {
      setConnection(state.isConnected);
    });
  }, []);

  if (!isConnected) {
    SplashScreen.hide();
    //if no internet that time show this screen
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('./src/Assets/no_network.png')}
          resizeMode="contain"
        />
        <Text>Please check internet connection.</Text>
      </View>
    );
  } else {
    return (
      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <PaperProvider theme={Theme}>
            <Navigation />
            <Toast ref={ref => Toast.setRef(ref)} />
          </PaperProvider>
        </PersistGate>
      </Provider>
    );
  }
};

export default App;
