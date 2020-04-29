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
          name: 'من 1 إلى 3',
          id: 1,
          audiPath: 'https://gdurl.com/uMAa',
          isOpend: false,
          
          },
        {
          name: 'من 4 إلى 14',
          id: 2,
          audiPath: 'https://gdurl.com/7mbl',
        
         
        },
        {
          name: 'من 15 إلى 26',
          id: 3,
          audiPath: 'https://gdurl.com/2mf5',
         
        },
        {
          name: 'من 26 إلى 31',
          id: 4,
          audiPath: 'https://gdurl.com/Wp-G',
        },
        {
          name: 'الآية 32',
          id: 5,
          audiPath: 'https://gdurl.com/euQu',
        },
        {
          name: 'من 33 إلى 35',
          id: 6,
          audiPath: 'https://gdurl.com/njMq',   
         
        },
        {
          name: 'من 36 إلى 38',
          id: 7,
          audiPath: 'https://gdurl.com/UKj3',
        },
        {
          name: 'من 39 إلى 43',
          id: 8,
          audiPath: 'https://gdurl.com/VqRU',
        },
        {name:'من 44 إلى 46',
        id:9,
        audiPath: 'https://gdurl.com/5Bda',
       
        },
        {name:'من 47 إلى 50',
        id:10,
        audiPath: 'https://gdurl.com/QmJb',
        },
        {name:'من 51 إلى 57',
        id:11,
        audiPath: 'https://gdurl.com/b6ZG',
        },
        {name:' الآية 58',
        id:12,
        audiPath: 'https://gdurl.com/D5dQ',
        },
        {name:'من 59 إلى 63',
        id:11,
        audiPath: 'https://gdurl.com/aszJ',
        },
        {name:'من 64 إلى 70',
        id:11,
        audiPath: 'https://gdurl.com/ScLh',
        },
        {name:'من 71 إلى 76',
        id:11,
        audiPath: 'https://gdurl.com/bIwx',
        },
        {name:'من 77 إلى 84',
        id:11,
        audiPath: 'https://gdurl.com/3oK0',
        },
        {name:'من 85 إلى 87',
        id:11,
        audiPath: 'https://gdurl.com/E2ly',
        },
        {name:'من 88 إلى 91',
        id:11,
        audiPath: 'https://gdurl.com/lpOv',
        },
        {name:'من 92 إلى 99',
        id:11,
        audiPath: 'https://gdurl.com/Coei',
        },
        {name:'من 100 إلى 103',
        id:11,
        audiPath: 'https://gdurl.com/LnkS',
        },
        {name:'من 104 إلى 113',
        id:11,
        audiPath: 'https://gdurl.com/EmRS',
        },
        {name:'الآية 114',
        id:11,
        audiPath: 'https://gdurl.com/ZaWB',
        },
        {name:'من 115 إلى 125',
        id:11,
        audiPath: 'https://gdurl.com/RHQi',
        },
        {name:'من 126 إلى 130',
        id:11,
        audiPath: 'https://gdurl.com/a6JF',
        },
        {name:'من 131 إلى 134',
        id:11,
        audiPath: 'https://gdurl.com/e21xn',
        },
        {name:'من 135 إلى 147',
        id:11,
        audiPath: 'https://gdurl.com/rD_XF',
        audiPath2:'https://gdurl.com/dpkc',
        },
        {name:'من 148 إلى 162',
        id:11,
        audiPath: 'https://gdurl.com/zbYw',
        },
        {name:'ختم سورة النساء',
        id:11,
        audiPath: 'https://gdurl.com/GYux',
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
          <Text style={styles.title}>تفسير سورة النساء </Text>

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
    color: '#371921',
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
