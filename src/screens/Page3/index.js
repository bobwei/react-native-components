import React, { useState } from 'react';
import Video from 'react-native-video';
import { View, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

import styles from './styles';
import video from './test_video.mp4';

const Comp = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [heightScaled, setHeightScaled] = useState(null);
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <View style={{ height: heightScaled }}>
        <Video
          source={video}
          paused={!isPlaying}
          style={styles.videoStyle}
          repeat={true}
          resizeMode="contain"
          onLoad={(response) => {
            const { width, height } = response.naturalSize;
            const videoHeight = height * (screenWidth / width);
            response.naturalSize.orientation = 'horizontal';
            setHeightScaled(videoHeight);
          }}
        />
      </View>
      <Button
        style={styles.button}
        type="solid"
        onPress={() => setIsPlaying((v) => !v)}
        title={isPlaying ? 'Stop' : 'Play'}
      />
    </View>
  );
};

export default Comp;
