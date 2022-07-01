import React, { useEffect, useState, useRef } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

import styles from './styles';

const Comp = ({ duration = 5, onComplete, onCancel }) => {
  const [count, setCount] = useState(duration);
  const timerRef = useRef();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCount((v) => v - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (count <= 0) {
      clearInterval(timerRef.current);
      onComplete && onComplete();
    }
  }, [count]);
  return (
    <View style={styles.container}>
      <Text style={styles.count}>{`Up next in ${count}`}</Text>
      <Button
        style={styles.button}
        title="Cancel"
        onPress={() => {
          clearInterval(timerRef.current);
          onCancel && onCancel();
        }}
      />
    </View>
  );
};
export default Comp;
