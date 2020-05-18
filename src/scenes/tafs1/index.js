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

import PlayerScreen from 'react-native-sound-playerview';

import { ScrollView } from 'react-native-gesture-handler';

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [
        {
          name: 'الربع الأول',
          id: 1,
          audiPath: 'https://gdurl.com/VchY',
          isOpend: false,
          },
        {
          name: 'الربع الثاني',
          id: 2,
          audiPath: 'https://gdurl.com/GOcL',
        
         
        },
        {
          name: 'الربع الثالث',
          id: 3,
          audiPath: 'https://gdurl.com/PMkI',
          audiPath2:'https://gdurl.com/bZhH',
         
        },
        {
          name: 'الربع الرابع',
          id: 4,
          audiPath: 'https://gdurl.com/XmsN',
          audiPath2:'https://gdurl.com/0WZzp',
        },
        {
          name: 'الربع الخامس',
          id: 5,
          audiPath: 'https://gdurl.com/eOqa',
          audiPath2:'https://gdurl.com/0EEm',
        },
        {
          name: 'الربع السادس',
          id: 6,
          audiPath: 'https://gdurl.com/Ql75',
         
        },
        {
          name: 'الربع السابع',
          id: 7,
          audiPath: 'https://gdurl.com/oluK',
          audiPath2:'https://gdurl.com/7FT7p',
        },
        {
          name: 'الربع الثامن',
          id: 8,
          audiPath: 'https://gdurl.com/Mjmj',
        },
        {name:'الربع التاسع',
        id:9,
        audiPath: 'https://gdurl.com/hp0Z',
        audiPath2:'https://gdurl.com/67kh',
        },
        {name:'الربع العاشر',
        id:10,
        audiPath: 'https://gdurl.com/UTqs',
        audiPath2:'https://gdurl.com/F5zI',
        },
        {name:'الربع الحادي عشر',
        id:11,
        audiPath: 'https://gdurl.com/P2Pb',
        audiPath2:'https://gdurl.com/gHzz',
        },
        {name:'الربع الثاني عشر',
        id:12,
        audiPath: 'https://gdurl.com/PEsy',
        audiPath2:'https://gdurl.com/rikR',
        },
        {name:'الربع الثالث عشر',
        id:13,
        audiPath: 'https://gdurl.com/Lg8Z',
        audiPath2:'https://gdurl.com/M1Gv',
       
      },
        {name:'الربع الرابع عشر',
        id:14,
        audiPath: 'https://gdurl.com/UqF6',
        audiPath2:'https://gdurl.com/RdRb',
        
      },
        {name:'الربع الخامس عشر',
        id:15,
        audiPath: 'https://gdurl.com/Rhp1',
        audiPath2:'https://gdurl.com/Eu5Ls',
      },
        {name:'الربع السادس عشر',
        id:16,
        audiPath: 'https://gdurl.com/8CYv',
      },
      { name:'الربع السابع عشر',
        id:17,
        audiPath: 'https://gdurl.com/R8zh',
      },
        {name:'الربع الثامن عشر',
        id:18,
        audiPath: 'https://gdurl.com/UnKs',
        audiPath2:'https://gdurl.com/F4OO',
      },
        {name:'الربع التاسع عشر',
        id:19,
        audiPath: 'https://gdurl.com/KLCM',

      },
        {name:'الدرس العشرون',
        id:20,
        audiPath: 'https://gdurl.com/O6go',
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
          <Text style={styles.title}>تفسير سورة البقرة</Text>
          <ScrollView>
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
          </ScrollView>
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
