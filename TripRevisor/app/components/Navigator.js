import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import CityDetails from './CityDetails';


const Navigator = StackNavigator({
  Home: { screen: HomeScreen },
  City: { screen: CityDetails },
}, {
  initialRouteName: 'Home' },
);

export default Navigator;
