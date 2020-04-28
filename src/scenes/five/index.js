
import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Alert,
  Button,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import {Card} from 'react-native-elements';
import PlayerScreen from 'react-native-sound-playerview';

class home extends Component {
  constructor(prpos) {
    super(prpos);
    this.state = {
      FlatListItems: [

        {name:'جزء تبارك', id:'tas1'}, //done
        {name:'جزء عم',id:'tas2'},    //done
     
        

      ],
    };
  }
  

  
  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 5,
          width: '100%',
          backgroundColor: '#129D9B',
        }}
      />
    );
  };

  render() {
    return (
      <View>
      <ImageBackground
        source={require('_assets/images/islamic-pattern.jpg')}
        style={{
          width: '100%',
          height: '100%',
          opacity: 100,
        }}>
      
      <FlatList
          
          data={this.state.FlatListItems}
          showsVerticalScrollIndicator={false}
        
          renderItem={({item}) =>
          <TouchableOpacity   onPress={() => this.props.navigation.navigate(item.id)}  >
          <View style={styles.flatview}>
            <Text style={styles.name}>{item.name}</Text>
            
          </View>
          </TouchableOpacity>
        }
         
          keyExtractor={item => item.id}
       
        
       />
       
      </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginHorizontal:20,
    padding: 20,
    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  h2text: {
    marginTop: 10,
    fontFamily: 'Helvetica',
    fontSize: 36,
    fontWeight: 'bold',
  },
  flatview: {
    justifyContent: 'center',
    padding:10,
    borderRadius: 2,
    margin:10,
    marginHorizontal:20,
    backgroundColor:'#ffef',
    alignItems: 'center',
    flex: 1,
    borderRadius:10,
  },
  name: {
    fontFamily: 'ArbFONTS-Monadi',
    fontSize: 30,
    color:'#633e5a',
    textAlign:'center'
    
  },
  email: {
    color: 'red'
  }
  
});
export default home;
