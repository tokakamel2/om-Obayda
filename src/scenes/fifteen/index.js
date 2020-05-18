import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Alert,
 
  ImageBackground,
  StyleSheet,
 
  
} from 'react-native';

import PlayerScreen from 'react-native-sound-playerview';

import { ScrollView } from 'react-native-gesture-handler';

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [
        {
          name: 'الدرس الأول',
          id: 1,
          audiPath: 'https://gdurl.com/QOpI',
          isOpend: false,
          
          },
        {
          name: 'الدرس الثاني',
          id: 2,
          audiPath: 'https://gdurl.com/XV0Q',
        
         
        },
        {
          name: 'الدرس الثالث',
          id: 3,
          audiPath: 'https://gdurl.com/R_8s',
         
        },
        {
          name: 'الدرس الرابع',
          id: 4,
          audiPath: 'https://gdurl.com/Cos9',
          text: '4',
        },
        {
          name: 'الدرس الخامس',
          id: 5,
          audiPath: 'https://gdurl.com/gjgW',
          text: '5',
        },
        {
          name: 'الدرس السادس',
          id: 6,
          audiPath: 'https://gdurl.com/XEY7',
          text: '6',
        },
        {
          name: 'الدرس السابع',
          id: 7,
          audiPath: 'https://gdurl.com/uGM3',
          text: '7',
        },
        {
          name: 'الدرس الثامن',
          id: 8,
          audiPath: 'https://gdurl.com/jFNE',
          text: '8',
        },
        {name:'الدرس التاسع',
        id:9,
        audiPath: 'https://gdurl.com/MrwX',
        text: '8',
        },
        {name:'الدرس العاشر',
        id:10,
        audiPath: 'https://gdurl.com/PRzD',
        audiPath2:'https://gdurl.com/zoNY',
        text: '8',
        },
        {name:'الدرس الحادي عشر',
        id:11,
        audiPath: 'https://gdurl.com/YQFU',
        text: '8',
        },
        {name:'الدرس الثاني عشر',
        id:12,
        audiPath: 'https://gdurl.com/y6iF',
        audiPath2:'https://gdurl.com/K9kC',
        text: '8',
        },
        {name:'الدرس الثالث عشر',
        id:13,
        audiPath: 'https://gdurl.com/7DsK',
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
          <Text style={styles.title}>تدريب داعية</Text>
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
