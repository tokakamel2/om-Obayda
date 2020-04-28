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
          name: 'السيدة خديجة',
          id: 1,
          audiPath: 'https://gdurl.com/nErb',
          audiPath2: 'https://gdurl.com/fwco',
          isOpend: false,
          
          },
        {
          name: 'السيدة عائشة',
          id: 2,
          audiPath: 'https://gdurl.com/FbOz',
          audiPath2:'https://gdurl.com/qZPo',
        
         
        },
        {
          name: 'سودة بنت زمعة',
          id: 3,
          audiPath: 'https://gdurl.com/5-Pm',
         
        },
        {
          name: 'السيدة حفصة',
          id: 4,
          audiPath: 'https://gdurl.com/JoqJ',
          text: '4',
        },
        {
          name: 'زينب بنت خزيمة',
          id: 5,
          audiPath: 'https://gdurl.com/USJO',
          text: '5',
        },
        {
          name: 'ميمونة',
          id: 6,
          audiPath: 'https://gdurl.com/ZBQW',
          text: '6',
        },
        {
          name: 'أم سلمة',
          id: 7,
          audiPath:'https://gdurl.com/qqh9',
          audiPath2: 'https://gdurl.com/JJJQ',
          text: '7',
        },
        {
          name: 'زينب بنت جحش',
          id: 8,
          audiPath: 'https://gdurl.com/5yde',
          audiPath2: 'https://gdurl.com/U6a8',
          text: '8',
        },
        {name:'أم حبيبة',
        id:9,
        audiPath: 'https://gdurl.com/vgG3',
        text: '8',
        },
        {name:'جويرية بنت الحارث',
        id:10,
        audiPath: 'https://gdurl.com/IV0F',
        text: '8',
        },
        {name:'صفية',
        id:11,
        audiPath: 'https://gdurl.com/PMmk',
        text: '8',
        },
        {name:'السيدة فاطمة',
        id:12,
        audiPath: 'https://gdurl.com/p9Zx',
        audiPath2: 'https://gdurl.com/mfuK',
        text: '8',
        },
        {name:'بنات النبي',
        id:13,
        audiPath: 'https://gdurl.com/VT35',
        text: '8',
      },
        {name:'حليمة السعدية',
        id:14,
        audiPath: 'https://gdurl.com/cwR8',
        text: '8',
        
      },
        {name:'أم أيمن',
        id:15,
        audiPath: 'https://gdurl.com/vv2b',
        text: '8',
      },
        {name:'فاطمة بنت الأسد',
        id:16,
        audiPath: 'https://gdurl.com/3LXKn',
        text: '8',
      },
    
      {name:'أم سليم',
        id:16,
        audiPath: 'https://gdurl.com/YMYM',
        text: '8',
      },
      {name:'أم عمارة',
        id:16,
        audiPath: 'https://gdurl.com/NkmH',
        text: '8',
      },
      {name:'أم حرام بن ملحان',
        id:16,
        audiPath: 'https://gdurl.com/HtTG',
        text: '8',
      },
      {name:'أم ورقة الأنصارية',
        id:16,
        audiPath: 'https://gdurl.com/2hLt',
        text: '8',
      },
      {name:'أسماء بنت أبي بكر',
        id:16,
        audiPath: 'https://gdurl.com/hzxk',
        audiPath2: 'https://gdurl.com/V7OG',
        audiPath3: 'https://gdurl.com/CT-L',
        text: '8',
      },
      {name:'صفية بنت عبدالمطلب',
        id:16,
        audiPath: 'https://gdurl.com/28hl',
        text: '8',
      },
      {name:'عاتكة بنت زيد',
        id:16,
        audiPath: 'https://gdurl.com/WTjo',
        text: '8',
      },
      {name:'أسماء بنت عميس',
        id:16,
        audiPath: 'https://gdurl.com/3o7d',
        audiPath2: 'https://gdurl.com/zs1s',
        text: '8',
      },
      {name:'كبشة بنت رافع',
      id:16,
      audiPath: 'https://gdurl.com/m_hA',
      text: '8',
    },
    {name:'أم شريك',
        id:16,
        audiPath: 'https://gdurl.com/ZH4s',
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
          <Text style={styles.title}>سير الصحابيات</Text>

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
