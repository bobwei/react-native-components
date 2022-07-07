import React, { useState } from 'react';
import Video from 'react-native-video';
import { View, useWindowDimensions } from 'react-native';
import { Button } from 'react-native-elements';

import styles from './styles';
import CountDown from '../../components/CountDown';

const Comp = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isCountDownVisible, setIsCountDownVisible] = useState(false);
  const dimensions = useWindowDimensions();
  const videoSize = {
    width: dimensions.width,
    height: (dimensions.width * 9) / 16,
  };
  return (
    <View style={styles.container}>
      <View style={videoSize}>
        <Video
          source={{
            uri: 'https://tubebrowserpro.com/videos/tBEc9Kni6I0.mp4',
          }}
          paused={!isPlaying}
          style={styles.videoStyle}
          resizeMode="contain"
          controls
          onEnd={() => {
            setIsCountDownVisible(true);
          }}
          onError={(error) => {
            alert(JSON.stringify(error));
          }}
        />
        {isCountDownVisible && (
          <CountDown
            duration={5}
            onComplete={() => {
              alert('onComplete');
            }}
            onCancel={() => {
              alert('onCancel');
            }}
          />
        )}
      </View>
      <Button
        style={styles.button}
        type="solid"
        onPress={() => setIsPlaying((v) => !v)}
        title={isPlaying ? 'Pause' : 'Play'}
      />
    </View>
  );
};

export default Comp;
