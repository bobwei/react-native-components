import React, { useState } from 'react';
import Video from 'react-native-video';
import { View, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

import styles from './styles';
import video from './test_video.mp4';
import CountDown from './CountDown';

const Comp = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { width: screenWidth } = Dimensions.get('window');
  const [videoSize, setVideoSize] = useState({
    width: screenWidth,
    height: (screenWidth * 9) / 16,
  });
  const [countDown, setCountDown] = useState(null);
  return (
    <View style={styles.container}>
      <View style={videoSize}>
        <Video
          source={video}
          paused={!isPlaying}
          style={styles.videoStyle}
          resizeMode="contain"
          onEnd={() => {
            setCountDown(
              <CountDown
                duration={5}
                onComplete={() => {
                  alert("time's up");
                }}
                onCancel={() => {
                  setCountDown(null);
                  alert("it's canceled");
                }}
              />,
            );
          }}
          controls
        />
        {countDown !== null && <View style={styles.countDown}>{countDown}</View>}
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
