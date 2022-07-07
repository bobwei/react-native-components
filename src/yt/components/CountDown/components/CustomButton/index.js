import React from 'react';
import { Button } from 'react-native-elements';

export default function CustomButton({ backgroundColor, title, onPress }) {
  return (
    <Button
      buttonStyle={{ backgroundColor }}
      containerStyle={{ width: '48%' }}
      title={title}
      titleStyle={{ fontWeight: '600', fontSize: 15 }}
      onPress={() => {
        onPress && onPress();
      }}
    />
  );
}
