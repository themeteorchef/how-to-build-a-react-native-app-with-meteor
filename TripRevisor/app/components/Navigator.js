import { StackNavigator } from 'react-navigation';
import Meteor from 'react-native-meteor';
import HomeScreen from './HomeScreen';
import CityDetails from './CityDetails';

// replace this with your IP address, or the address of the server you are targeting.
Meteor.connect('ws://localhost:3000/websocket');

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
