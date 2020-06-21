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
  Linking,
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
          name: 'الدرس الأول',
          id: 1,
          audiPath: 'https://gdurl.com/xlXp',
          audiPath2:'https://gdurl.com/tzBC',
          isOpend: false,
          
          },
        {
          name: 'الدرس الثاني',
          id: 2,
          audiPath: 'https://gdurl.com/86fK',
          audiPath2:'https://gdurl.com/EcZe',
        
         
        },
        {
          name: 'الدرس الثالث',
          id: 3,
          audiPath: 'https://gdurl.com/xMrr',
          audiPath2:'https://gdurl.com/Spmk'
         
        },
        {
          name: 'الدرس الرابع',
          id: 4,
          audiPath: 'https://gdurl.com/jvLh',
          audiPath2:'https://gdurl.com/pnBJ',
          audiPath3:'https://gdurl.com/gMps',
          text: '4',
        },
        {
          name: 'الدرس الخامس',
          id: 5,
          audiPath: 'https://gdurl.com/eayu',
          audiPath2:'https://gdurl.com/5cJy',
          text: '5',
        },
        {
          name: 'الدرس السادس',
          id: 6,
          audiPath: 'https://gdurl.com/PtnQ',
          audiPath2:'https://gdurl.com/5V_C',
          audiPath3:'https://gdurl.com/FFi1',
          text: '6',
        },
        {
          name: 'الدرس السابع',
          id: 7,
          audiPath: 'https://gdurl.com/RcUq',
          audiPath2:'https://gdurl.com/WDOI',
          audiPath3:'https://gdurl.com/F-32',
          text: '7',
        },
        {
          name: 'الدرس الثامن',
          id: 8,
          audiPath: 'https://gdurl.com/kf85',
          audiPath2:'https://gdurl.com/All9',
          audiPath3:'https://gdurl.com/Vjdu',
          text: '8',
        },
        {name:'الدرس التاسع',
        id:9,
        audiPath: 'https://gdurl.com/c_pP',
        audiPath2:'https://gdurl.com/FjIG',
        audiPath3:'https://gdurl.com/WsX0',
        text: '8',
        },
        {name:'الدرس العاشر',
        id:10,
        audiPath: 'https://gdurl.com/saOE',
        audiPath2:'https://gdurl.com/VRDs',
        audiPath3:'https://gdurl.com/kgI8',
        text: '8',
        },
        {name:'الدرس الحادي عشر',
        id:11,
        audiPath: 'https://gdurl.com/l4vF',
        audiPath2:'https://gdurl.com/gGkE',
        text: '8',
        },
        {name:'الدرس الثاني عشر',
        id:12,
        audiPath2: 'https://gdurl.com/EcR4',
        audiPath:'https://gdurl.com/ozyC',
        text: '8',
        },
        {name:'الدرس الثالث عشر',
        id:13,
        audiPath: 'https://gdurl.com/8ngR',
        audiPath2:'https://gdurl.com/5UWC',
        text: '8',
      },
        {name:'الدرس الرابع عشر',
        id:14,
        audiPath: 'https://gdurl.com/nUSA',
        audiPath2:'https://gdurl.com/mEWB',
        text: '8',
        
      },
        {name:'الدرس الخامس عشر',
        id:15,
        audiPath: 'https://gdurl.com/Hbbi',
        audiPath2:'https://gdurl.com/OQin',
        text: '8',
      },
        {name:'الدرس السادس عشر',
        id:16,
        audiPath: 'https://gdurl.com/ue79',
        audiPath2:'https://gdurl.com/odVNT',
        text: '8',
      },
      {
        name: 'الدرس السابع عشر',
        id: 1,
        audiPath: 'https://gdurl.com/NFxx',
        audiPath2:'https://gdurl.com/7dyO',
        isOpend: false,
        
        },
      {
        name: 'الدرس الثامن عشر',
        id: 2,
        audiPath: 'https://gdurl.com/jHlt',
        audiPath2:'https://gdurl.com/LpAW',
      
       
      },
      {
        name: 'الدرس التاسع عشر',
        id: 3,
        audiPath: 'https://gdurl.com/0Kfz',
        audiPath2:'https://gdurl.com/kKqf',
       
      },
      {
        name: 'الدرس العشرون',
        id: 4,
        audiPath: 'https://gdurl.com/YMRZ',
        audiPath2:'https://gdurl.com/93L4',
        text: '4',
      },
      {
        name: 'الدرس الواحد والعشرون',
        id: 5,
        audiPath2: 'https://gdurl.com/kZtX',
        audiPath:'https://gdurl.com/Nj5T',
        text: '5',
      },
      {
        name: 'الدرس الثاني والعشرون',
        id: 6,
        audiPath: 'https://gdurl.com/LAgn',
        audiPath2:'https://gdurl.com/Okjx',
        text: '6',
      },
      {
        name: 'الدرس الثالث والعشرون',
        id: 7,
        audiPath: 'https://gdurl.com/dYiq',
        text: '7',
      },
      {
        name: 'الدرس الرابع والعشرون',
        id: 8,
        audiPath: 'https://gdurl.com/sz74',
        text: '8',
      },
      {name:'الدرس الخامس والعشرون',
      id:9,
      audiPath: 'https://gdurl.com/ohveR',
      text: '8',
      },
      {name:'الدرس السادس والعشرون',
      id:10,
      audiPath: 'https://gdurl.com/7apb',
      text: '8',
      },
      {name:'الدرس السابع والعشرون ',
      id:11,
      audiPath: 'https://gdurl.com/qc6Q',
      text: '8',
      },
      {name:'الدرس الثامن والعشرون ',
      id:12,
      audiPath: 'https://gdurl.com/mTwE',
      text: '8',
      },
      {name:'الدرس التاسع والعشرون ',
      id:13,
      audiPath: 'https://gdurl.com/jmuM',
      text: '8',
    },
      {name:'الدرس الثلاثون ',
      id:14,
      audiPath2: 'https://gdurl.com/6JVb',
      audiPath:'https://gdurl.com/hUGDV',
      text: '8',
      
    },
      {name:'الدرس الواحد والثلاثون ',
      id:15,
      audiPath: 'https://gdurl.com/fRjT',
      text: '8',
    },
      {name:'الدرس الثاني والثلاثون ',
      id:16,
      audiPath: 'https://gdurl.com/Svqx',
      text: '8',
    },
    {
      name: 'الدرس الثالث والثلاثون',
      id: 1,
      audiPath: 'https://gdurl.com/nQIq',
      audiPath2:'https://gdurl.com/I2eI',
      isOpend: false,
      
      },
    {
      name: 'الدرس الرابع والثلاثون',
      id: 2,
      audiPath2: 'https://gdurl.com/qtJP',
      audiPath:'https://gdurl.com/aBkv',
    
     
    },
    {
      name: 'الدرس الخامس والثلاثون',
      id: 3,
      audiPath: 'https://gdurl.com/J4yy',
      audiPath2:'https://gdurl.com/yEZU',
     
    },
    {
      name: 'الدرس السادس والثلاثون',
      id: 4,
      audiPath: 'https://gdurl.com/jmGqq',
      audiPath2:'https://gdurl.com/v-yw',
      text: '4',
    },
    {
      name: 'الدرس السابع والثلاثون',
      id: 5,
      audiPath: 'https://gdurl.com/y3WJ',
      text: '5',
    },
    {
      name: 'الدرس الثامن والثلاثون',
      id: 6,
      audiPath: 'https://gdurl.com/aqw0',
      text: '6',
    },
    {
      name: 'الدرس التاسع والثلاثون',
      id: 7,
      audiPath: 'https://gdurl.com/Dfzg',
      text: '7',
    },
    {
      name: 'الدرس الأربعون',
      id: 8,
      audiPath: 'https://gdurl.com/q5n7',
      text: '8',
    },
    {name:'الدرس الواحد والأربعون',
    id:9,
    audiPath: 'https://gdurl.com/9-2P',
    text: '8',
    },
    {name:'الدرس الثاني والأربعون',
    id:10,
    audiPath: 'https://gdurl.com/47T1',
    audiPath2:'https://gdurl.com/rEUp',
    text: '8',
    },
    {name:'الدرس الثالث والأربعون ',
    id:11,
    audiPath: 'https://gdurl.com/2csn',
    text: '8',
    },
    {name:'الدرس الرابع والأربعون ',
    id:12,
    audiPath: 'https://gdurl.com/R3am',
    text: '8',
    },
    {name:'الدرس الخامس والأربعون ',
    id:13,
    audiPath: 'https://gdurl.com/AAaW',
    audiPath2:'https://gdurl.com/jOt7',
    text: '8',
  },
    {name:'الدرس السادس والأربعون ',
    id:14,
    audiPath: 'https://gdurl.com/Rw2q',
    text: '8',
    
  },
    {name:'الدرس السابع والأربعون ',
    id:15,
    audiPath: 'https://gdurl.com/s36q',
    audiPath2:'https://gdurl.com/TVRU5',
    text: '8',
  },
    {name:'الدرس الثامن والأربعون ',
    id:16,
    audiPath: 'https://gdurl.com/8LKK',
    text: '8',
  },
  {
    name: 'الدرس التاسع والأربعون',
    id: 1,
    audiPath: 'https://gdurl.com/xrbQ',
    isOpend: false,
    
    },
  {
    name: 'الدرس الخمسون',
    id: 2,
    audiPath: 'https://gdurl.com/TxX2',
  
   
  },
  {
    name: 'الدرس الواحد والخمسون',
    id: 3,
    audiPath: 'https://gdurl.com/Jhlp',
   
  },
  {
    name: 'الدرس الثاني والخمسون',
    id: 4,
    audiPath: 'https://gdurl.com/4dXO',
    audiPath2:'https://gdurl.com/QH4V',
    text: '4',
  },
  {
    name: 'الدرس الثالث والخمسون',
    id: 5,
    audiPath: 'https://gdurl.com/Oaz6',
    audiPath2:'https://gdurl.com/Jj00',
    text: '5',
  },
  {
    name: 'الدرس الرابع والخمسون',
    id: 6,
    audiPath: 'https://gdurl.com/b8qU',
    audiPath2:'https://gdurl.com/Ny9m',
    text: '6',
  },
  {
    name: 'الدرس الخامس والخمسون',
    id: 7,
    audiPath: 'https://gdurl.com/yFAR',
    text: '7',
  },
  {
    name: 'الدرس السادس والخمسون',
    id: 8,
    audiPath: 'https://gdurl.com/rVlp',
    text: '8',
  },
  {name:'الدرس السابع والخمسون',
  id:9,
  audiPath: 'https://gdurl.com/SPMj',
  text: '8',
  },
  {name:'الدرس الثامن والخمسون',
  id:10,
  audiPath: 'https://gdurl.com/JTjv',
  text: '8',
  },
  {name:'الدرس التاسع والخمسون ',
  id:11,
  audiPath: 'https://gdurl.com/L6Tz',
  text: '8',
  },
  {name:'الدرس الستون ',
  id:12,
  audiPath: 'https://gdurl.com/6r2P',
  text: '8',
  },
  {name:'الدرس الواحد والستون ',
  id:13,
  audiPath: 'https://gdurl.com/tWIN',
  text: '8',
},
  {name:'الدرس الثاني والستون ',
  id:14,
  audiPath: 'https://gdurl.com/uNzco',
  text: '8',
  
},
  {name:'الدرس الثالث والستون ',
  id:15,
  audiPath: 'https://gdurl.com/Fl52',
  text: '8',
},
  {name:'الدرس الرابع والستون ',
  id:16,
  audiPath: 'https://gdurl.com/FcLY',
  text: '8',
},
{
  name: 'الدرس الخامس والستون',
  id: 1,
  audiPath: 'https://gdurl.com/R0F0',
  isOpend: false,
  
  },
{
  name: 'الدرس السادس والستون',
  id: 2,
  audiPath: 'https://gdurl.com/w9fi',

 
},
{
  name: 'الدرس السابع والستون',
  id: 3,
  audiPath: 'https://gdurl.com/YhmK',
 
},
{
  name: 'الدرس الثامن والستون',
  id: 4,
  audiPath: 'https://gdurl.com/H4K4w',
  text: '4',
},
{
  name: 'الدرس التاسع والستون',
  id: 5,
  audiPath: 'https://gdurl.com/MbYx',
  text: '5',
},
{
  name: 'الدرس السبعون',
  id: 6,
  audiPath: 'https://gdurl.com/5XcR',
  text: '6',
},
{
  name: 'الدرس الواحد والسبعون',
  id: 7,
  audiPath: 'https://gdurl.com/6PLb',
  text: '7',
},
{
  name: 'الدرس الثاني والسبعون',
  id: 8,
  audiPath: 'https://gdurl.com/y5mP',
  text: '8',
},
{name:'الدرس الثالث والسبعون',
id:9,
audiPath: 'https://gdurl.com/1Hjc',
text: '8',
},
{name:'الدرس الرابع والسبعون',
id:10,
audiPath: 'https://gdurl.com/82Ks',
text: '8',
},
{name:'الدرس الخامس والسبعون ',
id:11,
audiPath: 'https://gdurl.com/ZZYJ',
text: '8',
},
{name:'الدرس السادس والسبعون ',
id:12,
audiPath: 'https://gdurl.com/Gy1t',
text: '8',
},
{name:'الدرس السابع والسبعون ',
id:13,
audiPath: 'https://gdurl.com/Z3P3',
text: '8',
},
{name:'الدرس الثامن والسبعون ',
id:14,
audiPath: 'https://gdurl.com/LE2m',
text: '8',

},
{name:'الدرس التاسع والسبعون ',
id:15,
audiPath: 'https://gdurl.com/vShE',
text: '8',
},
{name:'الدرس الثمانون ',
id:16,
audiPath: 'https://gdurl.com/t7zo',
text: '8',
},
{
  name: 'الدرس الواحد والثمانون',
  id: 1,
  audiPath: 'https://gdurl.com/tfK9',
  isOpend: false,
  
  },
{
  name: 'الدرس الثاني والثمانون',
  id: 2,
  audiPath: 'https://gdurl.com/etX6',

 
},
{
  name: 'الدرس الثالث والثمانون',
  id: 3,
  audiPath: 'https://gdurl.com/9Wg4',
 
},
{
  name: 'الدرس الرابع والثمانون',
  id: 4,
  audiPath: 'https://gdurl.com/eTr3',
  text: '4',
},
{
  name: 'الدرس الخامس والثمانون',
  id: 5,
  audiPath: 'https://gdurl.com/KPE3',
  text: '5',
},
{
  name: 'الدرس السادس والثمانون',
  id: 6,
  audiPath: 'https://gdurl.com/IS8f4',
  text: '6',
},
{
  name: 'الدرس السابع والثمانون',
  id: 7,
  audiPath: 'https://gdurl.com/9ia2',
  text: '7',
},
{
  name: 'الدرس الثامن والثمانون',
  id: 8,
  audiPath: 'https://gdurl.com/VYOr',
  text: '8',
},
{name:'الدرس التاسع والثمانون',
id:9,
audiPath: 'https://gdurl.com/Q_mNm',
text: '8',
},
{name:'الدرس التسعون',
id:10,
audiPath: 'https://gdurl.com/B_co',
text: '8',
},
{name:'الدرس الواحد والتسعون ',
id:11,
audiPath: 'https://gdurl.com/grhF',
text: '8',
},
{name:'الدرس الثاني والتسعون',
id:12,
audiPath: 'https://gdurl.com/6vRC',
text: '8',
},
{name:'الدرس الثالث والتسعون',
id:13,
audiPath: 'https://gdurl.com/HzXf',
text: '8',
},
{name:'الدرس الرابع والتسعون',
id:14,
audiPath: 'https://gdurl.com/Vl-J',
text: '8',

},
{name:'الدرس الخامس والتسعون',
id:15,
audiPath: 'https://gdurl.com/kX4q',
text: '8',
},
{name:'الدرس السادس والتسعون',
id:16,
audiPath: 'https://gdurl.com/Z4yM',
text: '8',
},
{name:'الدرس السابع والتسعون',
id:14,
audiPath: 'https://gdurl.com/XqX8',
text: '8',
},
{
  name:'أسئلة متعلقة بالسلسلة.. لا تفتحيها إلا بعد الانتهاء من السلسلة',
  url:'https://forms.gle/oW4UqKB4TJj8kY4r7'
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
          <Text style={styles.title}>صحيح البخاري</Text>
          <ScrollView>
          <FlatList
            data={this.state.FlatListItems}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={styles.flatview}>
            
              <Text style={styles.name}>{item.name}</Text>
           
           
            {item.path && <Text style={styles.text}>{item.text}</Text> } 
             {item.audiPath &&  <PlayerScreen filepath={item.audiPath}/>}
            {item.audiPath2 && <PlayerScreen filepath={item.audiPath2}/>} 
            {item.audiPath3 && <PlayerScreen filepath={item.audiPath3}/>} 
            {item.path && <Image source={item.path} style={styles.Image}/> } 
            {item.url && <TouchableOpacity onPress={() =>{ Linking.openURL(item.url)}}><Text style={{paddingBottom:50, fontSize:18}}>اضغطي هنا حتى يتم إرسالك للأسئلة </Text></TouchableOpacity>}   
   
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
