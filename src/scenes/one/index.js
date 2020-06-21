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
    this.state =
     { myResourceContent: 'not loaded yet',
      FlatListItems: [
        { name:'',
        path: require('_assets/images/1/0.jpeg')}, 
        
        {
          name: 'لماذا يختلف العلماء ?',
          id: 1,
          audiPath: 'https://gdurl.com/3rMO',
         
          isOpend: false,
          },
        {
          name: 'ماهو الفقة ?',
          id: 2,
          audiPath: 'https://gdurl.com/vLMz',
          text: 'وهذا هو الدرس الثانى⏫ من دروس الفقه ? وهو ثمره علم الفقه ! وماهو الفقة ? وكيف اصل للفهم فى دينى وامور عده مهم تهمك 👍🏻 اسمعى وانشرى لكل النساء🌸🌸🌸 #الدرس_الثاني_فقه',
        
         
        },
        { name:'',
        path: require('_assets/images/1/1.jpg')}, 
        {
          name: 'باب فقة طهارة المياة',
          id: 3,
          audiPath: 'https://gdurl.com/qOS7',
         
          text: 'اسئلة ✒️ لدرس الثالث من الفقة لباب فقة طهارة المياة💦💦 مسائل ✒ 1-*- امرأه اخذت الماء الذى شربت منه الهره وتوضأت منه ماالحكم؟2-*- امرأه بال عليها طفل ماالحكم مع الدليل؟ 3-*- هل سؤر الكافر نجس ؟  صــ☑️ـــح ام خــطـ✖️ـــأ1-وقع صابون فى الماء فغيرت شكلة يصح للوضؤ لأن الصابون طاهر (      ) 2- استعملت ماء فأخذت بعدى هذا الماء الفاضل بقية استعمالى وتوضئتى به لانه يجوز الماء المستعمل (     ) 3- حصان شربت من الماء فذهبت وغيرت الماء وقلت انه لايجوز  استعماله    (     )          4- غيرت كل ملابسها وتوضأت لأن طفل عمرة شهر بال عليها هل فعلها صحيح (   )اختبرى نفسك بعد سماع الدرس😊 #الدرس_الثالث_فقه',
         
        },
        {
          name: 'باب الآنية',
          id: 4,
          audiPath: 'https://gdurl.com/F9B2',
          text: '4',
        },
        {
          name: 'قضاء الحاجه وادابها',
          id: 5,
          audiPath: 'https://gdurl.com/40iF',
          text: '5',
        },
        { name:'',
        path: require('_assets/images/1/6.jpg')}, 
        {
          name: 'الباب الرابع باب ( السواك وسنن الفطره )',
          id: 6,
          audiPath: 'https://gdurl.com/2lAh',
          text: '6',
          
        },
        {
          name: 'باب الوضوء',
          id: 7,
          audiPath: 'https://gdurl.com/6sxm',
          text: '7',
        },
        {name:'الوضوء الصحيح بالفيديو',
        vid:'https://youtu.be/K3WcrVH82yI',
         },
        
        {
          name: 'باب المسح على الخفين',
          id: 8,
          audiPath: 'https://gdurl.com/fjR6',
          text: '8',
        },
        {name:'باب الغسل',
        id:9,
        audiPath: 'https://gdurl.com/wjdl',
        audiPath2:'https://gdurl.com/E7zu',
        text: '8',
        },
        {name:'باب التيمم',
        id:10,
        audiPath: 'https://gdurl.com/rVPJ',
        text: '8',
        },
        {name:'كيفيه تطهير النجاسات',
        id:11,
        audiPath: 'https://gdurl.com/2MmU',
        text: '8',
        },
        {name:'مسائل الحيض والاستحاضه والنفاس',
        id:12,
        audiPath: 'https://gdurl.com/eqob',
        text: '8',
        path: require('_assets/images/1/12.jpeg')
        },
        { name:'',
        path: require('_assets/images/1/13.jpeg')}, 
        {name:'الخشوع ف الصلاه',
        id:13,
        audiPath: 'https://gdurl.com/Pbxw',
        text: '8',
      
      },
        {name:'باب الأذان',
        id:14,
        audiPath: 'https://gdurl.com/uilB',
        text: '8',
        
      },
        {name:'مواقيت الصلاه ',
        id:15,
        audiPath: 'https://gdurl.com/hkF1',
        text: '8',
      },
        {name:'شروط صحة الصلاة',
        id:16,
        audiPath: 'https://gdurl.com/havc',
        text: '8',
      },
      {name:'الصلاة الصحيحة بالفيديو',
      vid:'https://youtu.be/1Xx3J7Lw1yo',
       },
       {name:'صفة صلاة الرسول بالفيديو',
      vid:'https://youtu.be/OE7OBxvLp14',
       },
       {name:'أخطاء الصلاة بالفيديو',
       vid:'https://youtu.be/iDZC8zsh_f04',
        },
        {name:'أخطاء الصلاة',
        vid:'https://youtu.be/5RlXvvJTT5g',
         },
      { name:'اركان الصلاة ووجباتها وسننها',
        id:17,
        audiPath: 'https://gdurl.com/uQ8lD',
        text: '8',
      },
        {name:'مبطلات الصلاة',
        id:18,
        audiPath: 'https://gdurl.com/7tNJ',
        text: '8',
      },
        {name:'باب صلاة التطوع ',
        id:19,
        audiPath: 'https://gdurl.com/onr1',
        text: '8',

      },
        {name:'باقى درس صلاة التطوع',
        id:20,
        audiPath: 'https://gdurl.com/n2CG',
        text: '8',
      },
        {name:'سجود السهو',
        id:21,
        audiPath: 'https://gdurl.com/bdGQ',
        text: '8',
      },
        {name:'سجدة التلاوه وسجدة الشكر وعن صلاة الجماعه ',
        id:22,
        audiPath: 'https://gdurl.com/xCpw',
        text: '8',
      },
        {name:' الامامه ف الصلاه ',
        id:23,
        audiPath: 'https://gdurl.com/jv43',
        text: '8',
      },
        {name:'باب صلاة الاعذار',
        id:24,
        audiPath: 'https://gdurl.com/Q6Ci',
        text: '8',
      },
        {name:'احكام صلاة الجمعه',
        id:25,
        audiPath: 'https://gdurl.com/M7c1',
        text: '8',
      },
        {name:'(( *صلاة الخوف وصلاة الكسوف وصلاه الإستسقاء  وصلاة العيدين* )) ',
        id:26,
        audiPath: 'https://gdurl.com/Ic9W',
        text: '8',
      },
        {name:'باب الجنائز',
        id:27,
        audiPath: 'https://gdurl.com/no1bw',
        text: '8',
      },
        {name:'تكملة باب الجنائز',
        id:28,
        audiPath: 'https://gdurl.com/5074',
        text: '8',
      },
      { name:'',
        path: require('_assets/images/1/29.jpeg'),},


        {name:'اجر الصوم وفوائد الصيام وصيام المتقين',
        id:29,
        audiPath: 'https://gdurl.com/53Cj',
        text: '8',
      },
        {name:'أركان الصوم ونية الصوم ومعنى إيماناً واحتساباً',
        id:30,
        audiPath: 'https://gdurl.com/h7GV',
        text: '8',
      },
        {name:'مسائل في فقه الصيام',
        id:31,
        audiPath: 'https://gdurl.com/s7cy',
        text: '8',
      },
        {name:'مسائل في فقه الصيام2',
        id:32,
        audiPath: 'https://gdurl.com/sLid',
        text: '8',
      },
        {name:'مستحبات الصيام -ومكروهاته - والإعتكاف',
        id:33,
        audiPath: 'https://gdurl.com/JBeR',
        audiPath2:'https://gdurl.com/HrujO',
        text: '8',
      },
      { name:'',
      path: require('_assets/images/1/34.jpeg')}, 
        {name:'فقه الزكاة',
        id:34,
        audiPath: 'https://gdurl.com/kPqv',
        text: '8',
       
      },
        {name:'شرح الزكاة',
        id:35,
        audiPath: 'https://gdurl.com/iILe',
        text: '8',
      },
        {name:'زكاة الأنعام وزكاة الفطر',
        id:36,
        audiPath: 'https://gdurl.com/nptu',
        text: '8',
      },

      { name:'',
      path: require('_assets/images/1/39.jpeg')}, 
      
      {name:'صفة مناسك العمرة بالفيديو مهم جدا!',
      vid:'https://youtu.be/HV42ibxPbNA',
       },
     
        {name:'صفة العمرة',
        id:37,
        audiPath: 'https://gdurl.com/jOge',
        audiPath2: 'https://gdurl.com/70Hg',
        text: '8',
        path: require('_assets/images/1/37.jpeg')
      },
          
      {name:'دليل الحج بالفيديو مهم جداً',
      vid:'https://youtu.be/SNyLksy8DNE',
       },
    
        {name:'صفة الحج',
        id:38,
        audiPath: 'https://gdurl.com/dCDL',
        audiPath2:'https://gdurl.com/xQcS',
        audiPath3:'https://gdurl.com/R5K8',
        text: '8',
        path: require('_assets/images/1/38.jpeg')
      },
      {
        name:'أسئلة متعلقة بالسلسلة.. لا تفتحيها إلا بعد الانتهاء من السلسلة',
        url:'https://forms.gle/HNnnZzsTYGSKGAHv9'
      },
      {name:'',
      id:39

      },
      {name:'',
      id:40

      }
      ],
    };
  }
  onSelect(item) {
    // this.props.navigation.navigate('Methal');
    Alert.alert('بتشتغل لوحدك ليه');
  }

  // componentDidMount () {
  //   loadResource(myResource).then((content) => {
  //     this.setState({ myResourceContent: content })
  //   })
  // }



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
          <Text style={styles.title}>الفقه</Text>
          <SafeAreaView>
         
          <TouchableOpacity  onPress={() =>{ Linking.openURL('https://drive.google.com/file/d/1qxXEvS8iKpA82lohbg6-Fl0vEE6smN8M/view?usp=sharing')}}>
           <Text style={{  borderRadius: 25, margin:15,backgroundColor:'#371921' ,fontFamily: 'ArbFONTS-Monadi',  fontSize: 18, color: 'white',paddingBottom: 0, textAlign: 'center'}}>لقراءة أو تحميل كتاب الفقه الميسر في ضوء الكتاب والسنة</Text>
           </TouchableOpacity>
          <FlatList
            data={this.state.FlatListItems}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={styles.flatview}>
            
              <Text style={styles.name}>{item.name}</Text>
           {item.vid &&
            <TouchableOpacity onPress={() =>{ Linking.openURL(item.vid)}}>
            <Text>لمشاهدة الفيديو اضغط الصورة</Text>  
            <Image source={require('_assets/images/1/youtube.png')} style={styles.Image}/>
            </TouchableOpacity>
            }
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
    height:200,
    width:300,
    marginBottom:25,
    borderRadius: 5,

  }
});
export default home;
