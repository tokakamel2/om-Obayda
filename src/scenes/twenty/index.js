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
  Linking
  
} from 'react-native';

import PlayerScreen from 'react-native-sound-playerview';

import { ScrollView } from 'react-native-gesture-handler';

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [
        {
          name: 'الدرس الاول : أصول الالتزام',
          id: 1,
          audiPath: 'https://gdurl.com/l-iU',
          isOpend: false,
          
          },
        {
          name: 'الدرس الثاني: أصول أهل السنة والجماعة',
          id: 2,
          audiPath: 'https://gdurl.com/Jy1T',
        
         
        },
        {
          name: 'الدرس الثالث : ما هي السنه والبدعه وهل يوجد شي اسمه سنه حسنه؟',
          id: 3,
          audiPath: 'https://gdurl.com/CA85',
         
        },
        {
          name: 'الدرس الرابع: تابع أصول أهل السنة والجماعة',
          id: 4,
          audiPath: 'https://gdurl.com/Yyo4s',
          text: '4',
        },
        {
          name: 'الدرس الخامس: شرح مقدمة كتاب أصول الوصول',
          id: 5,
          audiPath: 'https://gdurl.com/KEnu',
          text: '5',
        },
        {
          name: 'الدرس السادس: ومضات علي الطريق',
          id: 6,
          audiPath: 'https://gdurl.com/qjgU',
          text: '6',
        },
        {
          name: 'الدرس السابع : تابع ومضات علي الطريق',
          id: 7,
          audiPath: 'https://gdurl.com/NZgW',
          text: '7',
        },
        {
          name: 'الدرس الثامن: آفات الطريق',
          id: 8,
          audiPath: 'https://gdurl.com/yU0P',
          text: '8',
        },
        {name:'الدرس التاسع: رحلة سفر',
        id:9,
        audiPath: 'https://gdurl.com/C8Fm',
        text: '8',
        },
        {name:'الدرس العاشر : بداية شرح أصول الوصول( عليك البدايه وعليه التمام)',
        id:10,
        audiPath: 'https://gdurl.com/Klo1',
        audiPath2:'https://gdurl.com/7Blb',
        text: '8',
        },
        {name:'الدرس الحادي عشر:(كيف اصل لمرتبه الصدق)',
        id:11,
        audiPath: 'https://gdurl.com/b9Jj',
        text: '8',
        },
        {name:'الدرس الثاني عشر: كيف احقق الاعتصام بالله',
        id:12,
        audiPath: 'https://gdurl.com/kkop',
        text: '8',
        },
        {name:'الدرس الثالث عشر:(ماهو مفتاح كل عباده)',
        id:13,
        audiPath: 'https://gdurl.com/2L8b',
        text: '8',
      },
        {name:'الدرس الرابع عشر: ختام  اصول الوصول(كيف اصل لمحبه الله)',
        id:14,
        audiPath: 'https://gdurl.com/jfFR2',
        text: '8',
        
      },
      {
        name:'أسئلة متعلقة بالسلسلة.. لا تفتحيها إلا بعد الانتهاء من السلسلة',
        url:'https://forms.gle/9hvfig2h9CxQ95TK8'
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
          <Text style={styles.title}>سلسلة أصول الوصول</Text>
          <ScrollView>
          <TouchableOpacity  onPress={() =>{ Linking.openURL('https://drive.google.com/file/d/1lHUGvxBOjRxniBaIquxZXi918FzjYgrG/view?usp=sharing')}}>
           <Text style={{  borderRadius: 25, margin:15,backgroundColor:'#371921' ,fontFamily: 'ArbFONTS-Monadi',  fontSize: 25, color: 'white',paddingBottom: 0, textAlign: 'center'}}>لقراءة أو تحميل كتاب أصول الوصول </Text>
           </TouchableOpacity>
          <FlatList
            data={this.state.FlatListItems}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={styles.flatview}>
            
              <Text style={styles.name}>{item.name}</Text>
           
           
            {item.path && <Text style={styles.text}>{item.text}</Text> } 
            {item.audiPath &&  <PlayerScreen filepath={item.audiPath}/> }
            {item.audiPath2 && <PlayerScreen filepath={item.audiPath2}/>} 
            {item.audiPath3 && <PlayerScreen filepath={item.audiPath3}/>} 
            {item.path && <Image source={item.path} style={styles.Image}/> } 
            {item.url && <TouchableOpacity onPress={() =>{ Linking.openURL(item.url)}}><Text style={{paddingBottom:50, fontSize:18}}>اضغطي هنا حتى يتم إرسالك للأسئلة </Text></TouchableOpacity>}   
      
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
    textAlign:'center',
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
