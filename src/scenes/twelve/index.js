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
          name: 'الدرس الأول',
          id: 1,
          audiPath: 'https://gdurl.com/MgtT',
          isOpend: false,
          
          },
        {
          name: 'الدرس الثاني',
          id: 2,
          audiPath: 'https://gdurl.com/lGt4',
        
         
        },
        {
          name: 'الدرس الثالث',
          id: 3,
          audiPath: 'https://gdurl.com/Cnol',
          audiPath2:'https://gdurl.com/saj1f',
         
        },
        {
          name: 'الدرس الرابع',
          id: 4,
          audiPath: 'https://gdurl.com/0RVX',
          text: '4',
        },
        {
          name: 'الدرس الخامس',
          id: 5,
          audiPath: 'https://gdurl.com/Z3jyF',
          text: '5',
        },
        {
          name: 'الدرس السادس',
          id: 6,
          audiPath: 'https://gdurl.com/fEMw',
          text: '6',
        },
        {
          name: 'الدرس السابع',
          id: 7,
          audiPath: 'https://gdurl.com/c_Qx',
          text: '7',
        },
        {
          name: 'الدرس الثامن',
          id: 8,
          audiPath: 'https://gdurl.com/xS_ix',
          text: '8',
        },
        {name:'الدرس التاسع',
        id:9,
        audiPath: 'https://gdurl.com/6QUc',
        text: '8',
        },
        {name:'الدرس العاشر',
        id:10,
        audiPath: 'https://gdurl.com/Roi7',
        text: '8',
        },
        {name:'الدرس الحادي عشر',
        id:11,
        audiPath: 'https://gdurl.com/zdvc',
        text: '8',
        },
        {name:'الدرس الثاني عشر',
        id:12,
        audiPath: 'https://gdurl.com/0NUE',
        text: '8',
        },
        {name:'الدرس الثالث عشر',
        id:13,
        audiPath: 'https://gdurl.com/mmen',
        text: '8',
      },
        {name:'الدرس الرابع عشر',
        id:14,
        audiPath: 'https://gdurl.com/bVgX',
        text: '8',
        
      },
        {name:'الدرس الخامس عشر',
        id:15,
        audiPath: 'https://gdurl.com/OMIe',
        audiPath2:'https://gdurl.com/fWh4',
        audiPath2:'',
        text: '8',
      },
        {name:'الدرس السادس عشر',
        id:16,
        audiPath:'https://gdurl.com/3HEV',
        audiPath2: 'https://gdurl.com/pSBf',
        text: '8',
      },
      {
        name: 'الدرس السابع عشر',
        id: 1,
        audiPath: 'https://gdurl.com/tyEe',
        isOpend: false,
        
        },
      {
        name: 'الدرس الثامن عشر',
        id: 2,
        audiPath: 'https://gdurl.com/kv5F',
      
       
      },
      {
        name: 'الدرس التاسع عشر',
        id: 3,
        audiPath: 'https://gdurl.com/M7VL',
       
      },
      {
        name: 'الدرس العشرون',
        id: 4,
        audiPath: 'https://gdurl.com/sk_M',
        text: '4',
      },
      {
        name: 'الدرس الواحد والعشرون',
        id: 5,
        audiPath: 'https://gdurl.com/6eHR',
        audiPath2:'https://gdurl.com/Q79C',
        text: '5',
      },
      {
        name: 'الدرس الثاني والعشرون',
        id: 6,
        audiPath: 'https://gdurl.com/NQ9B',
        audiPath2:'https://gdurl.com/3k-0',
        text: '6',
      },
      {
        name: 'الدرس الثالث والعشرون',
        id: 7,
        audiPath: 'https://gdurl.com/suXL',
        text: '7',
      },
      {
        name: 'الدرس الرابع والعشرون',
        id: 8,
        audiPath: 'https://gdurl.com/pOMc',
        audiPath2:'https://gdurl.com/vK34',
        text: '8',
      },
      {name:'الدرس الخامس والعشرون',
      id:9,
      audiPath: 'https://gdurl.com/CKUe',
      text: '8',
      },
      {name:'الدرس السادس والعشرون',
      id:10,
      audiPath: 'https://gdurl.com/YNcS',
      text: '8',
      },
      {name:'الدرس السابع والعشرون ',
      id:11,
      audiPath: 'https://gdurl.com/HogP',
      audiPath2: 'https://gdurl.com/yKYn',
      text: '8',
      },
      {name:'الدرس الثامن والعشرون',
      id:12,
      audiPath: 'https://gdurl.com/aBaS',
      audiPath2:'https://gdurl.com/g7wQ',
      text: '8',
      },
      {name:'الدرس التاسع والعشرون ',
      id:13,
      audiPath: 'https://gdurl.com/YqFD',
      audiPath2:'https://gdurl.com/18so',
      audiPath3:'https://gdurl.com/luoh',
      text: '8',
    },
      {name:'الدرس الثلاثون',
      id:14,
      audiPath: 'https://gdurl.com/TVXI',
      audiPath2:'https://gdurl.com/OGhe',
      text: '8',
      
    },
      {name:'الدرس الواحد والثلاثون ',
      id:15,
      audiPath: 'https://gdurl.com/pS5P',
      text: '8',
    },
      {name:'الدرس الثاني والثلاثون',
      id:16,
      audiPath: 'https://gdurl.com/R_pB',
      text: '8',
    },
    {
      name: 'الدرس الثالث والثلاثون',
      id: 1,
      audiPath: 'https://gdurl.com/01cq',
      isOpend: false,
      
      },
    {
      name: 'الدرس الرابع والثلاثون',
      id: 2,
      audiPath: 'https://gdurl.com/D_Rv',
      audiPath2:'https://gdurl.com/FkeH',
    
     
    },
    {
      name: 'الدرس الخامس والثلاثون',
      id: 3,
      audiPath: 'https://gdurl.com/M9ns',
     
    },
    {
      name: 'الدرس السادس والثلاثون',
      id: 4,
      audiPath: 'https://gdurl.com/XYP3I',
      text: '4',
    },
    {
      name: 'الدرس السابع والثلاثون',
      id: 5,
      audiPath: 'https://gdurl.com/HkX7',
      text: '5',
    },
    {
      name: 'الدرس الثامن والثلاثون',
      id: 6,
      audiPath: 'https://gdurl.com/X7Ce',
      audiPath2:'https://gdurl.com/ePzZ',
      text: '6',
    },
    {
      name: 'الدرس التاسع والثلاثون',
      id: 7,
      audiPath: 'https://gdurl.com/cTKM',
      text: '7',
    },
    {
      name: 'الدرس الأربعون',
      id: 8,
      audiPath: 'https://gdurl.com/VIon',
      text: '8',
    },
    {name:'الدرس الواحد وأربعون',
    id:9,
    audiPath: 'https://gdurl.com/Dzec',
    text: '8',
    },
    {name:'الدرس الثاني وأربعون',
    id:10,
    audiPath: 'https://gdurl.com/bgrU',
    text: '8',
    },
    {name:'الدرس الثالث والأربعون ',
    id:11,
    audiPath: 'https://gdurl.com/4_KcF',
    text: '8',
    },
    {name:'الدرس الرابع والأربعون ',
    id:12,
    audiPath: 'https://gdurl.com/qSGs',
    audiPath2:'https://gdurl.com/k5sX',
    audiPath3:'https://gdurl.com/jIX3M',
    text: '8',
    },
    {name:'الدرس الخامس والأربعون ',
    id:13,
    audiPath: 'https://gdurl.com/aylz',
    text: '8',
  },
    {name:'الدرس السادس والأربعون ',
    id:14,
    audiPath: 'https://gdurl.com/K-VW',
    text: '8',
    
  },
    {name:'الدرس السابع والأربعون ',
    id:15,
    audiPath: 'https://gdurl.com/YGph',
    text: '8',
  },
    {name:'الدرس الثامن والأربعون ',
    id:16,
    audiPath: 'https://gdurl.com/FE0n',
    audiPath2:'https://gdurl.com/vvAx',
    text: '8',
  },
  {name:'الدرس التاسع والأربعون ',
  id:13,
  audiPath: 'https://gdurl.com/fGcY',
  text: '8',
},
  {name:'الدرس الخمسون  ',
  id:14,
  audiPath: 'https://gdurl.com/f7G1',
  text: '8',
  
},
  {name:'الدرس الواحد والخمسون  ',
  id:15,
  audiPath: 'https://gdurl.com/aNn9',
  text: '8',
},
  {name:'الدرس الثاني والخمسون  ',
  id:16,
  audiPath: 'https://gdurl.com/c1DS',
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
          <Text style={styles.title}>يا بنت الإسلام أطيعي الله ورسوله</Text>

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
