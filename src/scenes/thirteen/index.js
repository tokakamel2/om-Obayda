
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
import {Card} from 'react-native-elements';
import PlayerScreen from 'react-native-sound-playerview';
import { ScrollView } from 'react-native-gesture-handler';

class home extends Component {
  constructor(prpos) {
    super(prpos);
    this.state = {
      FlatListItems: [

        {name:'الداعيات إلى الله', id:'da1'}, 
        {name:'حلية طالب العلم',id:'da2'},    
        {name:'صفات الداعية',id:'da3'},//done
        {
          name:'أسئلة متعلقة بالسلسلة.. لا تفتحيها إلا بعد الانتهاء من السلسلة',
          url:'https://forms.gle/XBfm659RYCWvavF96'
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
