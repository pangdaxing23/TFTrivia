import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  count: number,
  total: number
};

const Tally = ({ count, total }: Props) => (
  <Text style={styles.tally}>
    {count} of {total}
  </Text>
);

const styles = StyleSheet.create({
  tally: {
    fontSize: 18,
    textAlign: 'center',
    color: '#000',
  },
});

export default Tally;
