import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import QuizScreen from './screens/QuizScreen';
import ResultsScreen from './screens/ResultsScreen';

const TFApp = StackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
    },
    QuizScreen: {
      screen: QuizScreen,
    },
    ResultsScreen: {
      screen: ResultsScreen,
    },
  },
  {
    headerMode: 'none',
  }
);

export default TFApp;
