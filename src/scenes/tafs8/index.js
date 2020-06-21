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
          name: 'سورة النبأ',
          id: 1,
          audiPath: 'https://gdurl.com/fsBW',
      
          isOpend: false,
          
          },
        {
          name: 'سورة النازعات',
          id: 2,
          audiPath: 'https://gdurl.com/uBAx',
        
         
        },
        {
          name: 'سورة عبس',
          id: 3,
          audiPath: 'https://gdurl.com/8q0e',
         
        },
        {
          name: 'سورة التكوير والإنفطار',
          id: 4,
          audiPath: 'https://gdurl.com/I4FB',
    
        },
        {
          name: 'سورة المطففين',
          id: 5,
          audiPath: 'https://gdurl.com/wH0g',
     
        },
        {
          name: 'سورة الإنشقاق',
          id: 6,
          audiPath: 'https://gdurl.com/0BvC',
          audiPath2: 'https://gdurl.com/rnxD',
          audiPath3: 'https://gdurl.com/iAZn',
         
         
        },
        {
          name: 'سورة البروج',
          id: 7,
          audiPath: 'https://gdurl.com/TEtJb',
          audiPath2: 'https://gdurl.com/T7N1',
          audiPath3: 'https://gdurl.com/uhUc',
          audiPath4: 'https://gdurl.com/QhqS',

        },
        {
          name: 'سورة الطارق',
          id: 7,
          audiPath: 'https://gdurl.com/3UfJ',
          audiPath2: 'https://gdurl.com/GAm6',

     
        },
        {
          name: 'سورة الأعلى',
          id: 7,
          audiPath: 'https://gdurl.com/inxA',
          audiPath2: 'https://gdurl.com/Afez',
          audiPath3: 'https://gdurl.com/RXqI',


     
        },
        {
          name: 'سورة الغاشية',
          id: 7,
          audiPath: 'https://gdurl.com/Bmlg',
          audiPat2: 'https://gdurl.com/Kc6c',

        },
        {
          name: 'سورة الفجر',
          id: 7,
          audiPath: 'https://gdurl.com/Zr_6G',
          audiPath2: 'https://gdurl.com/Je9V',
        },
        {
          name: 'سورة البلد',
          id: 7,
          audiPath: 'https://gdurl.com/PxyW',
          audiPath2: 'https://gdurl.com/32Pg',

    
        },
       
        {
          name: 'سورة الشمس',
          id: 7,
          audiPath: 'https://gdurl.com/O6Iy',
    
        },
        {
          name: 'سورة الليل',
          id: 7,
          audiPath: 'https://gdurl.com/dgwu',
    
        },
        {
          name: 'سورة الضحى',
          id: 7,
          audiPath: 'https://gdurl.com/uEh4',
    
        },
        {
          name: 'سورة الشرح',
          id: 7,
          audiPath: 'https://gdurl.com/IFA3',
    
        },
        {
          name: 'سورة التين و العلق',
          id: 7,
          audiPath: 'https://gdurl.com/P4Uj',
    
        },
        {
          name: ' سورة القدر ',
          id: 7,
          audiPath: 'https://gdurl.com/5R7E',
    
        },
        {
          name: 'سورة البينة',
          id: 7,
          audiPath: 'https://gdurl.com/VadM',
    
        },
        {
          name: 'سورة الزلزلة و العاديات',
          id: 7,
          audiPath: 'https://gdurl.com/2O6A',
    
        },
        {
          name: 'سورة القارعة والتكاثر',
          id: 7,
          audiPath: 'https://gdurl.com/FlNS',
    
        },
        {
          name: 'سورة العصر و الهمزة والفيل',
          id: 7,
          audiPath: 'https://gdurl.com/sTwL',
    
        },
     
        {
          name: 'سورة قريش والماعون والكوثر',
          id: 7,
          audiPath: 'https://gdurl.com/mTlp',
    
        },
        {
          name: 'سورة الكافرون والنصر والمسد',
          id: 7,
          audiPath: 'https://gdurl.com/bbwP',
    
        },
        {
          name: 'سورة الإخلاص الفلق والناس',
          id: 7,
          audiPath: 'https://gdurl.com/c1wo',
    
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
          <Text style={styles.title}>تفسير جزء عم</Text>
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
            {item.audiPath4 && <PlayerScreen filepath={item.audiPath3}/>} 
            {item.audiPath5 && <PlayerScreen filepath={item.audiPath3}/>} 
 
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
