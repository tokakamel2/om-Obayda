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
          name: '',
          id: 1,
          audiPath: 'https://gdurl.com/WWs8',
          audiPath:'https://gdurl.com/D0T8',
         
         
         
        },
        {
          name: '',
          id: 2,
          audiPath: 'https://gdurl.com/YFm2',

        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/w9zQ',

     
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/zUhi',

     
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/Hk4r',
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/K71u',
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/uae5',
          audiPath2:'https://gdurl.com/Or_w',
    
        },
       
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/HDok',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/xDSP',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/Dktz',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/4OcP',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/K4bs',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/Kh2A',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/Xrr3',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/q3YU',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/rAgv',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/zcqk',
    
        },
     
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/sMHZ',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/8fZKP',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/JIn8Z',
          audiPath2:'https://gdurl.com/32Cz',
    
        },

        {
          name: '',
          id: 6,
          audiPath: 'https://gdurl.com/VPf4l',
         
         
         
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/gz43',

        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/f65E',

     
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/yn_o',

     
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/mruQ',
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/UP4h',
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/QLWg',
    
        },
       
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/lsVZ',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/Z7XB',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/0Lm4',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/BhmT',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/DkYf',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/I36y',
          audiPath2:'https://gdurl.com/WTES',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/bYQf',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/3j0e',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/YEHF',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/VhCA',
    
        },
     
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/ilsq',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/5PLq',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/jnR1',
    
        },
        {
          name: '',
          id: 6,
          audiPath: 'https://gdurl.com/JJZH',
         
         
         
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/Wcq4',

        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/DGaV',

     
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/FkMr',

     
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/yLci',
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/ex7J',
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/upGr',
    
        },
       
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/TQu3',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/0agh',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/yugN',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/U4Zu',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/Qo5H',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/IAYS',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/aeyI',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/3-4t',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/0xqp',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/WYVm',
    
        },
     
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/zoWN',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/Lt_T',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/1oVs',
    
        },
        {
          name: '',
          id: 6,
          audiPath: 'https://gdurl.com/yI4l',
         
         
         
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/eX8G',

        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/HEPE',

     
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/tgdd',

     
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/Mvhh',
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/9zqt',
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/a24K',
    
        },
       
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/qFfy',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/kzP7',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/ekZH',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/6RHE',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/oV7O',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/9eBb',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/ITzL',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/mrDo',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/JG2X',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/rQ6o',
    
        },
     
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/O_8x',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/BUI8',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/nrQF',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/r5FD',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/QarM',
    
        },
        {
          name: '',
          id: 7,
          audiPath: 'https://gdurl.com/VKC9',
    
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
          <Text style={styles.title}>الداعيات إلى الله</Text>

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
            {item.audiPath4 && <PlayerScreen filepath={item.audiPath3}/>} 
            {item.audiPath5 && <PlayerScreen filepath={item.audiPath3}/>} 
 
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
