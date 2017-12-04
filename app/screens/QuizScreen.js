import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Container from '../components/Container';
import Card from '../components/Card';
import Tally from '../components/Tally';
import Answers from '../components/Answers';
import styles from '../styles';

type Props = {
  navigation: {
    state: {
      params: {
        category: string,
        question: string,
        count: number,
        total: number,
        onPressFalse?: Function,
        onPressTrue?: Function
      }
    }
  }
};

export default class QuizScreen extends Component<Props> {
  render () {
    const {
      category,
      question,
      count,
      total,
      onPressTrue,
      onPressFalse,
    } = this.props.navigation.state.params;
    return (
      <Container>
        <Text style={styles.head}>{category}</Text>
        <View>
          <Card text={question} />
        </View>
        <Tally count={count} total={total} />
        <Answers onPressTrue={onPressTrue} onPressFalse={onPressFalse} />
      </Container>
    );
  }
}
