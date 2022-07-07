import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import CustomButton from './components/CustomButton';

const Comp = ({ duration = 5, nextVideo, onNext, onCancel }) => {
  const [count, setCount] = useState(duration);
  const timerRef = useRef();
  const minutes = Math.floor(nextVideo.duration / 60);
  const seconds = nextVideo.duration - minutes * 60;

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCount((v) => v - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (count <= 0) {
      clearInterval(timerRef.current);
      onNext && onNext();
    }
  }, [count]);
  return (
    <View style={styles.container}>
      <Text style={[styles.textNormal, { margin: 10 }]}>
        <Text>Up next in </Text>
        <Text style={styles.textStrong}>{count}</Text>
      </Text>
      <View style={styles.infoContainer}>
        <View style={styles.infoSubContainer}>
          <Image source={{ uri: nextVideo.artwork }} style={styles.infoImage} />
          <Text style={styles.infoDuration}>{`${minutes}: ${seconds}`}</Text>
        </View>
        <View style={styles.infoSubContainer}>
          <Text
            style={[styles.textNormal, styles.textStrong]}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {nextVideo.title}
          </Text>
          <Text style={styles.textNormal}>{nextVideo.artist}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          backgroundColor="#191919"
          title="CANCEL"
          onPress={() => {
            clearInterval(timerRef.current);
            onCancel && onCancel();
          }}
        />
        <CustomButton backgroundColor="#414141" title="PLAY NOW" />
      </View>
    </View>
  );
};

export default Comp;
