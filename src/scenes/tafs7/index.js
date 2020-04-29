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
          name: 'سورة الملك',
          id: 1,
          audiPath: 'https://gdurl.com/n-ZE',
          audiPath2:'https://gdurl.com/p3aX',
      
          isOpend: false,
          
          },
        {
          name: 'سورة القلم',
          id: 2,
          audiPath: 'https://gdurl.com/IlsQ',
          audiPath2: 'https://gdurl.com/qqI4',
        
         
        },
        {
          name: 'سورة الحاقة',
          id: 3,
          audiPath: 'https://gdurl.com/UmN0',
          audiPath2: 'https://gdurl.com/8NTh',
         
        },
        {
          name: 'سورة المعارج',
          id: 4,
          audiPath: 'https://gdurl.com/JlMk',
          audiPath2: 'https://gdurl.com/fbfp',
    
        },
        {
          name: 'سورة نوح',
          id: 5,
          audiPath: 'https://gdurl.com/nZoI',
          audiPath2: 'https://gdurl.com/DwiW',
     
        },
        {
          name: 'سورة الجن',
          id: 6,
          audiPath: 'https://gdurl.com/8mCJ',
          audiPath2: 'https://gdurl.com/hYFo',
         
         
        },
        {
          name: 'سورة المزمل',
          id: 7,
          audiPath: 'https://gdurl.com/8yGb',

        },
        {
          name: 'سورة المدثر',
          id: 7,
          audiPath: 'https://gdurl.com/2jh7',
          audiPath2: 'https://gdurl.com/xu8y',

     
        },
        {
          name: 'سورة القيامة',
          id: 7,
          audiPath: 'https://gdurl.com/hGff',
        },
        {
          name: 'سورة الإنسان',
          id: 7,
          audiPath: 'https://gdurl.com/TC-6',
          audiPath2: 'https://gdurl.com/YMhE',
        },
        {
          name: 'سورة المرسلات',
          id: 7,
          audiPath: 'https://gdurl.com/LIKZ',
    
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
          <Text style={styles.title}>تفسير جزء تبارك</Text>

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
