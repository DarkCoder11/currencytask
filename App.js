import React from 'react';
import {View,Text} from 'react-native';
import { Navigation } from 'react-native-navigation';

import { Provider } from 'react-redux';
import store from './src/store/store';

import Currency from './src/screens/Currency/Currency';
import Convert from './src/screens/Convert/Convert';
import TopBar from './src/components/UI/TopBar/TopBar';

Navigation.registerComponent(
  "CurrencyScreen",
  () => Currency,
  store,
  Provider
  
);

Navigation.registerComponent(
  "ConvertScreen",
  () => Convert,
  store,
  Provider
);

Navigation.registerComponent(
  "TopBarScreen",
  () => TopBar
);


Navigation.startTabBasedApp({
  tabs: [
    {
      screen: "CurrencyScreen",
      icon: require('./src/assets/img/bars.png'),
      iconInsets: {
        top: 15,
        bottom: -15
      },
    },
    {
      screen: "ConvertScreen",
      icon:  require('./src/assets/img/exchange.png'),
      iconInsets: {
        top: 15,
        bottom: -15
      },
    },
  ],
  appStyle: {
    tabBarSelectedButtonColor: '#ffb54f',
    tabBarButtonColor: '#0e7a1d',
    tabBarBackgroundColor: '#f4fffa',
    navBarBackgroundColor: '#f4fffa',
    tabBarHideShadow: true,
    navBarNoBorder: true,
    topBarElevationShadowEnabled: false
  },   
  tabsStyle: {
    tabBarSelectedButtonColor: '#ffb54f',
    tabBarButtonColor: '#0e7a1d',
    tabBarBackgroundColor: '#f4fffa',
    navBarBackgroundColor: '#f4fffa',
    tabBarHideShadow: true,
    navBarNoBorder: true
  }
})
