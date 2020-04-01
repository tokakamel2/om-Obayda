import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import PlayerScreen from 'react-native-sound-playerview';
import {Rating, AirbnbRating} from 'react-native-ratings';

export default class Accordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      expanded: false,
    };
  }

  render() {
    return (
      <View
        style={{
          padding: 5,
          margin: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <View style={{flexDirection:'row'}}>

        <TouchableOpacity
          style={styles.row}
          onPress={() => this.toggleExpand()}>
          <Text style={[styles.name]}>{this.props.title}</Text>
          {/* <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={Colors.DARKGRAY} /> */}
        </TouchableOpacity>
        <AirbnbRating
          reviewColor="#633e5a"
          reviews={['تم', "لم يتم الاستماع "]}
          onFinishRating={this.ratingCompleted}
        />

          </View>
       {/* <View style={styles.parentHr} /> */}
        {this.state.expanded && (
          <View style={styles.container}>
            <FlatList
              data={this.state.data}
              numColumns={1}
              scrollEnabled={false}
              renderItem={({item, index}) => (
                <View style={styles.container}>
                  <Text
                    style={{
                      fontSize: 20,
                      paddingBottom: 10,
                    }}>
                    {item.key}
                  </Text>

                  <Image
                    source={this.props.path}
                    style={{height: 250, width: 250, marginBottom: 10}}></Image>
                  <PlayerScreen filepath={item.audiPath} />
                  {/* <Icon name={'check-circle'} size={24} color={ item.value ? Colors.LIGHTGRAY : Colors.GREEN} /> */}
                  <View style={styles.childHr} />
                </View>
              )}
            />
          </View>
        )}
      </View>
    );
  }

  onClick = index => {
    const temp = this.state.data.slice();
    temp[index].value = !temp[index].value;
    this.setState({data: temp});
  };

  toggleExpand = () => {
    this.setState({expanded: !this.state.expanded});
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'blue',
  },
  name: {
    fontFamily: 'ArbFONTS-Monadi',
    fontSize: 24,
    color: '#633e5a',
    // backgroundColor: 'green',

    // paddingBottom: 20,
  },
  button: {
    width: '100%',
    height: 54,
    alignItems: 'center',
    paddingLeft: 35,
    paddingRight: 35,
    fontSize: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.DARKGRAY,
  },
  itemActive: {
    fontSize: 12,
    color: Colors.GREEN,
  },
  itemInActive: {
    fontSize: 12,
    color: Colors.DARKGRAY,
  },
  btnActive: {
    borderColor: Colors.GREEN,
  },
  btnInActive: {
    borderColor: Colors.DARKGRAY,
  },
  row: {
    // flexDirection: 'center',
    justifyContent: 'space-between',
    height: 56,
    // paddingLeft: 13,
    // paddingRight: 18,
    alignItems: 'center',
    // backgroundColor: 'gray',
  },
  childRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.GRAY,
  },
  parentHr: {
    height: 1,
    color: Colors.WHITE,
    width: '100%',
  },
  childHr: {
    height: 1,
    backgroundColor: Colors.LIGHTGRAY,
    width: '100%',
  },
  colorActive: {
    borderColor: Colors.GREEN,
  },
  colorInActive: {
    borderColor: Colors.DARKGRAY,
  },
});
