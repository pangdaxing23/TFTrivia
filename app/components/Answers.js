import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './Button';

type Props = {
  onPressTrue: Function,
  onPressFalse: Function
};

const Answers = ({ onPressTrue, onPressFalse }: Props) => (
  <View style={styles.answers}>
    <Button text={texts.false} onPress={onPressFalse} />
    <Button text={texts.true} onPress={onPressTrue} />
  </View>
);

const styles = StyleSheet.create({
  answers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const texts = {
  false: 'FALSE',
  true: 'TRUE',
};

export default Answers;
