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
          name: '',
          id: 2,
         path:require('_assets/images/da2/1.jpg'),
        },
        {
          name: 'اداب الطالب مع شيخه* 1',
          id: 1,
          audiPath: 'https://gdurl.com/Wehj',
          isOpend: false,
          },
        {
          name: 'اداب الطالب مع شيخه* 2',
          id: 2,
          audiPath: 'https://gdurl.com/l5mri',
        
         
        },
        {
          name: 'اداب الطالب مع شيخه* 3',
          id: 3,
          audiPath: 'https://gdurl.com/I0ho',
         
        },
        {
          name: ' اداب الزمالة',
          id: 4,
          audiPath: 'https://gdurl.com/ghAn',
          text: '4',
        },
        {
          name: 'الحذر من الأخذ من مبتدع',
          id: 5,
          audiPath: 'https://gdurl.com/SRYQ',
          text: '5',
        },
        {
          name: 'اداب طالب العلم في حياته',
          id: 6,
          audiPath: 'https://gdurl.com/C8G4',
          text: '6',
        },
        {
          name: 'اداب طالب العلم في حياته* 2',
          id: 7,
          audiPath: 'https://gdurl.com/xX3I',
          text: '7',
        },
        {
          name: 'حفظ العلم بالكتابة*',
          id: 8,
          audiPath: 'https://gdurl.com/s8e7',
          text: '8',
        },
        {name:'الجؤ إلى الله وورد العبادات',
        id:9,
        audiPath: 'https://gdurl.com/CvF0',
        text: '8',
        },
        {name:'التفقه في الدين',
        id:10,
        audiPath: 'https://gdurl.com/eYu3',
        text: '8',
        },
        {name:'الحليه والصدق والأمانه',
        id:11,
        audiPath: 'https://gdurl.com/WqFh',
        text: '8',
        },
        {name:'جُنة طالب العلم',
        id:12,
        audiPath: 'https://gdurl.com/mGUKw',
        text: '8',
        },
        {name:'كيف يكون عندك حسن سؤال',
        id:13,
        audiPath: 'https://gdurl.com/KlMJ',
        text: '8',
      },
        {name:' التحلي بالعمل',
        id:14,
        audiPath: 'https://gdurl.com/34DA',
        text: '8',
        
      },
        {name:' زكاة العلم',
        id:15,
        audiPath: 'https://gdurl.com/b1rJ',
        text: '8',
      },
        {name:'المداراة والمداهنة',
        id:16,
        audiPath: 'https://gdurl.com/DLHA',
        text: '8',
      },
      { name:'المحاذير1',
        id:17,
        audiPath: 'https://gdurl.com/5EO6',
        text: '8',
      },
        {name:'المحاذير2',
        id:18,
        audiPath: 'https://gdurl.com/duCR',
        text: '8',
      },
        {name:'المحاذير3',
        id:19,
        audiPath: 'https://gdurl.com/K09Z',
        text: '8',

      },
        {name:'اداب الطالب مع نفسه 1',
        id:20,
        audiPath: 'https://gdurl.com/Sf6cD',
        text: '8',
      },
        {name:'اداب الطالب مع نفسه 2',
        id:21,
        audiPath: 'https://gdurl.com/W026',
        text: '8',
      },
        {name:'اداب الطالب مع نفسه 3',
        id:22,
        audiPath: 'https://gdurl.com/GsrH',
        text: '8',
      },
        {name:'عقبات الطريق وعلاجها',
        id:23,
        audiPath: 'https://gdurl.com/BBZe',
       
        text: '8',
      },
      {name:' كيف تكوني امرأة صالحة',
      id:24,
      audiPath: 'https://gdurl.com/WotE',
      text: '8',
    },
        {name:'المعاني القلبيّة',
        id:24,
        audiPath: 'https://gdurl.com/4EcL',
        text: '8',
      },
        {name:' التربية بالطهارة',
        id:25,
        audiPath: 'https://gdurl.com/gRj4',
        text: '8',
      },
        {name:'التربية بالأخلاق1',
        id:26,
        audiPath: 'https://gdurl.com/icE8',
        text: '8',
      },
        {name:'التربية بالأخلاق2',
        id:27,
        audiPath: 'https://gdurl.com/apDB',
        text: '8',
      },
        {name:'التربية بالأخلاق3',
        id:28,
        audiPath: 'https://gdurl.com/OoxZ',
        text: '8',
      },
        {name:'خفض الجناح',
        id:29,
        audiPath: 'https://gdurl.com/J1Nq',
        text: '8',
      },
        {name:'القناعة والزهد',
        id:30,
        audiPath: 'https://gdurl.com/dM5Z',
        text: '8',
      },
        
          {name:'التحلي بالمروئه1',

        id:31,
        audiPath: 'https://gdurl.com/Aqxn',
        text: '8',
      },
      {name:'التحلي بالمروئه2',
        id:32,
        audiPath: 'https://gdurl.com/CuRR',
        text: '8',
      },
        {name:'الرفق والبعد عن اللغو',
        id:33,
        audiPath: 'https://gdurl.com/Kcss',
        text: '8',
      },
        {name:'كيف اتدبر بالقران والتأمل والثبات',
        id:34,
        audiPath: 'https://gdurl.com/LyzZ',
        audiPath2:'https://gdurl.com/K17u',

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
          <Text style={styles.title}>حلية طالب العلم</Text>
          <ScrollView>
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
