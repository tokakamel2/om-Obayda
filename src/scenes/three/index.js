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
  SafeAreaView
} from 'react-native';
import {Card} from 'react-native-elements';
import PlayerScreen from 'react-native-sound-playerview';

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [
        {name:'الدرس الأول', id:'one',audiPath:'https://gdurl.com/3rMO',path:require('_assets/images/1/1.jpg') ,text:'واليوم مع الدرس الاول من الفقة 📃👆🏻نتكلم  فية عن ادب الخلاف !?ولماذا يختلف العلماء ? وماذا نفعل لو راينا حكم فية اكثر من راى  !!وإلــيـــكِ أسـئلــة الـدرس📃👇🏻1-🔅 لماذا يوجد بعض الاختلافات بين اهل العلم؟  2-🔅 ماهو ادب الخلاف ؟3- 🔅ماهى اقسام الاختلاف المعتبر وغير المعتبر  مع بعض الامثله ؟4🔅- مالذى استفدتيه من هذا الدرس ؟حلى الاسئلة مع نفسك ليثبت العلم لديكى👍🏻 وتختبرى نفسك اسمعي  وانشرى 👆🏻👍  🌹🎀🌹 #الدرس_الاول_فقه'},
        {name:'الدرس الثاني', id:'two'},
        {name:'الدرس الثالث',id:3},
        {name:'الدرس الرابع',id:4},
        {name:'الدرس الخامس', id:5},
        {name:'الدرس السادس', id:6},
        {name:'الدرس السابع', id:7},
        {name:'الدرس الثامن',id:8},
        {name:'الدرس التاسع',id:9},
        {name:'الدرس العاشر',id:10},
        {name:'الدرس الحادي عشر',id:11},
        {name:'الدرس الثاني عشر',id:12},
        {name:'الدرس الثالث عشر',id:13},
        {name:'الدرس الرابع عشر',id:14},
        {name:'الدرس الخامس عشر',id:15},
        {name:'الدرس السادس عشر',id:16},
        {name:'الدرس السابع عشر',id:17},
        {name:'الدرس الثامن عشر',id:18},
        {name:'الدرس التاسع عشر',id:19},
        {name:'الدرس العشرون',id:20},
        {name:'الدرس الواحد والعشرون',id:21},
        {name:'الدرس الثاني والعشرون',id:22},
        {name:'الدرس الثالث والعشرون',id:23},
        {name:'الدرس الرابع والعشرون',id:24},
        {name:'الدرس الخامس والعشرون',id:25},
        {name:'الدرس السادس والعشرون',id:26},
        {name:'الدرس السابع والعشرون',id:27},
        {name:'الدرس الثامن والعشرون',id:28},
        {name:'الدرس التاسع والعشرون',id:29},
        {name:'الدرس الثلاثون',id:30},
        {name:'الدرس الواحد والثلاثون',id:31},
        {name:'الدرس الثاني والثلاثون',id:32},
        {name:'الدرس الثالث والثلاثون',id:33},
        {name:'الدرس الرابع والثلاثون',id:34},
        {name:'الدرس الخامس والثلاثون',id:35},
        {name:'الدرس السادس والثلاثون',id:36},
        {name:'الدرس السابع والثلاثون',id:37},
        {name:'الدرس الثامن والثلاثون',id:38},
        
        
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
      <View>
      
      <ImageBackground
        source={require('_assets/images/islamic-pattern.jpg')}
        style={{
          width: '100%',
          height: '100%',
          opacity: 100,
        }}>
       <Text style={styles.title}>الثلاثون النسائية</Text> 
      <FlatList
          
          data={this.state.FlatListItems}
          showsVerticalScrollIndicator={false}
        
          renderItem={({item}) =>(
         
          <View style={styles.flatview}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.text}>{item.text}</Text>
         { item.path &&  <Image
          source={item.path}
          style={{height:250, width:250}}
        ></Image>}

       {item.audiPath && <PlayerScreen filepath={item.audiPath}/>}
      

         
          </View>
         
          )
      
      }
         
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
    marginHorizontal:20,
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
    padding:10,
    borderRadius: 2,
    margin:10,
    marginHorizontal:20,
    backgroundColor:'#ffef',
    alignItems: 'center',
    flex: 1,
    borderRadius:10,
  },
  name: {
    fontFamily: 'ArbFONTS-Monadi',
    fontSize: 28,
    color:'#633e5a',
    paddingBottom:20
    
  },
  title: {
    fontFamily: 'ArbFONTS-Monadi',
    fontSize: 45,
    color:'#ffff',
    paddingBottom:0,
    textAlign:'center'
    
  },
  text:{
    fontSize: 20,
    paddingBottom:10
  },
  email: {
    color: 'red'
  }
  
});
export default home;
