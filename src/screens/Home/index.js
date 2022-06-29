import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

import styles from './styles';

const Comp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Page1"
        type="solid"
        style={styles.button}
        onPress={() => navigation.navigate('Page1')}
      />
      <Button
        title="Go to Page2"
        type="solid"
        style={styles.button}
        onPress={() => navigation.navigate('Page2')}
      />
      <Button
        title="Go to Page3"
        type="solid"
        style={styles.button}
        onPress={() => navigation.navigate('Page3')}
      />
    </View>
  );
};

export default Comp;
