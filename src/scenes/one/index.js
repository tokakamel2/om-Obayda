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
        {name:'الدرس الأول', id:'one',path:require('_assets/images/1/1.jpg') ,text:'واليوم مع الدرس الاول من الفقة 📃👆🏻نتكلم  فية عن ادب الخلاف !?ولماذا يختلف العلماء ? وماذا نفعل لو راينا حكم فية اكثر من راى  !!وإلــيـــكِ أسـئلــة الـدرس📃👇🏻1-🔅 لماذا يوجد بعض الاختلافات بين اهل العلم؟  2-🔅 ماهو ادب الخلاف ؟3- 🔅ماهى اقسام الاختلاف المعتبر وغير المعتبر  مع بعض الامثله ؟4🔅- مالذى استفدتيه من هذا الدرس ؟حلى الاسئلة مع نفسك ليثبت العلم لديكى👍🏻 وتختبرى نفسك اسمعي  وانشرى 👆🏻👍  🌹🎀🌹 #الدرس_الاول_فقه'},
        {name:'العقيدة', id:'two'},
        {name:'السيرة',id:3},
        {name:'التفسير',id:4},
        {name:'الأربعون النووية', id:5},
        {name:'سلسلة المرأة الصالحة', id:6},
        {name:'سلسلة الدار الآخرة', id:7},
        {name:'أمراض القلوب',id:8},
        {name:'أعمال القلوب',id:0},
        
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

        <PlayerScreen filepath='https://gdurl.com/3rMO'/>
        <PlayerScreen filepath='_resources/1.mp3'/>

         
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
    fontSize: 30,
    color:'#633e5a',
    paddingBottom:20
    
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
