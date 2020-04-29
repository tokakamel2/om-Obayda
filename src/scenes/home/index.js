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
  AsyncStorage,
  localStorage
} from 'react-native';
import {Card} from 'react-native-elements';
import PlayerScreen from 'react-native-sound-playerview';



class home extends Component {
  constructor(prpos) {
    super(prpos);
  
    this.state = {
      wait: true,
      FlatListItems: [
        {name:'الفقه', id:'one'}, //done voice
        {name:'العقيدة', id:'two'}, //done voice
        {name:'الثلاثون النسائية',id:'three'},//DONE ALL
        {name:'التفسير',id:'four'}, //DONE ALL
        {name:'تصحيح التلاوة', id:'five'},  //DONE
        {name:'سلسلة المرأة الصالحة', id:'six'}, //done voice and img
        {name:'سلسلة أخلاق عباد الرحمن', id:'seven'}, // done voice
        {name:'أمراض القلوب',id:'eight'},  //done voice
        {name:'أعمال القلوب',id:'nine'}, //done voice
        {name:'سير الصحابيات',id:'ten'}, //DONE 
        {name:'سير الصحابة',id:'eleven'},  //DONE
        {name:'يا بنت الإسلام أطيعي الله ورسوله',id:'twelve'}, //done voice
        {name:'دروس الداعيات', id:'thirteen'},
        {name:'الأربعون النووية', id:'fourteen'}, //DONE 
        {name:'تدريب داعية', id:'fifteen'},   //DONE
        {name:'صحيح البخاري', id:'sixteen'},  //done voice
        {name:'أسماء الله الحسنى', id:'seventeen'},//DONE
        {name:'سأبدأ من جديد بقلب محب ودود', id:'nineteen'},//DONE
        {name:'سلسلة أصول الوصول', id:'twenty'}, //done voice
        {name:'سلسلة الحقوق الإسلامية', id:'twentyone'},//DONE
        {name:'كيف أفوز برمضان', id:'twentytwo'}, //DONE
        {name:'فتاوى المرأة المسلمة', id:'eighteen'}, //done voice
        

      ],
    };
 
  
  }
 
check =async()=>{   
  const firstTime= await AsyncStorage.getItem('firstTime')
  console.log(firstTime)
  ok=async()=>{
  const value =await AsyncStorage.setItem('firstTime', 'false')  
  console.log(value)
}
    if (firstTime == 'True' ){
    console.log(firstTime)
    Alert.alert(
      "تنبيه هام",
      "هذا التطبيق للنساء فقط وممنوع سماع صوت المعلمة للرجال وهذه أمانة",
      [
        
        { text: "موافق", onPress: () => ok()
      
      }
      
      ],
      { cancelable: false }
    );
    }
    }



  componentDidMount() {
    this.check()
    setTimeout(() => {
    this.setState({wait:false})
    }, 5000);
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
      {  !this.state.wait && 
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
        
          renderItem={({item}) =>
          <TouchableOpacity   onPress={() => this.props.navigation.navigate(item.id)}  >
          <View style={styles.flatview}>
            <Text style={styles.name}>{item.name}</Text>
            
          </View>
          </TouchableOpacity>
        }
         
          keyExtractor={item => item.id}
       
        
       />
       
      </ImageBackground>
  }
{this.state.wait && 
<ImageBackground
source={require('_assets/images/logo2.png')}
style={{
  width: '100%',
  height: '100%',
  opacity: 100,
}}
>
  
  </ImageBackground>}
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
    textAlign:'center'
    
  },
  email: {
    color: 'red'
  }
  
});
export default home;
