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
          name: 'حق الله على العباد',
          id: 1,
          audiPath: 'https://gdurl.com/B7ZN',
          isOpend: false,
          
          },
        {
          name: 'تكملة حق الله على العباد',
          id: 2,
          audiPath: 'https://gdurl.com/po9v',
        
         
        },
        {
          name: 'حق النبي على امته',
          id: 3,
          audiPath: 'https://gdurl.com/N9XF',
         
        },
        {
          name: 'تكملة حق النبي على امته',
          id: 4,
          audiPath: 'https://gdurl.com/Z-q5',
          text: '4',
        },
        {
          name: 'حق الأنبياء',
          id: 5,
          audiPath: 'https://gdurl.com/VBZo5',
          text: '5',
        },
        {
          name: 'حق آل بيت النبي',
          id: 6,
          audiPath: 'https://gdurl.com/xTV0',
          text: '6',
        },
        {
          name: 'حق الصحابة',
          id: 7,
          audiPath: 'https://gdurl.com/aMIz9',
          text: '7',
        },
        {
          name: 'تكملة حق الصحابة',
          id: 8,
          audiPath: 'https://gdurl.com/N94R',
          text: '8',
        },
        {name:'حق القرآن الجزء الأول',
        id:9,
        audiPath: 'https://gdurl.com/kwWs',
        text: '8',
        },
        {name:'حق القرآن الجزء الثاني',
        id:10,
        audiPath: 'https://gdurl.com/iE8s',
        text: '8',
        },
        {name:'حق الزوج',
        id:11,
        audiPath: 'https://gdurl.com/VwME',
        audiPath2:'https://gdurl.com/8ogh',
        audiPath3:'https://gdurl.com/b_eO',
        text: '8',
        },
        {name:'حق الزوج واستشارات',
        id:12,
        audiPath: 'https://gdurl.com/omAH',
        audiPath2:'https://gdurl.com/eBuw',
        audiPath3:'https://gdurl.com/tyWl',
        text: '8',
        },
        {name:'حق الزوجة',
        id:13,
        audiPath: 'https://gdurl.com/UKb2Q',
        audiPath2:'https://gdurl.com/nVg5z',
        audiPath3:'https://gdurl.com/ABPp',
        text: '8',
      },
        {name:'استشارات حق الزوجة',
        id:14,
        audiPath: 'https://gdurl.com/6Zy9',
        audiPath2:'https://gdurl.com/qSvFA',
        audiPath3:'https://gdurl.com/YJwR',
        text: '8',
        
      },
        {name:'حق الأبناء',
        id:15,
        audiPath: 'https://gdurl.com/LPwG',
        audiPath2:'https://gdurl.com/Ij6N',
        text: '8',
      },
        {name:'حق الأبناء واستشارات',
        id:16,
        audiPath: 'https://gdurl.com/UCFS',
        audiPath2:'https://gdurl.com/es5t',
        text: '8',
      },
      {name:'حق الوالدين',
      id:15,
      audiPath: 'https://gdurl.com/0-XL',
      audiPath2:'https://gdurl.com/9Gw2',
      audiPath3:'https://gdurl.com/eR4E',
      text: '8',
    },
    {name:'تكملة حق الوالدين',
    id:15,
    audiPath: 'https://gdurl.com/ujSS',
    audiPath2: 'https://gdurl.com/Yp8Y',
  audiPath3: 'https://gdurl.com/Jilm',
    text: '8',
  },
  {name:'حق المسلم',
  id:15,
  audiPath: 'https://gdurl.com/qNPY',
  audiPath: 'https://gdurl.com/pxdq',

  text: '8',
},
{name:'حق المسلم2',
id:15,
audiPath: 'https://gdurl.com/kVg9',
audiPath2:'https://gdurl.com/uTac',
text: '8',
},
{name:'حق المسلم3',
id:15,
audiPath: 'https://gdurl.com/Z0sV',
audiPath2:'https://gdurl.com/d7RV',
text: '8',
},
{name:'حق الرحم',
id:15,
audiPath: 'https://gdurl.com/RSWY',
audiPath2:'https://gdurl.com/MiD0',
text: '8',
},
{name:'حق الجار',
id:15,
audiPath: 'https://gdurl.com/F7kJ',
text: '8',
},
{name:'حق الضيف',
id:15,
audiPath: 'https://gdurl.com/TyM3',
text: '8',
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
          <Text style={styles.title}>سلسلة الحقوق الإسلامية</Text>

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
