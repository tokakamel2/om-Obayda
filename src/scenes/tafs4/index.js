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
  SafeAreaView,
  
} from 'react-native';
import {Card} from 'react-native-elements';
import PlayerScreen from 'react-native-sound-playerview';
import Accordian from '_atoms/Accordian';
import * as RNFS from 'react-native-fs';

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [
        {
          name: 'مقاصد سورة النور وأهدافها',
          id: 1,
          audiPath: 'https://gdurl.com/1qyeJ',
          isOpend: false,
          
          },
        {
          name: 'من 1 إلى 10',
          id: 2,
          audiPath: 'https://gdurl.com/MgTo',
        
         
        },
        {
          name: 'من 11 إلى 20',
          id: 3,
          audiPath: 'https://gdurl.com/N49u',
         
        },
        {
          name: 'من 21 إلى 22',
          id: 4,
          audiPath: 'https://gdurl.com/U4_Z',
        },
        {
          name: 'من 23 إلى 29',
          id: 5,
          audiPath: 'https://gdurl.com/JF3D',
        },
        {
          name: 'من 30 إلى 32',
          id: 6,
          audiPath: 'https://gdurl.com/mWp3',
         
        },
        {
          name: 'من 32 إلى 34',
          id: 7,
          audiPath: 'https://gdurl.com/TZ4W',
        },
        {
          name: 'من 35 إلى 42',
          id: 8,
          audiPath: 'https://gdurl.com/t2B6',
        },
        {name:'من 43 إلى 46',
        id:9,
        audiPath: 'https://gdurl.com/7ANY',
       
        },
        {name:'من 47 إلى 56',
        id:10,
        audiPath: 'https://gdurl.com/umUw',
        },
        {name:'من 57 إلى 64',
        id:11,
        audiPath: 'https://gdurl.com/s9MU',
        },
       
     
       
      ],
    };
  }
  onSelect(item) {
    // this.props.navigation.navigate('Methal');
    Alert.alert('بتشتغل لوحدك ليه');
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
      <View
        style={{
          flex: 1,
          width: '100%',
          marginBottom: 0,
          height: '100%',
          backgroundColor: 'white',
        }}>
        <ImageBackground
          // borderRadius={30}
          source={require('_assets/images/islamic-pattern.jpg')}
          style={{
            width: '100%',
            height: '100%',
            opacity: 100,
          }}>
          <Text style={styles.title}>تفسير سورة النور </Text>

          <FlatList
            data={this.state.FlatListItems}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={styles.flatview}>
            
              <Text style={styles.name}>{item.name}</Text>
           
           
            {item.path && <Text style={styles.text}>{item.text}</Text> } 
              <PlayerScreen filepath={item.audiPath}/>
            {item.audiPath2 && <PlayerScreen filepath={item.audiPath2}/>} 
            {item.audiPath3 && <PlayerScreen filepath={item.audiPath3}/>} 
            {item.path && <Image source={item.path} style={styles.Image}/> } 
               
              </View>
            )}
            
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
    marginHorizontal: 20,
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
    padding: 0,
    borderRadius: 2,
    margin: 10,
    marginHorizontal: 10,
    backgroundColor: '#ffef',
    alignItems: 'center',
    flex: 1,
    borderRadius: 10,
  },
  name: {
    fontFamily: 'ArbFONTS-Monadi',
    fontSize: 28,
    color: '#371921',
    paddingBottom: 20,
  },
  title: {
    fontFamily: 'ArbFONTS-Monadi',
    fontSize: 45,
    color: '#ffff',
    paddingBottom: 0,
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    paddingBottom: 10,
  },
  email: {
    color: 'red',
  },
  Image: {
    height:300,
    width:300,
    marginBottom:15,
    borderRadius: 5,

  }
});
export default home;
