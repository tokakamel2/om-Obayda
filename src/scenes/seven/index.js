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
          name: 'كيف أربي نفسي من جديد',
          id: 1,
          audiPath: 'https://gdurl.com/LnVH',
          isOpend: false,
          text:
            'واليوم مع الدرس الاول من الفقة 📃👆🏻نتكلم  فية عن ادب الخلاف !?ولماذا يختلف العلماء ? وماذا نفعل لو راينا حكم فية اكثر من راى  !!وإلــيـــكِ أسـئلــة الـدرس📃👇🏻1-🔅 لماذا يوجد بعض الاختلافات بين اهل العلم؟  2-🔅 ماهو ادب الخلاف ؟3- 🔅ماهى اقسام الاختلاف المعتبر وغير المعتبر  مع بعض الامثله ؟4🔅- مالذى استفدتيه من هذا الدرس ؟حلى الاسئلة مع نفسك ليثبت العلم لديكى👍🏻 وتختبرى نفسك اسمعي  وانشرى 👆🏻👍  🌹🎀🌹 #الدرس_الاول_فقه',
          },
        {
          name: 'الادب مع الله',
          id: 2,
          audiPath: 'https://gdurl.com/av12',
          text: 'وهذا هو الدرس الثانى⏫ من دروس الفقه ? وهو ثمره علم الفقه ! وماهو الفقة ? وكيف اصل للفهم فى دينى وامور عده مهم تهمك 👍🏻 اسمعى وانشرى لكل النساء🌸🌸🌸 #الدرس_الثاني_فقه',
        
         
        },
        {
          name: 'تابع الادب مع الله ورسوله ',
          id: 3,
          audiPath: 'https://gdurl.com/Vuk9',
          audiPath2: 'https://gdurl.com/mT9r',

          text: 'اسئلة ✒️ لدرس الثالث من الفقة لباب فقة طهارة المياة💦💦 مسائل ✒ 1-*- امرأه اخذت الماء الذى شربت منه الهره وتوضأت منه ماالحكم؟2-*- امرأه بال عليها طفل ماالحكم مع الدليل؟ 3-*- هل سؤر الكافر نجس ؟  صــ☑️ـــح ام خــطـ✖️ـــأ1-وقع صابون فى الماء فغيرت شكلة يصح للوضؤ لأن الصابون طاهر (      ) 2- استعملت ماء فأخذت بعدى هذا الماء الفاضل بقية استعمالى وتوضئتى به لانه يجوز الماء المستعمل (     ) 3- حصان شربت من الماء فذهبت وغيرت الماء وقلت انه لايجوز  استعماله    (     )          4- غيرت كل ملابسها وتوضأت لأن طفل عمرة شهر بال عليها هل فعلها صحيح (   )اختبرى نفسك بعد سماع الدرس😊 #الدرس_الثالث_فقه',
         
        },
        {
          name: 'تابع الادب مع الله ورسوله',
          id: 4,
          audiPath: 'https://gdurl.com/Zh82',
          audiPath2: 'https://gdurl.com/LuwD',
          text: '4',
        },
        {
          name: 'الادب مع العلماء ومع الملائكة',
          id: 5,
          audiPath: 'https://gdurl.com/BH6X',
          text: '5',
        },
        {
          name: 'الادب مع الناس ومع الضيف ومع الابناء',
          id: 6,
          audiPath: 'https://gdurl.com/4xyW',
          text: '6',
        },
        {
          name: 'كيف اكون من عباد الرحمن حقا',
          id: 7,
          audiPath: 'https://gdurl.com/7wWV',
          text: '7',
        },
        {
          name: 'الادب مع الصحابة ومع الوقت',
          id: 8,
          audiPath: 'https://gdurl.com/SMtXR',
          audiPath2:'https://gdurl.com/YUBw',
          text: '8',
        },
        {name:'الادب مع النفس',
        id:9,
        audiPath: 'https://gdurl.com/uCyc',
        text: '8',
        },
        {name:'خلق الحياء',
        id:10,
        audiPath: 'https://gdurl.com/QIES',
        audiPath2: 'https://gdurl.com/1H49',

        text: '8',
        },
        {name:'كيف اكون ذات خلق مع لساني',
        id:11,
        audiPath: 'https://gdurl.com/ZiFq',
        text: '8',
        },
        {name:'كيف أعالج الاسراف',
        id:12,
        audiPath: 'https://gdurl.com/u_Ax',
        audiPath2: 'https://gdurl.com/2rxY',

        text: '8',
        },
        {name:'كيف أعالج كفران العشير',
        id:13,
        audiPath: 'https://gdurl.com/yNFY',
        text: '8',
      },
        {name:'الوفاء',
        id:14,
        audiPath: 'https://gdurl.com/oEh3',
        audiPath2: 'https://gdurl.com/FX1Y',
        text: '8',
        
      },
        {name:'خلق الابتسامة واللين',
        id:15,
        audiPath: 'https://gdurl.com/dWBO',
        text: '8',
      },
        {name:'الكلمة الطيبة',
        id:16,
        audiPath: 'https://gdurl.com/YK95',
        text: '8',
      },
      { name:'التوبة والحياء من الله',
        id:17,
        audiPath: 'https://gdurl.com/MxAc',
        text: '8',
      },
        {name:'بداية شرح اخر ١٠ ايات من سورة الفرقان',
        id:18,
        audiPath: 'https://gdurl.com/t6xr',
        text: '8',
      },
        {name:'من هم عباد الرحمن؟',
        id:19,
        audiPath: 'https://gdurl.com/o_bF',
        text: '8',

      },
        {name:'التواضع',
        id:20,
        audiPath: 'https://gdurl.com/XQjl',
        text: '8',
      },
        {name:'تابع التواضع',
        id:21,
        audiPath: 'https://gdurl.com/DC9p',
        text: '8',
      },
        {name:'الكبر',
        id:22,
        audiPath: 'https://gdurl.com/ycT8',
        audiPath2: 'https://gdurl.com/Q6Gg',
        text: '8',
      },
        {name:'صور من حياة النبي واصحابه في التواضع',
        id:23,
        audiPath: 'https://gdurl.com//nZ8m',
        audiPath2: 'https://gdurl.com/C3Hm',
        text: '8',
      },
        {name:' قيام الليل',
        id:24,
        audiPath: 'https://gdurl.com/vuNJ',
        text: '8',
      },
        {name:'تابع قيام الليل',
        id:25,
        audiPath: 'https://gdurl.com/kYAd',
        text: '8',
      },
        {name:'تابع قيام الليل',
        id:26,
        audiPath: 'https://gdurl.com/qW2n',
        text: '8',
      },
        {name:'نختم قيام الليل',
        id:27,
        audiPath: 'https://gdurl.com/czZl',
        text: '8',
      },
        {name:'الخشية والتذلل لله',
        id:28,
        audiPath: 'https://gdurl.com/CZ4X',
        text: '8',
      },
        {name:'تابع صفات عباد الرحمن',
        id:29,
        audiPath: 'https://gdurl.com/dbLy',
        text: '8',
      },
        {name:'نختم صفات عباد الرحمن',
        id:30,
        audiPath: 'https://gdurl.com/Z0eX',
        text: '8',
      },
        {name:' الغفلة',
        id:31,
        audiPath: 'https://gdurl.com/FSFV',
        text: '8',
      },
        {name:'خلق المواساة ',
        id:32,
        audiPath: 'https://gdurl.com/shlo',
        text: '8',
      },
        {name:'تابع خلق المواساة',
        id:33,
        audiPath: 'https://gdurl.com/gUVK',
        text: '8',
      },
        {name:'نختم خلق المواساة',
        id:34,
        audiPath: 'https://gdurl.com/OS6v',
        text: '8',
      },
        {name:'الصدقات المفقودة',
        id:35,
        audiPath: 'https://gdurl.com/Zh7c',
        text: '8',
      },
        {name:'خلق المروؤة',
        id:36,
        audiPath: 'https://gdurl.com/QHVy',
        text: '8',
      },
        {name:'الادب ',
        id:37,
        audiPath: 'https://gdurl.com/gq7O',
        text: '8',
      },
        {name:'كتم الغيظ والعفو والصفح ',
        id:38,
        audiPath: 'https://gdurl.com/tc4I',
        text: '8',
      },
      {name:'حفظ الاسرار',
      id:31,
      audiPath: 'https://gdurl.com/Kw7M',
      text: '8',
    },
      {name:'خلق الامانة',
      id:32,
      audiPath: 'https://gdurl.com/YVPS',
      text: '8',
    },
      {name:'خلق الرحمة',
      id:33,
      audiPath: 'https://gdurl.com/BFZl',
      text: '8',
    },
      {name:'خلق الإيثار',
      id:34,
      audiPath: 'https://gdurl.com/PNw8',
      text: '8',
    },
      {name:'حسن الظن',
      id:35,
      audiPath: 'https://gdurl.com/Gmqz',
      text: '8',
    },
      {name:'خلق العدل',
      id:36,
      audiPath: 'https://gdurl.com/9-Xz',
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
          <Text style={styles.title}>سلسلة أخلاق عباد الرحمن</Text>
          <ScrollView>
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
