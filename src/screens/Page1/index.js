import React, { useEffect, useState, useRef } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

import styles from './styles';

const Comp = () => {
  const [isCounting, setIsCounting] = useState(false);
  const [count, setCount] = useState(5);
  const timerRef = useRef();
  useEffect(() => {
    if (isCounting) {
      timerRef.current = setInterval(() => {
        setCount((v) => v - 1);
      }, 1000);
    }
    return () => {
      clearInterval(timerRef.current);
    };
  }, [isCounting]);
  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <Button
        title={!isCounting ? 'Start' : 'Pause'}
        type="solid"
        onPress={() => setIsCounting((v) => !v)}
      />
    </View>
  );
};

export default Comp;
