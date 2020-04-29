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
          name: 'سورة الإنشقاق',
          id: 6,
          audiPath: 'https://gdurl.com/ufm9',
         
         
         
        },
        {
          name: 'سورة البروج',
          id: 7,
          audiPath: 'https://gdurl.com/z0pt',

        },
        {
          name: 'سورة الطارق',
          id: 7,
          audiPath: 'https://gdurl.com/E2IZ',
          audiPath2: 'https://gdurl.com/HPVR',

     
        },
        {
          name: 'سورة الأعلى',
          id: 7,
          audiPath: 'https://gdurl.com/1-W5',
          audiPath2: 'https://gdurl.com/Z77I',

     
        },
        {
          name: 'سورة الغاشية',
          id: 7,
          audiPath: 'https://gdurl.com/e6I7',
        },
        {
          name: 'سورة الفجر',
          id: 7,
          audiPath: 'https://gdurl.com/4Mlt',
        },
        {
          name: 'سورة البلد',
          id: 7,
          audiPath: 'https://gdurl.com/LCQW',
    
        },
       
        {
          name: 'سورة الشمس',
          id: 7,
          audiPath: 'https://gdurl.com/T8bm',
    
        },
        {
          name: 'سورة الليل',
          id: 7,
          audiPath: 'https://gdurl.com/B8Fc',
    
        },
        {
          name: 'سورة الضحى',
          id: 7,
          audiPath: 'https://gdurl.com/BU_8',
    
        },
        {
          name: 'سورة الشرح',
          id: 7,
          audiPath: 'https://gdurl.com/8s22',
    
        },
        {
          name: 'سورة التين و القدر',
          id: 7,
          audiPath: 'https://gdurl.com/6lCZ',
    
        },
        {
          name: ' سورة العلق ',
          id: 7,
          audiPath: 'https://gdurl.com/d1j7',
    
        },
        {
          name: 'سورة البينة',
          id: 7,
          audiPath: 'https://gdurl.com/93dD',
    
        },
        {
          name: 'سورة الزلزلة و العاديات',
          id: 7,
          audiPath: 'https://gdurl.com/Yt9q',
    
        },
        {
          name: 'سورة القارعة والتكاثر',
          id: 7,
          audiPath: 'https://gdurl.com/Qoeoc',
    
        },
        {
          name: 'سورة العصر و الهمزة والفيل',
          id: 7,
          audiPath: 'https://gdurl.com/mMyQ',
    
        },
     
        {
          name: 'سورة قريش والماعون والكوثر',
          id: 7,
          audiPath: 'https://gdurl.com/iOuc',
    
        },
        {
          name: 'سورة الكافرون والنصر والمسد',
          id: 7,
          audiPath: 'https://gdurl.com/EuMg',
    
        },
        {
          name: 'سورة الإخلاص الفلق والناس',
          id: 7,
          audiPath: 'https://gdurl.com/8Drm',
    
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
          <Text style={styles.title}>تصحيح جزء عم</Text>

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
