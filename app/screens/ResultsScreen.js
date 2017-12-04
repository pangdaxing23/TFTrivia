import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Container from '../components/Container';
import Button from '../components/Button';
import styles from '../styles';

type Props = {
  navigation: {
    state: {
      params: {
        correct: number,
        total: number,
        onPlayAgain?: Function
      }
    }
  }
};

export default class ResultsScreen extends Component<Props> {
  render () {
    const { correct, total, onPlayAgain } = this.props.navigation.state.params;
    return (
      <Container>
        <View>
          <Text style={styles.head}>You scored</Text>
          <Text style={styles.head}>
            {correct}/{total}
          </Text>
        </View>
        <View>
          <Text style={styles.info}>{texts.question}</Text>
        </View>
        <Button text={texts.playAgain} onPress={onPlayAgain} />
      </Container>
    );
  }
}

const texts = {
  question: 'Want to try again?',
  playAgain: 'PLAY AGAIN',
};
