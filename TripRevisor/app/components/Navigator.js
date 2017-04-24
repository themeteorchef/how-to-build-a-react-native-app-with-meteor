import { StackNavigator } from 'react-navigation';
import Meteor from 'react-native-meteor';
import HomeScreen from './HomeScreen';
import CityDetails from './CityDetails';

// Meteor.connect('ws://192.168.1.66:3000/websocket');
// Meteor.connect('ws://localhost:3000/websocket');

const Navigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: {
        visible: false,
      },
    },
  },
  City: {
    screen: CityDetails,
    navigationOptions: {
      title: ({ state }) => state.params.name,
    },
  },
}, {
  initialRouteName: 'Home',
  headerMode: 'screen',
});

export default Navigator;
