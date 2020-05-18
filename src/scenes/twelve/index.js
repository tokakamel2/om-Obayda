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
            name: 'توحيد الألوهية',
            id: 4,
            audiPath: 'https://gdurl.com/0RVX',
            text: '4',
            path: require('_assets/images/12/7.jpeg'),
          },
          {
            name: 'توحيد الربوبية',
            id: 5,
            audiPath: 'https://gdurl.com/Z3jyF',
            text: '5',
          },
          {
            name: 'توحيد الأسماء والصفات',
            id: 6,
            audiPath: 'https://gdurl.com/fEMw',
            text: '6',
          },
          {
            name: 'موحدة الصفات',
            id: 7,
            audiPath: 'https://gdurl.com/c_Qx',
            text: '7',
          },
          {
            name: 'طلب العلم1',
            id: 8,
            audiPath: 'https://gdurl.com/xS_ix',
            text: '8',
          },
          {name:'طلب العلم2',
          id:9,
          audiPath: 'https://gdurl.com/6QUc',
          text: '8',
          path: require('_assets/images/12/1.jpeg'),
          },
          {name:'كيف تكوني داعية1',
          id:10,
          audiPath: 'https://gdurl.com/Roi7',
          text: '8',
          },
          {name:'كيف تكوني داعية2',
          id:11,
          audiPath: 'https://gdurl.com/zdvc',
          text: '8',
          },
          {name:'كيف تكوني داعية3',
          id:12,
          audiPath: 'https://gdurl.com/0NUE',
          text: '8',
          },
          {name:'كيف تكوني داعية4',
          id:13,
          audiPath: 'https://gdurl.com/mmen',
          text: '8',
        },
          {name:'كيف تكوني داعية5',
          id:14,
          audiPath: 'https://gdurl.com/bVgX',
          text: '8',
          
        },
          {name:'حـــــســن الـــخـــــلق',
          id:15,
          audiPath: 'https://gdurl.com/OMIe',
          audiPath2:'https://gdurl.com/fWh4',
         
          text: '8',
          path: require('_assets/images/12/2.jpeg'),
        },
          {name:'كيف تكوني امرأة عابدة1',
          id:16,
          audiPath:'https://gdurl.com/3HEV',
          audiPath2: 'https://gdurl.com/pSBf',
          text: '8',
        },
        {
          name: 'كيف يغفر الله لكِ',
          id: 1,
          audiPath: 'https://gdurl.com/tyEe',
          isOpend: false,
          
          },
        {
          name: 'اتركي الإنترنت',
          id: 2,
          audiPath: 'https://gdurl.com/kv5F',
        
         
        },
        {
          name: 'أمور تهم الداعية خاصة والمسلمة عامة',
          id: 3,
          audiPath:'https://gdurl.com/6PQD',
          audiPath2: 'https://gdurl.com/M7VL',
         
        },
        {
          name: 'رسالة في تربية الأبناء',
          id: 4,
          audiPath: 'https://gdurl.com/sk_M',
          text: '4',
          path: require('_assets/images/12/3.jpeg'),
        },
        {
          name: 'كيف نتخلص من النفاق',
          id: 5,
          audiPath: 'https://gdurl.com/6eHR',
          audiPath2:'https://gdurl.com/Q79C',
          text: '5',
        },
        {
          name: 'الصلاة',
          id: 6,
          audiPath: 'https://gdurl.com/NQ9B',
          audiPath2:'https://gdurl.com/3k-0',
          text: '6',
        },
        {
          name: 'نصيحة',
          id: 7,
          audiPath: 'https://gdurl.com/suXL',
          text: '7',
        },
        {
          name: 'الغربة',
          id: 8,
          audiPath: 'https://gdurl.com/pOMc',
          audiPath2:'https://gdurl.com/vK34',
          text: '8',
        },
      
        {name:'يا بنت الإسلام لا تكوني من المنافقين',
        id:10,
        audiPath: 'https://gdurl.com/YNcS',
        text: '8',
        },
        {name:'كيف أثبت',
        id:11,
        audiPath: 'https://gdurl.com/HogP',
        audiPath2: 'https://gdurl.com/yKYn',
        text: '8',
        },
        {name:'الولاء',
        id:12,
        audiPath: 'https://gdurl.com/aBaS',
        audiPath2:'https://gdurl.com/g7wQ',
        text: '8',
        },
        {name:'الابتلاء',
        id:13,
        audiPath: 'https://gdurl.com/YqFD',
        audiPath2:'https://gdurl.com/18so',
        audiPath3:'https://gdurl.com/luoh',
        text: '8',
      },
        {name:'مشكلات داعية',
        id:14,
        audiPath: 'https://gdurl.com/TVXI',
        audiPath2:'https://gdurl.com/OGhe',
        text: '8',
        
      },
        {name:'ما اسمك عند الله',
        id:15,
        audiPath: 'https://gdurl.com/pS5P',
        text: '8',
        path: require('_assets/images/12/5.jpeg'),
      },
        {name:'طريقة الغسل الصحيحة',
        id:16,
        audiPath: 'https://gdurl.com/R_pB',
        text: '8',
      },
      {
        name: 'ماهو النفاق العقدي',
        id: 1,
        audiPath: 'https://gdurl.com/01cq',
        isOpend: false,
        
        },
      {
        name: 'النفاق العملي',
        id: 2,
        audiPath: 'https://gdurl.com/D_Rv',
        audiPath2:'https://gdurl.com/FkeH',
      
       
      },
      {
        name: 'كلمة عن النقاب',
        id: 3,
        audiPath: 'https://gdurl.com/M9ns',
       
      },
      {
        name: 'كلمة لكل منتقبة1',
        id: 4,
        audiPath: 'https://gdurl.com/XYP3I',
        text: '4',
      },
      {
        name: 'كلمة لكل منتقبة2',
        id: 5,
        audiPath: 'https://gdurl.com/HkX7',
        text: '5',
        path: require('_assets/images/12/4.jpeg'),
      },
      {
        name: 'يابنت الإسلام لا تكوني من المنافقين وقد أهلت العشر',
        id: 6,
        audiPath: 'https://gdurl.com/X7Ce',
        audiPath2:'https://gdurl.com/ePzZ',
        text: '6',
      },
      {
        name: 'اشياء كثيره فى قلبى حتى بعد التزامى  كيف اتخلص منها ؟',
        id: 7,
        audiPath: 'https://gdurl.com/cTKM',
        text: '7',
      },
      {
        name: 'حب الله1',
        id: 8,
        audiPath: 'https://gdurl.com/VIon',
        text: '8',
      },
      {name:'حب الله2',
      id:9,
      audiPath: 'https://gdurl.com/MRHA',
      text: '8',
      },
      {name:'الخوف من الله',
      id:9,
      audiPath: 'https://gdurl.com/Dzec',
      text: '8',
      },
      {name:'الرجاء',
      id:10,
      audiPath: 'https://gdurl.com/bgrU',
      text: '8',
      },
 
     
      {name:'ماذا فعل بك الانترنت',
      id:13,
      audiPath: 'https://gdurl.com/aylz',
      text: '8',
      path: require('_assets/images/12/6.jpeg'),
    },
      {name:'سؤال هام',
      id:14,
      audiPath: 'https://gdurl.com/K-VW',
      text: '8',
      
    },
      {name:'كلمة عن طلب العلم والدعوة',
      id:15,
      audiPath: 'https://gdurl.com/YGph',
      text: '8',
    },
     
    {name:'كيف احافظ على صلاه الفجر والقيام',
    id:13,
    audiPath: 'https://gdurl.com/fGcY',
    text: '8',
  },
    {name:'مسائل مهمة',
    id:14,
    audiPath: 'https://gdurl.com/f7G1',
    text: '8',
    path: require('_assets/images/12/7.jpeg'),
  },
   
  {name:'ما سبب الانتكاس؟',
  id:16,
  audiPath: 'https://gdurl.com/vyYy',
  text: '8',
},
{
  name: 'علاج الفتور',
  id: 9,
  audiPath: 'https://gdurl.com/8DeK',
  audiPath2:'https://gdurl.com/oKil',
  isOpend: false,
  
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
          <Text style={styles.title}>يا بنت الإسلام أطيعي الله ورسوله</Text>
          <ScrollView>
         
          <FlatList
            data={this.state.FlatListItems}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={styles.flatview}>
               <View>
              <Text style={styles.name}>{item.name}</Text>
              </View> 
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
    fontSize: 30,
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
    height:200,
    width:300,
    marginBottom:15,
    borderRadius: 5,

  }
});
export default home;
