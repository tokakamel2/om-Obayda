import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Alert,
  Linking,
  TouchableOpacity,
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
          name: 'عقيدة الفرقة الناجية',
          id: 1,
          audiPath: 'https://gdurl.com/5kkN',
          isOpend: false,
          path: require('_assets/images/2/0.jpeg')
          },
        {
          name: 'من هم السلف',
          id: 2,
          audiPath: 'https://gdurl.com/PGNU',
        
         
        },
        {
          name: 'ماهى العباده؟',
          id: 3,
          audiPath: 'https://gdurl.com/ZBo9',
         
        },
        {
          name: 'ماهو الدين الوحيد الذى انزل الله من السماء على جميع الانبياء',
          id: 4,
          audiPath: 'https://gdurl.com/gvD4',
          text: '4',
        },
        {
          name: 'شروط لا اله الا الله',
          id: 5,
          audiPath: 'https://gdurl.com/HTJr',
          text: '5',
          path: require('_assets/images/2/2.jpeg')
        },
        {
          name: 'توحيد الربوبيه',
          id: 6,
          audiPath: 'https://gdurl.com/MZ37',
          text: '6',
        },
        {
          name: 'تكملة توحيد الربوبيه ',
          id: 7,
          audiPath: 'https://gdurl.com/80Y7',
          text: '7',
        },
        {
          name: 'توحيد الألوهيه ',
          id: 8,
          audiPath: 'https://gdurl.com/A75u',
          text: '8',
        },
        {name:'بعض الأحكام',
        id:9,
        audiPath: 'https://gdurl.com/tROtu',
        text: '8',
        path: require('_assets/images/2/8.jpg')
        },
        {name:'الرقية والتمائم وغيرها ',
        id:10,
        audiPath: 'https://gdurl.com/49AP',
        text: '8',
        },
        {name:'الرقية والتمائم وغيرها2',
        id:11,
        audiPath: 'https://gdurl.com/lAEiF',
        text: '8',
        },
        {name:'زياره القبور',
        id:12,
        audiPath: 'https://gdurl.com/IjvG',
        text: '8',
        },
        {name:'باب التوسل والغلو ',
        id:13,
        audiPath: 'https://gdurl.com/a6uD',
        text: '8',
      },
        {name:'باب الشرك وانواعه ',
        id:14,
        audiPath: 'https://gdurl.com/1ikG',
        text: '8',
        path: require('_assets/images/2/1.jpeg')
      },
        {name:' باب الكفر',
        id:15,
        audiPath: 'https://gdurl.com/yGX1',
        text: '8',
      },
        {name:'باب حرمه ادعاء الغيب والسحر والتنجيم',
        id:16,
        audiPath: 'https://gdurl.com/q-nT',
        text: '8',
      },
      { name:' باب شرح  توحيد اسماء الله الحسنى',
        id:17,
        audiPath: 'https://gdurl.com/tlSB',
        text: '8',
      },
        {name:'تكملة باب شرح  قواعد الأسماء والصفات',
        id:18,
        audiPath: 'https://gdurl.com/Qqyi',
        text: '8',
      },
        {name:'الايمان بالملائكه',
        id:19,
        audiPath: 'https://gdurl.com/tL_P',
        text: '8',
        path: require('_assets/images/2/3.jpeg')
      },
        {name:'تكملة الايمان بالملائكه',
        id:20,
        audiPath: 'https://gdurl.com/U82E',
        text: '8',
      },
        {name:'نختم الايمان بالملائكه',
        id:21,
        audiPath: 'https://gdurl.com/e9SB',
        text: '8',
      },
        {name:'باب الايمان بالكتب',
        id:22,
        audiPath: 'https://gdurl.com/z0lZ',
        text: '8',
        path: require('_assets/images/2/4.jpeg')
      },
        {name:'باب الايمان بالكتب 2',
        id:23,
        audiPath: 'https://gdurl.com/9yHN',
        text: '8',
      },
        {name:'نختمباب الايمان بالكتب',
        id:24,
        audiPath: 'https://gdurl.com/mcGD',
        text: '8',
      },
        {name:'الإيمان بالرسل',
        id:25,
        audiPath: 'https://gdurl.com/7kG5',
        text: '8',
      },
        {name:'تكملة الإيمان بالرسل',
        id:26,
        audiPath: 'https://gdurl.com/eiKu',
        text: '8',
        path: require('_assets/images/2/5.jpeg')
      },
        {name:'حقوق النبي',
        id:27,
        audiPath: 'https://gdurl.com/8pwg',
        text: '8',
      },
        {name:'تكملة حقوق النبي',
        id:28,
        audiPath: 'https://gdurl.com/aDQS',
        text: '8',
      },
        {name:'باب الإسراء والمعراج',
        id:29,
        audiPath: 'https://gdurl.com/vllf',
        text: '8',
      },
        {name:'الفرق بين المعجزة والكرامه ',
        id:30,
        audiPath: 'https://gdurl.com/Ggp8',
        text: '8',
      },
        {name:'باب الإيمان باليوم الآخر',
        id:31,
        audiPath: 'https://gdurl.com/WZ0k',
        text: '8',
        path: require('_assets/images/2/6.jpeg')
      },
        {name:'حسن الخاتمة وسوء الخاتمة',
        id:32,
        audiPath: 'https://gdurl.com/knHn',
        text: '8',
      },
        {name:'أدلة عذاب القبر ونعيم القبر',
        id:33,
        audiPath: 'https://gdurl.com/uYyO',
        text: '8',
      },
        {name:'تكملة أدلة عذاب القبر',
        id:34,
        audiPath: 'https://gdurl.com/m6TV',
        text: '8',
      },
        {name:'أشراط الساعة الصغرى',
        id:35,
        audiPath: 'https://gdurl.com/3d6j',
        text: '8',
      },
        {name:'باقي أشراط الساعة الصغرى وجزء من الكبرى',
        id:36,
        audiPath: 'https://gdurl.com/542R',
        text: '8',
      },
        {name:'الاحلاس والسراء والـدُّهيماء',
        id:37,
        audiPath: 'https://gdurl.com/HsNF',
        text: '8',
      },
        {name:'أشراط الساعة الكبرى',
        id:38,
        audiPath: 'https://gdurl.com/FbvH',
        audiPath2:'https://gdurl.com/uUNc',
        text: '8',
      },
      {name:'وصف يوم القيامة',
      id:31,
      audiPath: 'https://gdurl.com/2RPF',
      text: '8',
    },
      {name:'مشاهد يوم القيامة',
      id:32,
      audiPath: 'https://gdurl.com/58iI',
      text: '8',
    },
      {name:'مشاهد أهل الإيمان',
      id:33,
      audiPath: 'https://gdurl.com/bHXc',
      text: '8',
      path: require('_assets/images/2/9.jpg')

    },
      {name:'مشاهد يوم الحساب',
      id:34,
      audiPath: 'https://gdurl.com/d8tV',
      text: '8',
    },
      {name:'وصف النار',
      id:35,
      audiPath: 'https://gdurl.com/hl56',
      text: '8',
    },
      {name:'وصف الجنة ونعيمها',
      id:36,
      audiPath: 'https://gdurl.com/S1us',
      audiPath2: 'https://gdurl.com/zBQD',
      text: '8',
    },
      {name:'القضاء والقدر',
      id:37,
      audiPath: 'https://gdurl.com/02gp',
      text: '8',
      path: require('_assets/images/2/7.jpeg')
    },
      {name:'القضاء والقدر',
      id:38,
      audiPath: 'https://gdurl.com/Nl6A',
      text: '8',
    },
    {name:'أحكام متفرقة',
    id:38,
    audiPath: 'https://gdurl.com/kurp',
    text: '8',
    path: require('_assets/images/2/8.jpg')
  },
  {
    name:'أسئلة متعلقة بالسلسلة.. لا تفتحيها إلا بعد الانتهاء من السلسلة',
    url:'https://forms.gle/tzqyJzbhjsvkbc576'
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
          <Text style={styles.title}>العقيدة</Text>
          <ScrollView>
          <TouchableOpacity  onPress={() =>{ Linking.openURL('https://drive.google.com/file/d/1O6uDp6GQpgyC6LweiEItqi3ft-C_NDHs/view?usp=sharing')}}>
           <Text style={{  borderRadius: 25, margin:15,backgroundColor:'#371921' ,fontFamily: 'ArbFONTS-Monadi',  fontSize: 25, color: 'white',paddingBottom: 0, textAlign: 'center'}}>لقراءة أو تحميل كتاب أصول الإيمان</Text>
           </TouchableOpacity>
          <FlatList
            data={this.state.FlatListItems}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={styles.flatview}>
            
              <Text style={styles.name}>{item.name}</Text>
           
              {item.url && <TouchableOpacity onPress={() =>{ Linking.openURL(item.url)}}><Text style={{paddingBottom:50, fontSize:18}}>اضغطي هنا حتى يتم إرسالك للأسئلة </Text></TouchableOpacity>}   

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
    height:150,
    width:300,
    marginBottom:15,
    borderRadius: 5,

  }
});
export default home;
