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
 
  
} from 'react-native';

import PlayerScreen from 'react-native-sound-playerview';

import { ScrollView } from 'react-native-gesture-handler';

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [
        {
          name: 'سعيد بن زيد',
          id: 1,
          audiPath: 'https://gdurl.com/ScJ3',
          isOpend: false,
          
          },
        {
          name: 'سالم مولى بن حذيفة',
          id: 2,
          audiPath: 'https://gdurl.com/WZ6p',
        
         
        },
        {
          name: 'كيف نسير على خطة النبي',
          id: 3,
          audiPath: 'https://gdurl.com/TXLa',
         
        },
        {
          name: 'فضائل الأنصار',
          id: 4,
          audiPath: 'https://gdurl.com/ujkf',
          text: '4',
        },
        {
          name: 'أبي بكر',
          id: 5,
          audiPath: 'https://gdurl.com/ByvV',
          audiPath2: 'https://gdurl.com/6DZm',
          audiPath3: 'https://gdurl.com/BgX6',
          audiPath4: 'https://gdurl.com/THKR',
          audiPath5: 'https://gdurl.com/lyNH',
          text: '5',
        },
        
        {
          name: 'عمر بن الخطاب',
          id: 7,
          audiPath: 'https://gdurl.com/FO8w',
          audiPath2: 'https://gdurl.com/GzvS',
          audiPath3: 'https://gdurl.com/MN9K1',
          text: '7',
        },
        {
          name: 'عثمان بن عفان',
          id: 8,
          audiPath: 'https://gdurl.com/HTSF',
          audiPath2: 'https://gdurl.com/VCO1',
          audiPath3: 'https://gdurl.com/qrVG',
          text: '8',
        },
        {
          name: 'علي بن أبي طالب',
          id: 6,
          audiPath: 'https://gdurl.com/mkMp',
          audiPath2: 'https://gdurl.com/tDkh',
          text: '6',
        },
        {name:'طلحة',
        id:9,
        audiPath: 'https://gdurl.com/2Vuu',
        text: '8',
        },
        {name:'الزبير بن العوام',
        id:10,
        audiPath: 'https://gdurl.com/soiC',
        text: '8',
        },
        {name:'عبدالرحمن بن عوف',
        id:11,
        audiPath: 'https://gdurl.com/wxsd',
        text: '8',
        },
        {name:'سعد بن أبي وقاص',
        id:12,
        audiPath: 'https://gdurl.com/wBaT',
        text: '8',
        },
        {name:'الحارثة وأم هشام',
        id:13,
        audiPath: 'https://gdurl.com/hNDn',
        text: '8',
      },
        {name:'أبو عبيدة بن الجراح',
        id:14,
        audiPath: 'https://gdurl.com/U-0i',
        audiPath2: 'https://gdurl.com/sTyn',
        text: '8',
        
      },
        {name:'صهيب الرومي',
        id:15,
        audiPath: 'https://gdurl.com/YEZh',
        text: '8',
      },
        {name:'سالم مولى أبي حذيفة',
        id:16,
        audiPath: 'https://gdurl.com/5L7vr',
        text: '8',
      },
      {name:'زيد بن ثابت',
      id:16,
      audiPath: 'https://gdurl.com/DZ6k',
      text: '8',
    }, {name:'أنس بن مالك',
    id:16,
    audiPath: 'https://gdurl.com/XX7T',
    text: '8',
  },
   {name:'خباب بن الأرت',
  id:16,
  audiPath: 'https://gdurl.com/NJz0',
  text: '8',
},
 {name:'سعد بن معاذ',
id:16,
audiPath: 'https://gdurl.com/r8YW',
text: '8',
},
 {name:'عمير بن سعد',
id:16,
audiPath: 'https://gdurl.com/xMYC',
audiPath2:'https://gdurl.com/iytn',
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
          <Text style={styles.title}>سير الصحابة</Text>
          <ScrollView>
          <TouchableOpacity  onPress={() =>{ Linking.openURL('https://drive.google.com/file/d/1Rf-5BVRVd5DcqjZVnCvpB_o34p83VlQd/view?usp=sharing')}}>
           <Text style={{  borderRadius: 25, margin:15,backgroundColor:'#371921' ,fontFamily: 'ArbFONTS-Monadi',  fontSize: 25, color: 'white',paddingBottom: 0, textAlign: 'center'}}>لقراءة أو تحميل كتاب أصحاب الرسول</Text>
           </TouchableOpacity>  
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
            {item.audiPath4 && <PlayerScreen filepath={item.audiPath4}/>} 
            {item.audiPath5 && <PlayerScreen filepath={item.audiPath5}/>}  
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
