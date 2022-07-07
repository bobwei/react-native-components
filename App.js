import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';

import './src/i18n';
import Home from './src/screens/Home';

const Stack = createStackNavigator();

const Screens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Page1" component={require('./src/screens/Page1').default} />
        <Stack.Screen name="Page2" component={require('./src/screens/Page2').default} />
        <Stack.Screen name="Page3" component={require('./src/screens/Page3').default} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  const [isInit, setIsInit] = useState(false);
  useEffect(() => {
    setIsInit(true);
    SplashScreen.hide();
  }, []);
  if (!isInit) {
    return null;
  }
  // prettier-ignore
  return (
    <Screens />
  );
};

export default App;
