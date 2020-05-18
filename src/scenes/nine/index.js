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
  Linking
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
          audiPath: 'https://gdurl.com/eaW0',
          audiPath2: 'https://gdurl.com/SQjb',
          isOpend: false,
          path: require('_assets/images/9/1.jpeg'),
          
          },
        {
          name: 'الدرس الثاني',
          id: 2,
          audiPath: 'https://gdurl.com/blvG',
          path: require('_assets/images/9/2.jpeg'),
         
        },
        {
          name: 'الدرس الثالث',
          id: 3,
          audiPath: 'https://gdurl.com/IsSz',
          audiPath2: 'https://gdurl.com/2baB',
          path: require('_assets/images/9/3.jpeg'),
        },
        {
          name: 'الدرس الرابع',
          id: 3,
          audiPath: 'https://gdurl.com/2baB',
          path: require('_assets/images/9/4.jpeg'),
        },
        {
          name: 'الدرس الخامس',
          id: 4,
          audiPath: 'https://gdurl.com/1BwB',
          text: '4',
          path: require('_assets/images/9/5.jpeg'),
        },
        {
          name: 'الدرس السادس',
          id: 5,
          audiPath: 'https://gdurl.com/uT0F',
          text: '5',
          path: require('_assets/images/9/6.jpeg'),
        },
        {
          name: 'الدرس السابع',
          id: 6,
          audiPath: 'https://gdurl.com/hatX',
          text: '6',
          path: require('_assets/images/9/7.jpeg'),
        },
        {
          name: 'الدرس الثامن',
          id: 7,
          audiPath: 'https://gdurl.com/UrlP',
          text: '7',
          path: require('_assets/images/9/8.jpeg'),
        },
        {
          name: 'الدرس التاسع',
          id: 8,
          audiPath: 'https://gdurl.com/R61Q',
          text: '8',
          path: require('_assets/images/9/9.jpeg'),
        },
        {name:'الدرس العاشر',
        id:9,
        audiPath: 'https://gdurl.com/xGgw',
        text: '8',
        path: require('_assets/images/9/10.jpeg'),
        },
        {name:'الدرس الحادي عشر',
        id:10,
        audiPath: 'https://gdurl.com/pFkg',
        text: '8',
        path: require('_assets/images/9/11.jpeg'),
        },
        {name:'الدرس الثاني عشر ',
        id:11,
        audiPath: 'https://gdurl.com/TqA28',
        text: '8',
        path: require('_assets/images/9/12.jpeg'),
        },
        {
          name:'أسئلة متعلقة بالسلسلة.. لا تفتحيها إلا بعد الانتهاء من السلسلة',
          url:'https://forms.gle/dXsqKU1bEL6L5cu16'
        }
      

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
          <Text style={styles.title}>أعمال القلوب</Text>
          <SafeAreaView>
          <FlatList
            data={this.state.FlatListItems}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={styles.flatview}>
            
              <Text style={styles.name}>{item.name}</Text>
           
           
            {item.audiPath &&  <PlayerScreen filepath={item.audiPath}/>}
            {item.audiPath2 && <PlayerScreen filepath={item.audiPath2}/>} 
            {item.audiPath3 && <PlayerScreen filepath={item.audiPath3}/>} 
            {item.path && <Image source={item.path} style={styles.Image}/> } 
            {item.url && <TouchableOpacity onPress={() =>{ Linking.openURL(item.url)}}><Text style={{paddingBottom:50, fontSize:18}}>اضغطي هنا حتى يتم إرسالك للأسئلة </Text></TouchableOpacity>}   
  
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
    padding: 0,
    borderRadius: 2,
    margin: 10,
    marginHorizontal: 10,
    backgroundColor: '#ffef',
    alignItems: 'center',
    flex: 1,
    borderRadius: 10,
    paddingBottom:50,
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
