import React, { useState } from 'react';
import Video from 'react-native-video';
import { View, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

import styles from './styles';
import video from './test_video.mp4';

const Comp = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { width: screenWidth } = Dimensions.get('window');
  const [videoSize, setVideoSize] = useState({
    width: screenWidth,
    height: (screenWidth * 9) / 16,
  });
  return (
    <View style={styles.container}>
      <View style={videoSize}>
        <Video
          source={video}
          paused={!isPlaying}
          style={styles.videoStyle}
          resizeMode="contain"
          controls
        />
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
