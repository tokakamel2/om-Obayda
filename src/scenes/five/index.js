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
          name: 'الدرس الأول',
          id: 1,
          audiPath: 'https://gdurl.com/5kkN',
          path: require('_assets/images/1/1.jpg'),
          isOpend: false,
          text:
            'واليوم مع الدرس الاول من الفقة 📃👆🏻نتكلم  فية عن ادب الخلاف !?ولماذا يختلف العلماء ? وماذا نفعل لو راينا حكم فية اكثر من راى  !!وإلــيـــكِ أسـئلــة الـدرس📃👇🏻1-🔅 لماذا يوجد بعض الاختلافات بين اهل العلم؟  2-🔅 ماهو ادب الخلاف ؟3- 🔅ماهى اقسام الاختلاف المعتبر وغير المعتبر  مع بعض الامثله ؟4🔅- مالذى استفدتيه من هذا الدرس ؟حلى الاسئلة مع نفسك ليثبت العلم لديكى👍🏻 وتختبرى نفسك اسمعي  وانشرى 👆🏻👍  🌹🎀🌹 #الدرس_الاول_فقه',
          },
        {
          name: 'الدرس الثاني',
          id: 2,
          audiPath: 'https://gdurl.com/PGNU',
          text: 'وهذا هو الدرس الثانى⏫ من دروس الفقه ? وهو ثمره علم الفقه ! وماهو الفقة ? وكيف اصل للفهم فى دينى وامور عده مهم تهمك 👍🏻 اسمعى وانشرى لكل النساء🌸🌸🌸 #الدرس_الثاني_فقه',
        
         
        },
        {
          name: 'الدرس الثالث',
          id: 3,
          audiPath: 'https://gdurl.com/ZBo9',
          text: 'اسئلة ✒️ لدرس الثالث من الفقة لباب فقة طهارة المياة💦💦 مسائل ✒ 1-*- امرأه اخذت الماء الذى شربت منه الهره وتوضأت منه ماالحكم؟2-*- امرأه بال عليها طفل ماالحكم مع الدليل؟ 3-*- هل سؤر الكافر نجس ؟  صــ☑️ـــح ام خــطـ✖️ـــأ1-وقع صابون فى الماء فغيرت شكلة يصح للوضؤ لأن الصابون طاهر (      ) 2- استعملت ماء فأخذت بعدى هذا الماء الفاضل بقية استعمالى وتوضئتى به لانه يجوز الماء المستعمل (     ) 3- حصان شربت من الماء فذهبت وغيرت الماء وقلت انه لايجوز  استعماله    (     )          4- غيرت كل ملابسها وتوضأت لأن طفل عمرة شهر بال عليها هل فعلها صحيح (   )اختبرى نفسك بعد سماع الدرس😊 #الدرس_الثالث_فقه',
         
        },
        {
          name: 'الدرس الرابع',
          id: 4,
          audiPath: 'https://gdurl.com/gvD4',
          text: '4',
        },
        {
          name: 'الدرس الخامس',
          id: 5,
          audiPath: 'https://gdurl.com',
          text: '5',
        },
        {
          name: 'الدرس السادس',
          id: 6,
          audiPath: 'https://gdurl.com',
          text: '6',
          path: require('_assets/images/1/6.jpg'),
        },
        {
          name: 'الدرس السابع',
          id: 7,
          audiPath: 'https://gdurl.com',
          text: '7',
        },
        {
          name: 'الدرس الثامن',
          id: 8,
          audiPath: 'https://gdurl.com',
          text: '8',
        },
        {name:'الدرس التاسع',
        id:9,
        audiPath: 'https://gdurl.com',
        text: '8',
        },
        {name:'الدرس العاشر',
        id:10,
        audiPath: 'https://gdurl.com',
        text: '8',
        },
        {name:'الدرس الحادي عشر',
        id:11,
        audiPath: 'https://gdurl.com',
        text: '8',
        },
        {name:'الدرس الثاني عشر',
        id:12,
        audiPath: 'https://gdurl.com',
        text: '8',
        },
        {name:'الدرس الثالث عشر',
        id:13,
        audiPath: 'https://gdurl.com',
        text: '8',
        path: require('_assets/images/1/13.jpg'),
      },
        {name:'الدرس الرابع عشر',
        id:14,
        audiPath: 'https://gdurl.com',
        text: '8',
        
      },
        {name:'الدرس الخامس عشر',
        id:15,
        audiPath: 'https://gdurl.com',
        text: '8',
      },
        {name:'الدرس السادس عشر',
        id:16,
        audiPath: 'https://gdurl.com',
        text: '8',
      },
      { name:'الدرس السابع عشر',
        id:17,
        audiPath: 'https://gdurl.com',
        text: '8',
      },
        {name:'الدرس الثامن عشر',
        id:18,
        audiPath: 'https://gdurl.com',
        text: '8',
      },
        {name:'الدرس التاسع عشر',
        id:19,
        audiPath: 'https://gdurl.com',
        text: '8',

      },
        {name:'الدرس العشرون',
        id:20,
        audiPath: 'https://gdurl.com',
        text: '8',
      },
        {name:'الدرس الواحد والعشرون',
        id:21,
        audiPath: 'https://gdurl.com',
        text: '8',
      },
        {name:'الدرس الثاني والعشرون',
        id:22,
        audiPath: 'https://gdurl.com',
        text: '8',
      },
        {name:'الدرس الثالث والعشرون',
        id:23,
        audiPath: 'https://gdurl.com',
        text: '8',
      },
        {name:'الدرس الرابع والعشرون',
        id:24,
        audiPath: 'https://gdurl.com',
        text: '8',
      },
        {name:'الدرس الخامس والعشرون',
        id:25,
        audiPath: 'https://gdurl.com',
        text: '8',
      },
        {name:'الدرس السادس والعشرون',
        id:26,
        audiPath: 'https://gdurl.com',
        text: '8',
      },
        {name:'الدرس السابع والعشرون',
        id:27,
        audiPath: 'https://gdurl.com',
        text: '8',
      },
        {name:'الدرس الثامن والعشرون',
        id:28,
        audiPath: 'https://gdurl.com',
        text: '8',
      },
        {name:'الدرس التاسع والعشرون',
        id:29,
        audiPath: 'https://gdurl.com',
        text: '8',
        path: require('_assets/images/1/29.jpg'),
      },
        {name:'الدرس الثلاثون',
        id:30,
        audiPath: 'https://gdurl.com',
        text: '8',
      },
        {name:'الدرس الواحد والثلاثون',
        id:31,
        audiPath: 'https://gdurl.com',
        text: '8',
      },
        {name:'الدرس الثاني والثلاثون',
        id:32,
        audiPath: 'https://gdurl.com',
        text: '8',
      },
        {name:'الدرس الثالث والثلاثون',
        id:33,
        audiPath: 'https://gdurl.com',
        text: '8',
      },
        {name:'الدرس الرابع والثلاثون',
        id:34,
        audiPath: 'https://gdurl.com',
        text: '8',
        path: require('_assets/images/1/34.jpg'),
      },
        {name:'الدرس الخامس والثلاثون',
        id:35,
        audiPath: 'https://gdurl.com',
        text: '8',
      },
        {name:'الدرس السادس والثلاثون',
        id:36,
        audiPath: 'https://gdurl.com',
        text: '8',
      },
        {name:'الدرس السابع والثلاثون',
        id:37,
        audiPath: 'https://gdurl.com',
        audiPath2: 'https://gdurl.com',
        text: '8',
      },
        {name:'الدرس الثامن والثلاثون',
        id:38,
        audiPath: 'https://gdurl.com',
        text: '8',
      },
      {name:'الدرس التاسع والثلاثون',
      id:31,
      audiPath: 'https://gdurl.com',
      text: '8',
    },
      {name:'الدرس الأربعون',
      id:32,
      audiPath: 'https://gdurl.com',
      text: '8',
    },
      {name:'الدرس الواحد الأربعون',
      id:33,
      audiPath: 'https://gdurl.com',
      text: '8',
    },
      {name:'الدرس الثاني و الأربعون',
      id:34,
      audiPath: 'https://gdurl.com',
      text: '8',
      path: require('_assets/images/1/34.jpg'),
    },
      {name:'الدرس الثالث الأربعون',
      id:35,
      audiPath: 'https://gdurl.com',
      text: '8',
    },
      {name:'الدرس الرابع الأربعون',
      id:36,
      audiPath: 'https://gdurl.com',
      text: '8',
    },
      {name:'الدرس الخامس الأربعون',
      id:37,
      audiPath: 'https://gdurl.com',
      audiPath2: 'https://gdurl.com',
      text: '8',
    },
      {name:'الدرس السادس والأربعون',
      id:38,
      audiPath: 'https://gdurl.com',
      text: '8',
    },
    {name:'الدرس السابع والأربعون',
    id:38,
    audiPath: 'https://gdurl.com',
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
          <Text style={styles.title}>تصحيح التلاوة</Text>

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
