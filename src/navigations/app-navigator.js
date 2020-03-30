import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '_scenes/home';
import AboutScreen from '_scenes/about';
import one from '_scenes/one';
import two from '_scenes/two';
import three from '_scenes/three';
import four from '_scenes/four';
import five from '_scenes/five';
import six from '_scenes/six';
import seven from '_scenes/seven';
import eight from '_scenes/eight';
import nine from '_scenes/nine';
import ten from '_scenes/ten';
import eleven from '_scenes/eleven';
import twelve from '_scenes/twelve';
import thirteen from '_scenes/thirteen';
import fourteen from '_scenes/fourteen';
import fifteen from '_scenes/fifteen';
import sixteen from '_scenes/sixteen';
import seventeen from '_scenes/seventeen';
import eighteen from '_scenes/eighteen';
import nineteen from '_scenes/nineteen';
import twenty from '_scenes/twenty';
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
  },
  three: {
    screen: three,
    headerMode: 'none',
    header: null,
  },
  four: {
    screen: four,
    headerMode: 'none',
    header: null,
  },
  five: {
    screen: five,
    headerMode: 'none',
    header: null,
  },
  six: {
    screen: six,
    headerMode: 'none',
    header: null,
  },
  seven: {
    screen: seven,
    headerMode: 'none',
    header: null,
  },
  eight: {
    screen: eight,
    headerMode: 'none',
    header: null,
  },
  nine: {
    screen: nine,
    headerMode: 'none',
    header: null,
  },
  ten: {
    screen: ten,
    headerMode: 'none',
    header: null,
  },
  eleven: {
    screen: eleven,
    headerMode: 'none',
    header: null,
  },
  twelve: {
    screen: twelve,
    headerMode: 'none',
    header: null,
  },
  thirteen: {
    screen: thirteen,
    headerMode: 'none',
    header: null,
  },
  fourteen: {
    screen: fourteen,
    headerMode: 'none',
    header: null,
  },
  fifteen: {
    screen: fifteen,
    headerMode: 'none',
    header: null,
  },
  sixteen: {
    screen: sixteen,
    headerMode: 'none',
    header: null,
  },
  seventeen: {
    screen: seventeen,
    headerMode: 'none',
    header: null,
  },
  eighteen: {
    screen: eighteen,
    headerMode: 'none',
    header: null,
  },
  nineteen: {
    screen: nineteen,
    headerMode: 'none',
    header: null,
  },
  twenty: {
    screen: twenty,
    headerMode: 'none',
    header: null,
  },

};





const AppNavigator = createStackNavigator(RouteConfigs, TabNavigatorConfig);




export default AppNavigator;