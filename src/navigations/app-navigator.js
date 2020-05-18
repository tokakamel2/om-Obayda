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
import twentyone from '_scenes/twentyone';
import twentytwo from '_scenes/twentytwo';
import twentythree from '_scenes/twentythree';
import twentyfour from '_scenes/twentyfour';
import twentyfive from '_scenes/twentyfive';

import tafs1 from '_scenes/tafs1';
import tafs2 from '_scenes/tafs2';
import tafs3 from '_scenes/tafs3';
import tafs4 from '_scenes/tafs4';
import tafs5 from '_scenes/tafs5';
import tafs6 from '_scenes/tafs6';
import tafs7 from '_scenes/tafs7';
import tafs8 from '_scenes/tafs8';

import tas1 from '_scenes/tas1';
import tas2 from '_scenes/tas2';
import alf from '_scenes/alf';

import da1 from '_scenes/da1';
import da2 from '_scenes/da2';
import da3 from '_scenes/da3';



const TabNavigatorConfig = {
  initialRouteName: 'Home',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Home:{
    screen:HomeScreen,
  },
  about:{
    screen:AboutScreen,
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
  twentyone: {
    screen: twentyone,
    headerMode: 'none',
    header: null,
  },
  twentytwo: {
    screen: twentytwo,
    headerMode: 'none',
    header: null,
  },
  
  tafs1: {
    screen: tafs1,
    headerMode: 'none',
    header: null,
  },
  tafs2: {
    screen: tafs2,
    headerMode: 'none',
    header: null,
  },
  tafs3: {
    screen: tafs3,
    headerMode: 'none',
    header: null,
  },
  tafs4: {
    screen: tafs4,
    headerMode: 'none',
    header: null,
  },
  tafs5: {
    screen: tafs5,
    headerMode: 'none',
    header: null,
  },
  tafs6: {
    screen: tafs6,
    headerMode: 'none',
    header: null,
  },
  tafs7: {
    screen: tafs7,
    headerMode: 'none',
    header: null,
  },
  tafs8: {
    screen: tafs8,
    headerMode: 'none',
    header: null,
  },
  tas1: {
    screen: tas1,
    headerMode: 'none',
    header: null,
  },
  tas2: {
    screen: tas2,
    headerMode: 'none',
    header: null,
  },
  da1: {
    screen: da1,
    headerMode: 'none',
    header: null,
  },
  da2: {
    screen: da2,
    headerMode: 'none',
    header: null,
  },
  da3: {
    screen: da3,
    headerMode: 'none',
    header: null,
  },
  twentythree: {
    screen: twentythree,
    headerMode: 'none',
    header: null,
  },
  twentyfour: {
    screen: twentyfour,
    headerMode: 'none',
    header: null,
  },
  twentyfive: {
    screen: twentyfive,
    headerMode: 'none',
    header: null,
  },
  alf: {
    screen: alf,
    headerMode: 'none',
    header: null,
  },

};





const AppNavigator = createStackNavigator(RouteConfigs, TabNavigatorConfig);




export default AppNavigator;