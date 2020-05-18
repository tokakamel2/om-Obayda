import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  Linking ,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  
} from 'react-native';


class home extends Component {
  constructor(prpos) {
    super(prpos);
  
    this.state = {
      wait: true,
      FlatListItems: [
        {name:'قناة التليجرام', id:'one' ,txt:'https://t.me/joinchat/AAAAAEjRMvRTG4VPT6ZcLg' , url:'https://t.me/joinchat/AAAAAEjRMvRTG4VPT6ZcLg'}, //done voice
        {name:'للشكاوى المتعلقة بالتطبيق', id:'two', url:'https://forms.gle/gBTDZxQTYeaVZsez5'}, //done voice   
        {name:'لينك الدرايف لتحميل الدروس',id:'three', url:'https://drive.google.com/drive/folders/1CUAP8ZaUGZO9pA9VjuME-eCputM9q5Xd?usp=sharing'}  

      ],
    };
 
  
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
      {  this.state.wait && 
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
          <TouchableOpacity   onPress={() =>{ Linking.openURL(item.url)}}  >
          <View style={styles.flatview}>
            <Text style={styles.name}>{item.name}</Text>
          
          </View>
          </TouchableOpacity>
        }
         
          keyExtractor={item => item.id}
       
        
       />
       
      </ImageBackground>
  }
{!this.state.wait && 
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
