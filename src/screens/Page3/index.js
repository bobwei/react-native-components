import React, { useState } from 'react';
import Video from 'react-native-video';
import { View, useWindowDimensions } from 'react-native';
import { Button } from 'react-native-elements';

import styles from './styles';
import video from './test_video.mp4';

const Comp = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const dimensions = useWindowDimensions();
  const videoSize = {
    width: dimensions.width,
    height: (dimensions.width * 9) / 16,
  };
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
