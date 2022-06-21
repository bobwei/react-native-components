import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

import styles from './styles';

const Comp = () => {
  return (
    <View style={styles.container}>
      <Button title="Button" type="solid" />
    </View>
  );
};

export default Comp;
