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
          name: 'الدرس الأول',
          id: 1,
          audiPath: 'https://gdurl.com/W67M',
          path: require('_assets/images/3/1.jpg'),
          isOpend: false,
          },
        {
          name: 'الدرس الثاني و الثالث',
          id: 2,
          audiPath: 'https://gdurl.com/g6XX',
          path: require('_assets/images/3/2.jpg'),
          path2: require('_assets/images/3/3.jpg'),


        },

        {
          name: 'الدرس الرابع',
          id: 4,
          audiPath: 'https://gdurl.com/j8jQ',
          path: require('_assets/images/3/4.jpg'),
  
        },
        {
          name: 'الدرس الخامس',
          id: 5,
          audiPath: 'https://gdurl.com/DJag',
          path: require('_assets/images/3/5.jpg'),
          text: '5',
        },
        {
          name: 'الدرس السادس',
          id: 6,
          audiPath: 'https://gdurl.com/3yvR',
          text: '6',
          path: require('_assets/images/3/6.jpg'),
        },
        {
          name: 'الدرس السابع',
          id: 7,
          audiPath: 'https://gdurl.com/xgu4',
          path: require('_assets/images/3/7.jpg'),
          text: '7',
        },
        {
          name: 'الدرس الثامن',
          id: 8,
          audiPath: 'https://gdurl.com/1X5k',
          path: require('_assets/images/3/8.jpg'),
          text: '8',
        },
        {name:'الدرس التاسع',
        id:9,
        audiPath: 'https://gdurl.com/LuXq',
        path: require('_assets/images/3/9.jpg'),
        text: '8',
        },
        {name:'الدرس العاشر',
        id:10,
        audiPath: 'https://gdurl.com/hyb6',
        path: require('_assets/images/3/10.jpg'),
        text: '8',
        },
        {name:'الدرس الحادي عشر',
        id:11,
        audiPath: 'https://gdurl.com/TLjA8',
        path: require('_assets/images/3/11.jpg'),
        text: '8',
        },
        {name:'الدرس الثاني عشر',
        id:12,
        audiPath: 'https://gdurl.com/MRfE',
        path: require('_assets/images/3/12.jpg'),
        text: '8',
        },
        {name:'الدرس الثالث عشر',
        id:13,
        audiPath: 'https://gdurl.com/J56a',
        text: '8',
        path: require('_assets/images/3/13.jpg'),
      },
        {name:'الدرس الرابع عشر',
        id:14,
        audiPath: 'https://gdurl.com/YEen',
        path: require('_assets/images/3/14.jpg'),
        text: '8',
        
      },
        {name:'الدرس الخامس عشر',
        id:15,
        audiPath: 'https://gdurl.com/fbpW',
        path: require('_assets/images/3/15.jpg'),
        text: '8',
      },
        {name:'الدرس السادس عشر',
        id:16,
        audiPath: 'https://gdurl.com/6erz',
        path: require('_assets/images/3/16.jpg'),
        text: '8',
      },
      { name:'الدرس السابع عشر',
        id:17,
        audiPath: 'https://gdurl.com/knse',
        path: require('_assets/images/3/17.jpg'),
        text: '8',
      },
        {name:'الدرس الثامن عشر',
        id:18,
        audiPath: 'https://gdurl.com/mGja',
        path: require('_assets/images/3/18.jpg'),
        text: '8',
      },
        {name:'الدرس التاسع عشر',
        id:19,
        audiPath: 'https://gdurl.com/4b9f',
        path: require('_assets/images/3/19.jpg'),
        text: '8',

      },
        {name:'الدرس العشرون',
        id:20,
        audiPath: 'https://gdurl.com/wlnm',
        path: require('_assets/images/3/20.jpg'),
        text: '8',
      },
        {name:'الدرس الواحد والعشرون',
        id:21,
        audiPath: 'https://gdurl.com/fEjF',
        path: require('_assets/images/3/21.jpg'),
        text: '8',
      },
        {name:'الدرس الثاني والعشرون',
        id:22,
        audiPath: 'https://gdurl.com/MgvY',
        path: require('_assets/images/3/22.jpg'),
        text: '8',
      },
        {name:' الدرس الثالث، والرابع والعشرون  ',
        id:23,
        audiPath: 'https://gdurl.com/G69e',
        path: require('_assets/images/3/23.jpg'),
        path2: require('_assets/images/3/24.jpg'),
        text: '8',
      },
       
        {name:'الدرس الخامس، والسادس، والسابع والعشرون',
        id:25,
        audiPath: 'https://gdurl.com/Dqs0',
        path: require('_assets/images/3/25.jpg'),
        path2: require('_assets/images/3/26.jpg'),
        path3: require('_assets/images/3/27.jpg'),
        text: '8',
      },
       
        {name:'الدرس الثامن والعشرون',
        id:28,
        audiPath: 'https://gdurl.com/3ai5',
        path: require('_assets/images/3/28.jpg'),
        text: '8',
      },
        {name:'الدرس التاسع والعشرون والثلاثون',
        id:29,
        audiPath: 'https://gdurl.com/nrXQn',
        text: '8',
        path: require('_assets/images/3/29.jpg'),
        path2: require('_assets/images/3/30.jpg'),
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
          <Text style={styles.title}>الثلاثون النسائية</Text>

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
