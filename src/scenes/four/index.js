
import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Linking
} from 'react-native';
import {Card} from 'react-native-elements';
import PlayerScreen from 'react-native-sound-playerview';
import { ScrollView } from 'react-native-gesture-handler';

class home extends Component {
  constructor(prpos) {
    super(prpos);
    this.state = {
      FlatListItems: [
        {name:'تفسير سورة الفاتحة',id:'alf'},
        {name:'تفسير سورة البقرة', id:'tafs1'}, //done
        {name:'سورة آل عمران', id:'tafs2'}, //done
        {name:'سورة النساء',id:'tafs3'}, //done
        {name:'سورة النور',id:'tafs4'},  //done
        {name:'جزء الذاريات', id:'tafs5'}, //done
        {name:'جزء قد سمع', id:'tafs6'}, //done
        {name:'جزء تبارك', id:'tafs7'}, //done
        {name:'جزء عم',id:'tafs8'}, //done
        {
          name:'أسئلة متعلقة بالسلسلة.. لا تفتحيها إلا بعد الانتهاء من السلسلة',
          url:'https://forms.gle/5nk5NPceDq6J8sr19'
        }
        

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
      <ImageBackground
        source={require('_assets/images/islamic-pattern.jpg')}
        style={{
          width: '100%',
          height: '100%',
          opacity: 100,
        }}>
      <ScrollView>
      <TouchableOpacity  onPress={() =>{ Linking.openURL('https://drive.google.com/file/d/1tpV3Le54_uIdx5FH6e-JyoEOrVBAAsok/view?usp=sharing')}}>
           <Text style={{  borderRadius: 25, margin:15,backgroundColor:'#371921' ,fontFamily: 'ArbFONTS-Monadi',  fontSize: 25, color: 'white',paddingBottom: 0, textAlign: 'center'}}>لقراءة أو تحميل كتاب تفسير كلام المنان</Text>
           </TouchableOpacity>
      <FlatList
          
          data={this.state.FlatListItems}
          showsVerticalScrollIndicator={false}
        
          renderItem={({item}) =>
          <TouchableOpacity   onPress={() =>{if(!item.url){ this.props.navigation.navigate(item.id)}else{Linking.openURL(item.url)}}}  >
          <View style={styles.flatview}>
            <Text style={styles.name}>{item.name}</Text>
            {item.url && <TouchableOpacity onPress={() =>{ Linking.openURL(item.url)}}><Text style={{paddingBottom:50, fontSize:18}}>اضغطي هنا حتى يتم إرسالك للأسئلة </Text></TouchableOpacity>}   

          </View>
          </TouchableOpacity>
          
        }
         
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
