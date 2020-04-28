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
          name: 'عقيده اهل السنه فى شرح الاسماء ',
          id: 1,
          audiPath: 'https://gdurl.com/BI_c',
          isOpend: false,
          
          },
        {
          name: 'الدرس الثاني',
          id: 2,
          audiPath: 'https://gdurl.com/WJUB0',
        
         
        },
        {
          name: '((((  *الله*   ))))',
          id: 3,
          audiPath: 'https://gdurl.com/mRYJ',
         
        },
        {
          name: 'أسم الله .. والإله',
          id: 4,
          audiPath: 'https://gdurl.com/ogiO',
          text: '4',
        },
        {
          name: 'الرب',
          id: 5,
          audiPath: 'https://gdurl.com/I2Uf',
          text: '5',
        },
        {
          name: 'الرحمن والرحيم',
          id: 6,
          audiPath: 'https://gdurl.com/nbaq',
          text: '6',
        },
        {
          name: 'الملك و المالك والمليك',
          id: 7,
          audiPath: 'https://gdurl.com/Myid',
          audiPath2:'https://gdurl.com/U_JJ',
          text: '7',
        },
        {
          name: 'الواحد والأحد والأول والأخر والظاهر والباطن',
          id: 8,
          audiPath: 'https://gdurl.com/YDzx',
          text: '8',
        },
        {name:'الله الهادى',
        id:9,
        audiPath: 'https://gdurl.com/KShE',
        audiPath2:'https://gdurl.com/Varl',
        text: '8',
        },
        {name:'الحليم والستير',
        id:10,
        audiPath: 'https://gdurl.com/N-vu',
        audiPath2:'https://gdurl.com/QKBr',
        text: '8',
        },
        {name:'الــبـــر',
        id:11,
        audiPath: 'https://gdurl.com/TWeX',
        audiPath2:'https://gdurl.com/6jAj',
        text: '8',
        },
        {name:'الرؤوف',
        id:12,
        audiPath: 'https://gdurl.com/WENP',
        audiPath2: 'https://gdurl.com/JtZl',
        text: '8',
        },
        {name:'الولى والمولى والناصر والنصير ',
        id:13,
        audiPath: 'https://gdurl.com/M-dvr',
        audiPath2:'https://gdurl.com/OMSB',
        text: '8',
      },
        {name:'القريب والمجيب',
        id:14,
        audiPath: 'https://gdurl.com/dnRk',
        text: '8',
        
      },
        {name:'الودود',
        id:15,
        audiPath: 'https://gdurl.com/H0PE',
        text: '8',
      },

        {name:'الودود 2',
        id:16,
        audiPath: 'https://gdurl.com/sXr8',
        text: '8',
      },
       {name:'الغفور*/ *والغافر* / *والغفار* *والتواب',
        id:15,
        audiPath: 'https://gdurl.com/Z0bX',
        text: '8',
      },
      {name:'الــشـــكــور',
      id:17,
      audiPath: 'https://gdurl.com/yVnl',
      text: '8',
    },
    {name:'سؤال جاء في الحلقة',
      id:17,
      audiPath: 'https://gdurl.com/awBu',
      text: '8',
    },
    {name:'السميع والبصير',
    id:18,
    audiPath: 'https://gdurl.com/MeFy',
    text: '8',
  },
  {name:'العليم والحكيم',
  id:19,
  audiPath: 'https://gdurl.com/6xysz',
  text: '8',
},
{name:'الشهيد والرقيب',
id:20,
audiPath: 'https://gdurl.com/SVvF',
text: '8',
},
{name:'اللطيف والخبير',
id:21,
audiPath: 'https://gdurl.com/vcSY',
text: '8',
},
{name:'الحميد المجيد',
id:22,
audiPath: 'https://gdurl.com/whNt',
text: '8',
},
{name:'الشافى',
id:23,
audiPath: 'https://gdurl.com/jcq5',
audiPath2: 'https://gdurl.com/lyYG',
text: '8',
},
{name:'الــفــتــاح',
id:24,
audiPath: 'https://gdurl.com/6xaH',
text: '8',
},
{name:'الــرفيق',
id:25,
audiPath: 'https://gdurl.com/oWfy',
text: '8',
},
{name:'الطيب - و الجميل',
id:26,
audiPath: 'https://gdurl.com/keO7',
text: '8',
},
{name:'القدوس والسلام',
id:27,
audiPath: 'https://gdurl.com/GFY4',
text: '8',
},
{name:'الحق المبين',
id:28,
audiPath: 'https://gdurl.com/xy_W',
text: '8',
},
{name:'الكريم والأكرم',
id:29,
audiPath: 'https://gdurl.com/Jlio',
text: '8',
},
{name:'الحيي',
id:30,
audiPath: 'https://gdurl.com/1gYb',
text: '8',
},
{name:' الحافظ  والحفيظ',
id:31,
audiPath: 'https://gdurl.com/NbtG',
text: '8',
},
{name:'الوكيل والكفيل',
id:32,
audiPath: 'https://gdurl.com/kwaP',
text: '8',
},
{name:'القوى المتين',
id:33,
audiPath: 'https://gdurl.com/P-wP',
text: '8',
},
{name:'الجبـــار',
id:34,
audiPath: 'https://gdurl.com/LMWv',
text: '8',
},
{name:'الـديــــان',
id:35,
audiPath: 'https://gdurl.com/u8Dr',
text: '8',
},
{name:'الــــــــــرزاق',
id:36,
audiPath: 'https://gdurl.com/3ONO',
audiPath2:'https://gdurl.com/MP0v',
text: '8',
},
{name:'المُقييت',
id:37,
audiPath: 'https://gdurl.com/Cm2V',
text: '8',
},
{name:'الغني والمُغني',
id:38,
audiPath: 'https://gdurl.com/owet',
text: '8',
},
{name:'الصمد',
id:39,
audiPath: 'https://gdurl.com/eXHt',
text: '8',
},
{name:'العزيز',
id:40,
audiPath: 'https://gdurl.com/X4Kx',
text: '8',
},
{name:'نور السماوات والأرض',
id:41,
audiPath: 'https://gdurl.com/OyyN',
text: '8',
},
{name:'الخَالق_الخلّاق_البَارئ_المصوّر',
id:42,
audiPath: 'https://gdurl.com/i_y6',
text: '8',
},
{name:'ذو الجلال والإكرام',
id:43,
audiPath: 'https://gdurl.com/bl5AJ',
text: '8',
},
{name:'المؤمن المهيمن المحيط',
id:44,
audiPath: 'https://gdurl.com/81_5',
text: '8',
},
{name:'العلى الأعلى المتعالي',
id:45,
audiPath: 'https://gdurl.com/u6gZ',
text: '8',
},
{name:'القادر المقتدر القدير',
id:46,
audiPath: 'https://gdurl.com/zSAl',
text: '8',
},
{name:'الوهاب',
id:47,
audiPath: 'https://gdurl.com/JHBh',
text: '8',
},
{name:'المحسن',
id:48,
audiPath: 'https://gdurl.com/zMEn',
audiPath2:'https://gdurl.com/vvvn',
text: '8',
},
{name:'العظيم والكبير والمتكبر',
id:49,
audiPath: 'https://gdurl.com/tW1G',
text: '8',
},
{name:'الحي القيوم',
id:50,
audiPath: 'https://gdurl.com/k32M',
text: '8',
},
{name:'السيد',
id:51,
audiPath: 'https://gdurl.com/7L_e',
text: '8',
},
{name:'الوتر المعطي الجواد',
id:52,
audiPath: 'https://gdurl.com/u72K',
text: '8',
},
{name:'اسم المسعر _والحسيب _والسبوح',
id:53,
audiPath: 'https://gdurl.com/oVW2',
audiPath2:'https://gdurl.com/UvP2',
text: '8',
},
{name:'المقدم والمؤخر والحفي',
id:54,
audiPath: 'https://gdurl.com/j01N',
text: '8',
},
{name:'الحكم العدل',
id:55,
audiPath: 'https://gdurl.com/58Cp',
text: '8',
},
{name:'الحنان المنان',
id:56,
audiPath: 'https://gdurl.com/8n8k',
text: '8',
},
{name:'كيف نخرج من الأزمة',
id:57,
audiPath: 'https://gdurl.com/fayn',
audiPath2:'https://gdurl.com/HX63V',
text: '8',
},
{name:'العفو القهار',
id:58,
audiPath: 'https://gdurl.com/9uri',
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
          <Text style={styles.title}>أسماء الله الحسنى</Text>

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
