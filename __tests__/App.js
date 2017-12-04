import 'react-native';
import React from 'react';
import HomeScreen from '../app/screens/HomeScreen';
import QuizScreen from '../app/screens/QuizScreen';
import Button from '../app/components/Button';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders HomeScreen', () => {
  const homeScreen = renderer.create(<HomeScreen />);

  expect(homeScreen).toMatchSnapshot();
});

it('renders QuizScreen', () => {
  // TODO: this https://github.com/vonovak/react-navigation-props-mapper may be
  // simple solution to this
  const quizScreen = renderer.create(
    <QuizScreen
      category='Lemons'
      question='How many lemons are too many?'
      count={3}
      total={10}
    />
  );

  expect(quizScreen).toMatchSnapshot();
});

it('button renders text', () => {
  const button = renderer.create(<Button text='Fangorn' />);

  expect(button).toMatchSnapshot();
});

it('button renders when disabled', () => {
  const button = renderer.create(<Button text='Fangorn' disabled />);

  expect(button).toMatchSnapshot();
});
