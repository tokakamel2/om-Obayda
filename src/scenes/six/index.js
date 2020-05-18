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


class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [
        {
          name: 'الدرس الأول',
          id: 1,
          audiPath: 'https://gdurl.com/PM0h',
          isOpend: false,
          path: require('_assets/images/6/1.jpeg'),
          },
        {
          name: 'الدرس الثاني',
          id: 2,
          audiPath: 'https://gdurl.com/cZJW',
          path: require('_assets/images/6/2.jpeg'),
        
         
        },
        {
          name: 'الدرس الثالث',
          id: 3,
          audiPath: 'https://gdurl.com/R5zW',
          path: require('_assets/images/6/3.jpeg'),
         
        },
        {
          name: 'الدرس الرابع',
          id: 4,
          audiPath: 'https://gdurl.com/MXgh',
          path: require('_assets/images/6/4.jpeg'),
          text: '4',
        },
        {
          name: 'الدرس الخامس',
          id: 5,
          audiPath: 'https://gdurl.com/tL-IR',
          path: require('_assets/images/6/5.jpeg'),
          text: '5',
        },
        {
          name: 'الدرس السادس',
          id: 6,
          audiPath: 'https://gdurl.com/JG3j',
          path: require('_assets/images/6/6.jpeg'),
          text: '6',
        },
        {
          name: 'الدرس السابع',
          id: 7,
          audiPath: 'https://gdurl.com/gMVJ',
          path: require('_assets/images/6/7.jpeg'),
          text: '7',
        },
        {
          name: 'الدرس الثامن',
          id: 8,
          audiPath: 'https://gdurl.com/LoGZ',
          path: require('_assets/images/6/8.jpeg'),
          text: '8',
        },
        {name:'الدرس التاسع',
        id:9,
        audiPath: 'https://gdurl.com/Kf7i',
        path: require('_assets/images/6/9.jpeg'),
        text: '8',
        },
        {name:'الدرس العاشر',
        id:10,
        audiPath: 'https://gdurl.com/AkQ7',
      
        text: '8',
        },
        {name:'الدرس الحادي عشر',
        id:11,
        audiPath: 'https://gdurl.com/QdSq',
        path: require('_assets/images/6/11.jpeg'),
        text: '8',
        },
        {name:'الدرس الثاني عشر',
        id:12,
        audiPath: 'https://gdurl.com/IrCu',
        audiPath2: 'https://gdurl.comظTBZi',
        path: require('_assets/images/6/12.jpeg'),
        text: '8',
        },
        {name:'الدرس الثالث عشر',
        id:13,
        audiPath: 'https://gdurl.com/QE8k',
        path: require('_assets/images/6/13.jpeg'),
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
          <Text style={styles.title}>سلسلة المرأة الصالحة</Text>
          <SafeAreaView>
          <FlatList
            data={this.state.FlatListItems}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={styles.flatview}>
            
              <Text style={styles.name}>{item.name}</Text>
           
           
              <PlayerScreen filepath={item.audiPath}/>
            {item.audiPath2 && <PlayerScreen filepath={item.audiPath2}/>} 
            {item.audiPath3 && <PlayerScreen filepath={item.audiPath3}/>} 
            {item.path && <Image source={item.path} style={styles.Image}/> } 
               
              </View>
            )}
            
            keyExtractor={item => item.id}
          />
          </SafeAreaView>
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
    borderRadius: 2,
    margin: 10,
    marginHorizontal: 10,
    backgroundColor: '#ffef',
    alignItems: 'center',
    flex: 1,
    borderRadius: 10,
    paddingBottom:100,
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
