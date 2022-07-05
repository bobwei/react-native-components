import React, { useState, useEffect, useRef } from 'react';
import Video from 'react-native-video';
import { AppState, View, useWindowDimensions } from 'react-native';
import { Button } from 'react-native-elements';

import styles from './styles';
import video from './test_video.mp4';
import CountDown from '../../components/CountDown';

const Comp = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCountDownVisible, setIsCountDownVisible] = useState(false);
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const dimensions = useWindowDimensions();
  const videoSize = {
    width: dimensions.width,
    height: (dimensions.width * 9) / 16,
  };
  const nextVideo = {
    url: 'https://www.youtube.com/watch?v=tBEc9Kni6I0',
    duration: 226,
    title: 'AMAZING SALSA Dance With Most Beautiful Sunset View!',
    artist: 'Plesni Centar Mimbao',
    artwork: 'https://i.ytimg.com/vi_webp/tBEc9Kni6I0/maxresdefault.webp',
  };

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      appState.current = nextAppState;
      setAppStateVisible(appState.current);
    });
    return () => subscription.remove();
  }, []);

  return (
    <View style={styles.container}>
      <View style={videoSize}>
        <Video
          source={video}
          paused={!isPlaying}
          style={styles.videoStyle}
          resizeMode="contain"
          controls
          playWhenInactive
          ignoreSilentSwitch="ignore"
          onEnd={() => {
            appStateVisible === 'active' && setIsCountDownVisible(true);
          }}
        />
        {isCountDownVisible && (
          <CountDown duration={5} nextVideo={nextVideo} onNext={() => {}} onCancel={() => {}} />
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
