import React, { useState, useEffect } from 'react';
import Video from 'react-native-video';
import { AppState, View, useWindowDimensions } from 'react-native';
import { Button } from 'react-native-elements';

import styles from './styles';
import CountDown from '../../yt/components/CountDown';

const Comp = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isCountDownVisible, setIsCountDownVisible] = useState(false);
  const [countDownDuration, setCountDownDuration] = useState(5);
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
      setCountDownDuration(nextAppState === 'active' ? 5 : 0);
    });
    return () => subscription.remove();
  }, []);

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
          playInBackground
          playWhenInactive
          pictureInPicture={false}
          ignoreSilentSwitch="ignore"
          onEnd={() => {
            setIsCountDownVisible(true);
          }}
          onError={(error) => {
            alert(JSON.stringify(error));
          }}
        />
        {isCountDownVisible && (
          <CountDown
            duration={countDownDuration}
            nextVideo={nextVideo}
            onNext={() => {
              console.log('next video');
            }}
            onCancel={() => {}}
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
