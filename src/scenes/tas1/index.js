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
          audiPath: 'https://gdurl.com/S6vP',
          audiPath2:'https://gdurl.com/j0hf',
      
          isOpend: false,
          
          },
        {
          name: 'سورة القلم',
          id: 2,
          audiPath: 'https://gdurl.com/N3ZT',
          audiPath2: 'https://gdurl.com/41Kv',
        
         
        },
        {
          name: 'سورة الحاقة',
          id: 3,
          audiPath: 'https://gdurl.com/AsXt',
          audiPath2: 'https://gdurl.com/ufug',
         
        },
        {
          name: 'سورة المعارج',
          id: 4,
          audiPath: 'https://gdurl.com/hdd4',
          audiPath2: 'https://gdurl.com/Pq_0',
    
        },
        {
          name: 'سورة نوح',
          id: 5,
          audiPath: 'https://gdurl.com/Q61X',
          audiPath2: 'https://gdurl.com/Ln2m',
     
        },
        {
          name: 'سورة الجن',
          id: 6,
          audiPath: 'https://gdurl.com/deli',
          audiPath2: 'https://gdurl.com/tCBw',
         
         
        },
        {
          name: 'سورة المزمل',
          id: 7,
          audiPath: 'https://gdurl.com//Md6G',

        },
        {
          name: 'سورة المدثر',
          id: 7,
          audiPath: 'https://gdurl.com/tbNd',
          audiPath2: 'https://gdurl.com/gXXUe',

     
        },
        {
          name: 'سورة القيامة',
          id: 7,
          audiPath: 'https://gdurl.com/mDaI',
        },
        {
          name: 'سورة الإنسان',
          id: 7,
          audiPath: 'https://gdurl.com/2a32',
          audiPath2: 'https://gdurl.com/TBeQ',
        },
        {
          name: 'سورة المرسلات',
          id: 7,
          audiPath: 'https://gdurl.com/wNWN',
    
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
          <Text style={styles.title}>تصحيح جزء تبارك</Text>

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
