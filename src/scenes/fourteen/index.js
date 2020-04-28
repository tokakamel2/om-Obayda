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
          name: 'سيرة الإمام النووي',
          id: 1,
          audiPath: 'https://gdurl.com/dTtn',
          isOpend: false,
          
          },
        {
          name: 'ترجمة الإمام النووي',
          id: 2,
          audiPath: 'https://gdurl.com/qX2a',
        
         
        },
        {
          name: 'ترجمة الشيخ بن عثيمين',
          id: 3,
          audiPath: 'https://gdurl.com/75ga',
         
        },
        {
          name: 'شرح حديث إنما الأعمال بالنيات',
          id: 4,
          audiPath: 'https://gdurl.com/C6Uw',
          text: '4',
        },
        {
          name: 'الحديث الثاني من الأربعون النووية',
          id: 5,
          audiPath: 'https://gdurl.com/K74j',
          text: '5',
        },
        {
          name: 'الحديث الثالث',
          id: 6,
          audiPath: 'https://gdurl.com/tbUz',
          text: '6',
        },
        {
          name: 'الحديث الرابع',
          id: 7,
          audiPath: 'https://gdurl.com/syhoG',
          text: '7',
        },
        {
          name:'الحديث الخامس',
          id: 8,
          audiPath: 'https://gdurl.com/EYzk',
          text: '8',
        },
        {
        name:'الحديث السادس',
        id:9,
        audiPath: 'https://gdurl.com/OwrM',
        text: '8',
        },
        {
        name:'الحديث السابع',
        id:10,
        audiPath: 'https://gdurl.com/29qG',
        text: '8',
        },
        {
        name:'الحديث الثامن',
        id:11,
        audiPath: 'https://gdurl.com/PTmZ',
        text: '8',
        },
        {
        name:'الحديث التاسع',
        id:12,
        audiPath: 'https://gdurl.com/4Kh4',
        text: '8',
        },
        {
         name:'الحديث العاشر ',
        id:13,
        audiPath: 'https://gdurl.com/tK_0',
        text: '8',
      },
        {
        name:'الحديث الحادي عشر ', 
        id:14,
        audiPath: 'https://gdurl.com/3Qhb',
        text: '8',
        
      },
    
        {name:'الحديث الثاني عشر ',
        id:16,
        audiPath: 'https://gdurl.com/k4zdC',
        text: '8',
      },
      {name:'الحديث الثالث عشر ',
      id:16,
      audiPath: 'https://gdurl.com/1Fwk',
      text: '8',
    },
    {name:'الحديث الرابع عشر ',
    id:16,
    audiPath: 'https://gdurl.com/XPUi',
    text: '8',
  },
  {name:'الحديث الخامس عشر ',
  id:16,
  audiPath: 'https://gdurl.com/Emhp',
  text: '8',
},
{name:'الحديث السادس عشر',
id:16,
audiPath: 'https://gdurl.com/Nfk8',
text: '8',
},
{name:'الحديث السابع عشر',
id:16,
audiPath: 'https://gdurl.com/OX9s',
text: '8',
},
{name:'الحديث الثامن عشر',
id:16,
audiPath: 'https://gdurl.com/Ypsw',
text: '8',
},
{name:'الحديث التاسع عشر',
id:16,
audiPath: 'https://gdurl.com/NTyK',
text: '8',
},
{name:'الحديث العشرون ',
id:16,
audiPath: 'https://gdurl.com/ZKLr',
text: '8',
},
{name:'الحديث الواحد والعشرون',
id:16,
audiPath: 'https://gdurl.com/eHR7',
text: '8',
},
{name:'الحديث الثاني والعشرون',
id:16,
audiPath: 'https://gdurl.com/QjMX',
text: '8',
},
{name:'الحديث الثالث والعشرون',
id:16,
audiPath: 'https://gdurl.com/rpz6',
text: '8',
},
{name:'الحديث الرابع والعشرون',
id:16,
audiPath: 'https://gdurl.com/LGnY',
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
          <Text style={styles.title}>حلية طالب العلم</Text>

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
