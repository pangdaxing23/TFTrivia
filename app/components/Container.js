import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import styles from '../styles';

type Props = {
  children?: Component
};

const Container = (props: Props) => (
  <View style={styles.container}>
    <StatusBar backgroundColor='#6BC1E9' />
    {props.children}
  </View>
);

export default Container;
