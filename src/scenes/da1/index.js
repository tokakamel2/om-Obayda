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
         path:require('_assets/images/da1/1.jpg'),
        },
        {
          name: ' كوني طالبة علم ',
          id: 1,
          audiPath: 'https://gdurl.com/WWs8',
          audiPath:'https://gdurl.com/D0T8',
         
         
         
        },
        {
          name: 'كيف تكوني داعيه ناجحه 1',
          id: 2,
          audiPath: 'https://gdurl.com/YFm2',

        },
        {
          name: 'كيف تكوني داعيه ناجحه 2',
          id: 3,
          audiPath: 'https://gdurl.com/w9zQ',

     
        },
        {
          name: 'كيف تكوني داعيه ناجحه 3',
          id: 4,
          audiPath: 'https://gdurl.com/zUhi',

     
        },
        {
          name: 'كيف تكوني داعيه ناجحه 4  ',
          id: 5,
          audiPath: 'https://gdurl.com/Hk4r',
        },
        {
          name: 'كيف تكوني داعيه ناجحه 5',
          id: 6,
          audiPath: 'https://gdurl.com/K71u',
        },
        {
          name: 'مشكلات داعية',
          id: 7,
          audiPath: 'https://gdurl.com/uae5',
          audiPath2:'https://gdurl.com/Or_w',
    
        },
       
        {
          name: 'كيف تكوني داعيه بصدق',
          id: 8,
          audiPath: 'https://gdurl.com/HDok',
    
        },
        {
          name: 'أجعلي الجنة أمامك',
          id: 9,
          audiPath: 'https://gdurl.com/xDSP',
    
        },
        {
          name: 'تذكرة في احد السلف الصالح',
          id: 10,
          audiPath: 'https://gdurl.com/Dktz',
    
        },
        {
          name: 'كيف انجو من تقصيري',
          id: 11,
          audiPath: 'https://gdurl.com/4OcP',
    
        },
        {
          name: '-أعملي بما تتعلمي',
          id: 12,
          audiPath: 'https://gdurl.com/K4bs',
    
        },
        {
          name: 'توجيهات داعية',
          id: 13,
          audiPath: 'https://gdurl.com/Kh2A',
    
        },
        {
          name: 'كوني نسيه سلفيه بأخلاق راقيه',
          id: 14,
          audiPath: 'https://gdurl.com/Xrr3',
    
        },
        {
          name: 'علاج الفتور',
          id: 15,
          audiPath: 'https://gdurl.com/q3YU',
    
        },
        {
          name: 'كوني داعية ربانية بحق',
          id: 16,
          audiPath: 'https://gdurl.com/rAgv',
    
        },
        {
          name: 'الداعية المتميزة',
          id: 17,
          audiPath: 'https://gdurl.com/zcqk',
    
        },
     
        {
          name: 'الصدق في العبادات',
          id: 18,
          audiPath: 'https://gdurl.com/sMHZ',
    
        },
        {
          name: 'كلمة عن طلب العلم والدعوة',
          id: 19,
          audiPath: 'https://gdurl.com/8fZKP',
    
        },
        {
          name: 'نصر الله لعبادة المؤمنين',
          id: 20,
          audiPath: 'https://gdurl.com/JIn8Z',
          audiPath2:'https://gdurl.com/32Cz',
    
        },

        {
          name: 'بشرى لأنصار الله ورسوله',
          id: 21,
          audiPath: 'https://gdurl.com/VPf4l',
         
         
         
        },
        {
          name: 'التفكر في الجهة والنار',
          id: 22,
          audiPath: 'https://gdurl.com/gz43',

        },
        {
          name: 'علاج عدم الثبات على الطاعة',
          id: 23,
          audiPath: 'https://gdurl.com/f65E',

     
        },
        {
          name: 'علاج الكسل والفتور',
          id: 24,
          audiPath: 'https://gdurl.com/yn_o',

     
        },
        {
          name: 'موعظة قصة المرأه العجوز',
          id: 25,
          audiPath: 'https://gdurl.com/mruQ',
        },
        {
          name: 'غدوة قلبك',
          id: 26,
          audiPath: 'https://gdurl.com/UP4h',
        },
        {
          name: 'كوني صادقه',
          id: 27,
          audiPath: 'https://gdurl.com/QLWg',
    
        },
       
        {
          name: 'الدعوة مع الأهل',
          id: 28,
          audiPath: 'https://gdurl.com/lsVZ',
    
        },
        {
          name: 'هدفك دائماً يكون عالي ',
          id: 29,
          audiPath: 'https://gdurl.com/Z7XB',
    
        },
        {
          name: 'مبدأ أنزع وضع',
          id: 30,
          audiPath: 'https://gdurl.com/X122',
    
        },
        {
          name: 'الدنيا اختبار كيف نكون من الفائزين',
          id: 31,
          audiPath: 'https://gdurl.com/0Lm4',
    
        },
        {
          name: 'مواقف وورود',
          id: 32,
          audiPath: 'https://gdurl.com/BhmT',
    
        },
        {
          name: 'علاج النفس',
          id: 33,
          audiPath: 'https://gdurl.com/DkYf',
    
        },
        {
          name: 'القران نور',
          id: 34,
          audiPath: 'https://gdurl.com/I36y',
          audiPath2:'https://gdurl.com/WTES',
    
        },
        {
          name: 'الدعوة تربية',
          id: 35,
          audiPath: 'https://gdurl.com/bYQf',
    
        },
        {
          name: 'كيف نتقدم في الطريق إلى الله',
          id: 36,
          audiPath: 'https://gdurl.com/3j0e',
    
        },
        {
          name: 'كيف أثبت',
          id: 37,
          audiPath: 'https://gdurl.com/YEHF',
    
        },
        {
          name: 'علمتني الدعوة',
          id: 38,
          audiPath: 'https://gdurl.com/VhCA',
    
        },
     
        {
          name: 'اول يوم في حياتي',
          id: 39,
          audiPath: 'https://gdurl.com/ilsq',
    
        },
        {
          name: 'مشكلة ملتزمه',
          id: 40,
          audiPath: 'https://gdurl.com/5PLq',
    
        },
        {
          name: 'لا تكوني داعية هش',
          id: 41,
          audiPath: 'https://gdurl.com/jnR1',
    
        },
        {
          name: 'ماهى أسباب القوة؟ ',
          id: 42,
          audiPath: 'https://gdurl.com/JJZH',
         
         
         
        },
        {
          name: 'علاج العجب',
          id: 43,
          audiPath: 'https://gdurl.com/Wcq4',

        },
        {
          name: 'اساس الداعية',
          id: 44,
          audiPath: 'https://gdurl.com/DGaV',

     
        },
        {
          name: 'كوني مخلصه',
          id: 45,
          audiPath: 'https://gdurl.com/FkMr',

     
        },
        {
          name: 'تساؤلات داعية ',
          id: 46,
          audiPath: 'https://gdurl.com/yLci',
        },
        {
          name: 'خطوط حمراء',
          id: 47,
          audiPath: 'https://gdurl.com/ex7J',
        },
        {
          name: 'القران أقرأ وانصت أستمع له',
          id: 48,
          audiPath: 'https://gdurl.com/upGr',
    
        },
       
        {
          name: 'حديث من احاديث شرح صحيح البخاري',
          id: 49,
          audiPath: 'https://gdurl.com/TQu3',
    
        },
        {
          name: 'رضا الله',
          id: 50,
          audiPath: 'https://gdurl.com/0agh',
    
        },
        {
          name: 'هام لكل داعية ومسلمة',
          id: 51,
          audiPath: 'https://gdurl.com/yugN',
          audiPath2: 'https://gdurl.com/U4Zu',
    
        },
       
        {
          name: 'البنات والزواج',
          id: 52,
          audiPath: 'https://gdurl.com/Qo5H',
    
        },
        {
          name: 'نواقض الإخلاص',
          id: 53,
          audiPath: 'https://gdurl.com/IAYS',
    
        },
        {
          name: 'صحوة للقلب',
          id: 54,
          audiPath: 'https://gdurl.com/aeyI',
    
        },
        {
          name: 'لأعدوا له عده',
          id: 55,
          audiPath: 'https://gdurl.com/3-4t',
    
        },
        {
          name: 'تنقية العمل والأخلاص فيه',     //WRONG
          id: 56,
          audiPath: 'https://gdurl.com/WYVm',
    
        },
        {
          name: 'خشية القلب',
          id: 57,
          audiPath: 'https://gdurl.com/zoWN',
    
        },
     
        {
          name: 'ألم السلب بعد العطاء',
          id: 58,
          audiPath: 'https://gdurl.com/Lt_T',
    
        },
        {
          name: 'كيف تكوني نعم العبد',
          id: 59,
          audiPath: 'https://gdurl.com//UfEK',
    
        },
        {
          name: 'كيف تحققي الأخوة',
          id: 60,
          audiPath: 'https://gdurl.com/1oVs',
    
        },
        {
          name: 'الحكمة في التربية',
          id: 61,
          audiPath: 'https://gdurl.com/yI4l',
         
         
         
        },
        {
          name: 'سنن ربانيه لا تتغير',
          id: 62,
          audiPath: 'https://gdurl.com/eX8G',

        },
        {
          name: 'علاج الضنك والضيق والمس والسحر ',
          id: 63,
          audiPath: 'https://gdurl.com/HEPE',

     
        },
        {
          name: 'كوني ذات همة',
          id: 64,
          audiPath: 'https://gdurl.com/tgdd',

     
        },
        {
          name: 'جلد الكافر وعجز المؤمن',
          id: 65,
          audiPath: 'https://gdurl.com/Mvhh',
        },
        {
          name: 'لو كان يفعلون مايوعظون به',
          id: 66,
          audiPath: 'https://gdurl.com/9zqt',
        },
        {
          name: 'أستعداد الداعية لرمضان',
          id: 67,
          audiPath: 'https://gdurl.com/a24K',
    
        },
       
        {
          name: 'كوني رسالة من ربك إلى عبادة',
          id: 68,
          audiPath: 'https://gdurl.com/qFfy',
    
        },
        {
          name: 'كلمة للصالحين',
          id: 69,
          audiPath: 'https://gdurl.com/kzP7',
    
        },
        {
          name: 'كيف اعبد الله على حق',
          id: 70,
          audiPath: 'https://gdurl.com/ekZH',
    
        },
        {
          name: 'وقفة مع الأختبارات الربانيه',
          id: 71,
          audiPath: 'https://gdurl.com/6RHE',
    
        },
        {
          name: 'أحذري الغرور ياطالبة العلم',
          id: 72,
          audiPath: 'https://gdurl.com/oV7O',
    
        },
        {
          name: 'مقصرة في حفظ الأدله',
          id: 73,
          audiPath: 'https://gdurl.com/9eBb',
    
        },
        {
          name: 'بنت تتعصب عندما ترى الخطأ',
          id: 74,
          audiPath: 'https://gdurl.com/ITzL',
    
        },
        {
          name: 'عواقب التشتت 1',
          id: 75,
          audiPath: 'https://gdurl.com/mrDo',
    
        },
        {
          name: 'عواقب التشتت 2',
          id: 76,
          audiPath: 'https://gdurl.com/JG2X',
    
        },
        {
          name: 'بنت ينفر منها الناس بسبب اسلوبها الدعوي',
          id: 77,
          audiPath: 'https://gdurl.com/rQ6o',
    
        },
     
        {
          name: 'مشكلة والرد عليها',
          id: 78,
          audiPath: 'https://gdurl.com/O_8x',
    
        },
        {
          name: 'شيء خطير يقع فيه أكثر الداعيات',
          id: 79,
          audiPath: 'https://gdurl.com/BUI8',
    
        },
        {
          name: 'مواقف تربويه',
          id: 80,
          audiPath: 'https://gdurl.com/nrQF',
    
        },
        {
          name: 'اللي بتعلمة ببعته ',
          id: 81,
          audiPath: 'https://gdurl.com/r5FD',
    
        },
        {
          name: 'أفيقي أيتها الداعيه',
          id: 82,
          audiPath: 'https://gdurl.com/QarM',
    
        },
        {
          name: 'كيف أرزق التوفيق في الرد على أسئلة الناس',
          id: 84,
          audiPath: 'https://gdurl.com/UA0G',
    
        },
       
        {
          name: 'كلمة المعلمة في حفل تكريم الأكاديميات',
          id: 83,
          audiPath: 'https://gdurl.com/VKC9',
    
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
          <Text style={styles.title}>الداعيات إلى الله</Text>
          <ScrollView>
          <FlatList
            data={this.state.FlatListItems}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={styles.flatview}>
            
              <Text style={styles.name}>{item.name}</Text>
           
           
           
             {item.audiPath && <PlayerScreen filepath={item.audiPath}/> }
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
