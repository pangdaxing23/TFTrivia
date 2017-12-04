import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

type Props = {
  text?: string,
  onPress: Function,
  disabled?: boolean
};

const Button = ({ text, onPress, disabled }: Props) => {
  if (Platform.OS === 'ios') {
    return (
      <TouchableHighlight
        onPress={disabled ? () => {} : onPress}
        style={[styles.button, disabled ? styles.disabled : styles.enabled]}
        underlayColor={underlayColor}
      >
        <Text style={styles.text}>{text}</Text>
      </TouchableHighlight>
    );
  } else {
    return (
      <TouchableNativeFeedback
        onPress={disabled ? () => {} : onPress}
        background={TouchableNativeFeedback.Ripple(underlayColor)}
      >
        <View
          style={[
            styles.button,
            styles.android,
            disabled ? styles.disabled : styles.enabled,
          ]}
        >
          <Text style={styles.text}>{text}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
};

const underlayColor = '#418CED';
const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    marginHorizontal: 10,
    borderRadius: 10,
    minWidth: 145,
  },
  android: {
    borderRadius: 4,
    elevation: 2,
  },
  enabled: {
    backgroundColor: '#6BC1E9',
  },
  disabled: {
    backgroundColor: '#444444',
  },
  text: {
    textAlign: 'center',
    fontSize: 22,
    color: '#FFF',
  },
});

export default Button;
