import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

type Props = {
  text: string
};

const Card = ({ text }: Props) => {
  if (Platform.OS === 'ios') {
    return (
      <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.card}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableNativeFeedback>
        <View style={[styles.card, styles.android]}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
};

const styles = StyleSheet.create({
  card: {
    height: 325,
    width: 325,
    justifyContent: 'center',
    backgroundColor: '#FFF',
    padding: 35,
    borderRadius: 3,
    shadowColor: '#111111',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  android: {
    elevation: 2,
  },
  text: {
    fontSize: 21,
    textAlign: 'center',
    color: '#000',
  },
});

export default Card;
