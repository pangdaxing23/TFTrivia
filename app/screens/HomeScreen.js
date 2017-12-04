import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Container from '../components/Container';
import Button from '../components/Button';
import { NavigationActions } from 'react-navigation';
import styles from '../styles';
import { fetchData } from '../config/api';
import he from 'he';

type Props = {
  navigation: Object
};

export default class HomeScreen extends Component<Props> {
  constructor (props) {
    super();
    this.state = {
      data: {},
      loaded: false,
      index: 0,
      correct: 0,
    };
  }

  componentDidMount = async () => {
    let data = await fetchData();
    data = data.results;
    this.setState(
      state => data,
      () => {
        this.setState({ loaded: true });
      }
    );
    this.setState({ data });
  };

  nextScreen = () => {
    const { data, index } = this.state;
    const total = data.length;

    if (index === data.length) {
      this.props.navigation.navigate('ResultsScreen', {
        correct: this.state.correct,
        total,
        onPlayAgain: this.onPlayAgain,
      });
    } else {
      let { category, question } = data[index];
      question = he.decode(question);
      const count = index + 1;

      this.props.navigation.navigate('QuizScreen', {
        category,
        question,
        count,
        total,
        onPressTrue: this.onPressTrue,
        onPressFalse: this.onPressFalse,
      });
    }
  };

  onPressTrue = () => {
    let currentQuestion = this.state.data[this.state.index];
    if (currentQuestion.correct_answer === 'True') {
      this.setState({
        correct: this.state.correct + 1,
      });
    }
    // must be callback version of setState because we read
    // this.state.index in nextScreen
    this.setState(this.incrementIndex, this.nextScreen);
  };

  onPressFalse = () => {
    let currentQuestion = this.state.data[this.state.index];
    if (currentQuestion.correct_answer === 'False') {
      this.setState({
        correct: this.state.correct + 1,
      });
    }
    this.setState(this.incrementIndex, this.nextScreen);
  };

  onPlayAgain = () => {
    // reset the navigation stack
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'HomeScreen' })],
    });
    this.props.navigation.dispatch(resetAction);
  };

  incrementIndex (state) {
    return { index: state.index + 1 };
  }

  render () {
    return (
      <Container>
        <Text style={styles.head}>{texts.welcome}</Text>
        <View>
          <Text style={styles.info}>{texts.info}</Text>
          <Text style={styles.info}>{texts.question}</Text>
        </View>
        <Button
          text={texts.begin}
          onPress={this.nextScreen}
          disabled={!this.state.loaded}
        />
      </Container>
    );
  }
}

const texts = {
  welcome: 'Welcome to the Trivia Challenge!',
  info: 'You will be presented with 10 True or False questions.',
  question: 'Can you score 100%?',
  begin: 'BEGIN',
};
