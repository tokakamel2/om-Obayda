import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '_scenes/home';
import AboutScreen from '_scenes/about';
import one from '_scenes/one';
import two from '_scenes/two';
const TabNavigatorConfig = {
  initialRouteName: 'Home',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Home:{
    screen:HomeScreen,
  },
  one: {
    screen: one,
    headerMode: 'none',
    header: null,
  },
  two: {
    screen: two,
    headerMode: 'none',
    header: null,
  }
};





const AppNavigator = createStackNavigator(RouteConfigs, TabNavigatorConfig);




export default AppNavigator;