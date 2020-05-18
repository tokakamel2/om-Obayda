import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Alert,
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
          audiPath: 'https://gdurl.com/lT3C',
          isOpend: false,
          path: require('_assets/images/8/1.jpeg'),

          
          },
        {
          name: 'الدرس الثاني',
          id: 2,
          audiPath: 'https://gdurl.com/LEFt',
          audiPath2:'https://gdurl.com/NDdG',
          path: require('_assets/images/8/2.jpeg'),

         
        },
        {
          name: 'الدرس الثالث',
          id: 3,
          audiPath: 'https://gdurl.com/7yDc',
          audiPath2: 'https://gdurl.com/0CLV',
          audiPath3: 'https://gdurl.com/fW2K5',
          path: require('_assets/images/8/3.jpeg'),

         
        },
        {
          name: 'الدرس الرابع',
          id: 4,
          audiPath: 'https://gdurl.com/QE3K',
          path: require('_assets/images/8/4.jpeg'),

        },
        {
          name: 'الدرس الخامس',
          id: 5,
          audiPath: 'https://gdurl.com/ZvXc',
          text: '5',
          path: require('_assets/images/8/5.jpeg'),

        },
        {
          name: 'الدرس السادس',
          id: 6,
          audiPath: 'https://gdurl.com/gsEI',
          audiPath2: 'https://gdurl.com/3WlJ',
          text: '6',
          path: require('_assets/images/8/6.jpeg'),

        },
        {
          name: 'الدرس السابع',
          id: 7,
          audiPath: 'https://gdurl.com/44zs',
          text: '7',
          path: require('_assets/images/8/7.jpeg'),

        },
        {
          name: 'الدرس الثامن',
          id: 8,
          audiPath: 'https://gdurl.com/WQBB',
          text: '8',
          path: require('_assets/images/8/8.jpeg'),

        },
        {name:'الدرس التاسع',
        id:9,
        audiPath: 'https://gdurl.com/gZcj',
        text: '8',
        path: require('_assets/images/8/9.jpeg'),

        },
        {name:'الدرس العاشر',
        id:10,
        audiPath: 'https://gdurl.com/Mo4Q',
        text: '8',
        path: require('_assets/images/8/10.jpeg'),

        },
        {name:'الدرس الحادي عشر',
        id:11,
        audiPath: 'https://gdurl.com/Olpj',
        text: '8',
        path: require('_assets/images/8/11.jpeg'),

        },
        {name:'الدرس الثاني عشر',
        id:12,
        audiPath: 'https://gdurl.com/8Sgs',
        text: '8',
        path: require('_assets/images/8/12.jpeg'),

        },
        {name:'الدرس الثالث عشر',
        id:13,
        audiPath: 'https://gdurl.com/DoFr',
        text: '8',
        path: require('_assets/images/8/13.jpeg'),

      },
        {name:'الدرس الرابع عشر',
        id:14,
        audiPath: 'https://gdurl.com/W1eh',
        audiPath2: 'https://gdurl.com/A9Jj',
        text: '8',
        path: require('_assets/images/8/14.jpeg'),

        
      },
        {name:'الدرس الخامس عشر',
        id:15,
        audiPath: 'https://gdurl.com/yPfi',
        text: '8',
        path: require('_assets/images/8/15.jpeg'),

      },
        {name:'الدرس السادس عشر',
        id:16,
        audiPath: 'https://gdurl.com/rrHZ',
        text: '8',
        path: require('_assets/images/8/16.jpeg'),

      },
      {
        name:'أسئلة متعلقة بالسلسلة.. لا تفتحيها إلا بعد الانتهاء من السلسلة',
        url:'https://forms.gle/rYVynA5Dmyywmiz7A'
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
          <Text style={styles.title}>أمراض القلوب</Text>
          <SafeAreaView>
          <FlatList
            data={this.state.FlatListItems}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={styles.flatview}>
            
              <Text style={styles.name}>{item.name}</Text>
           
           
            {item.audiPath &&   <PlayerScreen filepath={item.audiPath}/>}
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
    paddingBottom:50
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
