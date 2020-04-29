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
          name: '1',
          id: 1,
          audiPath: 'https://gdurl.com/xEbS',
          isOpend: false,
          
          },
        {
          name: '2',
          id: 2,
          audiPath: 'https://gdurl.com/3yj5',
        
         
        },
        {
          name: '3',
          id: 3,
          audiPath: 'https://gdurl.com/GAPQY',
         
        },
        {
          name: '4',
          id: 4,
          audiPath: 'https://gdurl.com/BYhQ',
          text: '4',
        },
        {
          name: '5',
          id: 5,
          audiPath: 'https://gdurl.com/cazT',
          text: '5',
        },
        {
          name: '6',
          id: 6,
          audiPath: 'https://gdurl.com/p2C9',
          text: '6',
        },
        {
          name: '7',
          id: 7,
          audiPath: 'https://gdurl.com/XViN',
          text: '7',
        },
        {
          name: '8',
          id: 8,
          audiPath: 'https://gdurl.com/yc_e',
          text: '8',
        },
        {name:'9',
        id:9,
        audiPath: 'https://gdurl.com/Fpiw',
        text: '8',
        },
        {name:'10',
        id:10,
        audiPath: 'https://gdurl.com/JVNm',
        text: '8',
        },
        {name:'11',
        id:11,
        audiPath: 'https://gdurl.com/q1nt',
        text: '8',
        },
        {name:'12',
        id:12,
        audiPath: 'https://gdurl.com/E2Mt',
        text: '8',
        },
        {name:'13',
        id:13,
        audiPath: 'https://gdurl.com/R8Nl',
        text: '8',
      },
        {name:'14',
        id:14,
        audiPath: 'https://gdurl.com/kLEL5',
        text: '8',
        
      },
        {name:'15',
        id:15,
        audiPath: 'https://gdurl.com/bw74',
        text: '8',
      },
        {name:'16',
        id:16,
        audiPath: 'https://gdurl.com/17bw',
        text: '8',
      },
      {
        name: '17',
        id: 1,
        audiPath: 'https://gdurl.com/RTH0',
        isOpend: false,
        
        },
      {
        name: '18',
        id: 2,
        audiPath: 'https://gdurl.com/BgP2',
      
       
      },
      {
        name: '19',
        id: 3,
        audiPath: 'https://gdurl.com/O1ae',
       
      },
      {
        name: '20',
        id: 4,
        audiPath: 'https://gdurl.com/o8_C',
        text: '4',
      },
      {
        name: '21',
        id: 5,
        audiPath: 'https://gdurl.com/sL_s',
        text: '5',
      },
      {
        name: '22',
        id: 6,
        audiPath: 'https://gdurl.com/DeDS',
        text: '6',
      },
      {
        name: '23',
        id: 7,
        audiPath: 'https://gdurl.com/zFpu',
        text: '7',
      },
      {
        name: '24',
        id: 8,
        audiPath: 'https://gdurl.com/C61q',
        text: '8',
      },
      {name:'25',
      id:9,
      audiPath: 'https://gdurl.com/wONM',
      text: '8',
      },
      {name:'26',
      id:10,
      audiPath: 'https://gdurl.com/73iH',
      text: '8',
      },
      {name:'27',
      id:11,
      audiPath: 'https://gdurl.com/t9Tu',
      text: '8',
      },
      {name:'28',
      id:12,
      audiPath: 'https://gdurl.com/tbDG',
      text: '8',
      },
      {name:'29',
      id:13,
      audiPath: 'https://gdurl.com/bIOc',
      text: '8',
    },
      {name:'30',
      id:14,
      audiPath: 'https://gdurl.com/mfsJ',
      text: '8',
      
    },
      {name:'31',
      id:15,
      audiPath: 'https://gdurl.com/RWtV',
      text: '8',
    },
      {name:'32',
      id:16,
      audiPath: 'https://gdurl.com/khH8',
      text: '8',
    },

    {
      name: '33',
      id: 1,
      audiPath: 'https://gdurl.com/7zdH',
      isOpend: false,
      
      },
    {
      name: '34',
      id: 2,
      audiPath: 'https://gdurl.com/MRu0',
    
     
    },
    {
      name: '35',
      id: 3,
      audiPath: 'https://gdurl.com/F9Yq',
     
    },
    {
      name: '36',
      id: 4,
      audiPath: 'https://gdurl.com/JKll',
      text: '4',
    },
    {
      name: '37',
      id: 5,
      audiPath: 'https://gdurl.com/P5nC',
      text: '5',
    },
    {
      name: '38',
      id: 6,
      audiPath: 'https://gdurl.com/bDhd',
      text: '6',
    },
    {
      name: '39',
      id: 7,
      audiPath: 'https://gdurl.com/Frc3',
      text: '7',
    },
    {
      name: '40',
      id: 8,
      audiPath: 'https://gdurl.com/zM0J',
      text: '8',
    },
    {name:'41',
    id:9,
    audiPath: 'https://gdurl.com/C3ZK',
    text: '8',
    },
    {name:'42',
    id:10,
    audiPath: 'https://gdurl.com/Zial',
    text: '8',
    },
    {name:'43',
    id:11,
    audiPath: 'https://gdurl.com/jZAf',
    text: '8',
    },
    {name:'44',
    id:12,
    audiPath: 'https://gdurl.com/3cHa',
    text: '8',
    },
    {name:'45',
    id:13,
    audiPath: 'https://gdurl.com/DDzA',
    text: '8',
  },
    {name:'46',
    id:14,
    audiPath: 'https://gdurl.com/gvN3',
    text: '8',
    
  },
    {name:'47',
    id:15,
    audiPath: 'https://gdurl.com/5NqC',
    text: '8',
  },
    {name:'48',
    id:16,
    audiPath: 'https://gdurl.com/wqsV',
    text: '8',
  },



  {
    name: '49',
    id: 1,
    audiPath: 'https://gdurl.com/z0yR',
    isOpend: false,
    
    },
  {
    name: '50',
    id: 2,
    audiPath: 'https://gdurl.com/Np9b',
  
   
  },
  {
    name: '51',
    id: 3,
    audiPath: 'https://gdurl.com/FJ1I',
   
  },
  {
    name: '52',
    id: 4,
    audiPath: 'https://gdurl.com/cgSu',
    text: '4',
  },
  {
    name: '53',
    id: 5,
    audiPath: 'https://gdurl.com/wbax',
    text: '5',
  },
  {
    name: '54',
    id: 6,
    audiPath: 'https://gdurl.com/Kg0k',
    text: '6',
  },
  {
    name: '55',
    id: 7,
    audiPath: 'https://gdurl.com/OUeg',
    text: '7',
  },
  {
    name: '56',
    id: 8,
    audiPath: 'https://gdurl.com/36js',
    text: '8',
  },
  {name:'57',
  id:9,
  audiPath: 'https://gdurl.com/5FkA',
  text: '8',
  },
  {name:'58',
  id:10,
  audiPath: 'https://gdurl.com/98bj',
  text: '8',
  },
  {name:'59',
  id:11,
  audiPath: 'https://gdurl.com/xO6A',
  text: '8',
  },
  {name:'60',
  id:12,
  audiPath: 'https://gdurl.com/y6WQ',
  text: '8',
  },
  {name:'61',
  id:13,
  audiPath: 'https://gdurl.com/LzRT',
  text: '8',
},
  {name:'62',
  id:14,
  audiPath: 'https://gdurl.com/15vF',
  text: '8',
  
},
  {name:'63',
  id:15,
  audiPath: 'https://gdurl.com/tllz',
  text: '8',
},
  {name:'64',
  id:16,
  audiPath: 'https://gdurl.com/fS6t',
  text: '8',
},


{
  name: '65',
  id: 1,
  audiPath: 'https://gdurl.com/Ng8X',
  isOpend: false,
  
  },
{
  name: '66',
  id: 2,
  audiPath: 'https://gdurl.com/JXS1',

 
},
{
  name: '67',
  id: 3,
  audiPath: 'https://gdurl.com/BH5B',
 
},
{
  name: '68',
  id: 4,
  audiPath: 'https://gdurl.com/gj4T',
  text: '4',
},
{
  name: '69',
  id: 5,
  audiPath: 'https://gdurl.com/Od-u',
  text: '5',
},
{
  name: '70',
  id: 6,
  audiPath: 'https://gdurl.com/TRHk',
  text: '6',
},
{
  name: '71',
  id: 7,
  audiPath: 'https://gdurl.com/ssO4',
  text: '7',
},
{
  name: '72',
  id: 8,
  audiPath: 'https://gdurl.com/jSzD',
  text: '8',
},
{name:'73',
id:9,
audiPath: 'https://gdurl.com/YUUZ',
text: '8',
},
{name:'74',
id:10,
audiPath: 'https://gdurl.com/JbI1',
text: '8',
},
{name:'75',
id:11,
audiPath: 'https://gdurl.com/midt3',
text: '8',
},
{name:'76',
id:12,
audiPath: 'https://gdurl.com/EM1u',
text: '8',
},
{name:'77',
id:13,
audiPath: 'https://gdurl.com/NgME',
text: '8',
},
{name:'78',
id:14,
audiPath: 'https://gdurl.com/TSrq',
text: '8',

},
{name:'79',
id:15,
audiPath: 'https://gdurl.com/QABt',
text: '8',
},
{name:'',
id:16,
audiPath: 'https://gdurl.com/BoiN',
text: '8',
},
{
  name: '80',
  id: 7,
  audiPath: 'https://gdurl.com/MWZc',
  text: '7',
},
{
  name: '81',
  id: 8,
  audiPath: 'https://gdurl.com/HiXh',
  text: '8',
},
{name:'82',
id:9,
audiPath: 'https://gdurl.com/4nWL',
text: '8',
},
{name:'83',
id:10,
audiPath: 'https://gdurl.com/Tx7Z',
text: '8',
},
{name:'84',
id:11,
audiPath: 'https://gdurl.com/x2Wm',
text: '8',
},
{name:'85',
id:12,
audiPath: 'https://gdurl.com/1bT4',
text: '8',
},
{name:'86',
id:13,
audiPath: 'https://gdurl.com/96df',
text: '8',
},
{name:'87',
id:14,
audiPath: 'https://gdurl.com/rnf8',
text: '8',

},
{name:'88',
id:15,
audiPath: 'https://gdurl.com/9uY8',
text: '8',
},
{name:'89',
id:16,
audiPath: 'https://gdurl.com/vzAG',
text: '8',
},
{
  name: '90',
  id: 7,
  audiPath: 'https://gdurl.com/D97L',
  text: '7',
},
{
  name: '91',
  id: 8,
  audiPath: 'https://gdurl.com/XC9y',
  text: '8',
},
{name:'92',
id:9,
audiPath: 'https://gdurl.com/4dR5',
text: '8',
},
{name:'93',
id:10,
audiPath: 'https://gdurl.com/cjON',
text: '8',
},
{name:'94',
id:11,
audiPath: 'https://gdurl.com/Hri9',
text: '8',
},
{name:'95',
id:12,
audiPath: 'https://gdurl.com/9nJT',
text: '8',
},
{name:'96',
id:13,
audiPath: 'https://gdurl.com/N9PK',
text: '8',
},
{name:'97',
id:14,
audiPath: 'https://gdurl.com/oe-3',
text: '8',

},
{name:'98',
id:15,
audiPath: 'https://gdurl.com/bpNZ',
text: '8',
},
{name:'99',
id:16,
audiPath: 'https://gdurl.com/p0Zs',
text: '8',
},
{
  name: '100',
  id: 7,
  audiPath: 'https://gdurl.com/ar9Q',
  text: '7',
},
{
  name: '101',
  id: 8,
  audiPath: 'https://gdurl.com/k1Fa',
  text: '8',
},
{name:'102',
id:9,
audiPath: 'https://gdurl.com/n8GU',
text: '8',
},
{name:'103',
id:10,
audiPath: 'https://gdurl.com/Zy3r',
text: '8',
},
{name:'104',
id:11,
audiPath: 'https://gdurl.com/IuL1',
text: '8',
},
{name:'105',
id:12,
audiPath: 'https://gdurl.com/0zVf',
text: '8',
},
{name:'106',
id:13,
audiPath: 'https://gdurl.com/P8zm',
text: '8',
},
{name:'107',
id:14,
audiPath: 'https://gdurl.com/JPhQ',
text: '8',

},
{name:'108',
id:15,
audiPath: 'https://gdurl.com/POaz',
text: '8',
},
{name:'109',
id:16,
audiPath: 'https://gdurl.com/lV-3',
text: '8',
},
{
  name: '110',
  id: 7,
  audiPath: 'https://gdurl.com/aOdl',
  text: '7',
},
{
  name: '111',
  id: 8,
  audiPath: 'https://gdurl.com/5d9O',
  text: '8',
},
{name:'112',
id:9,
audiPath: 'https://gdurl.com/qm6h',
text: '8',
},
{name:'113',
id:10,
audiPath: 'https://gdurl.com/CV1a',
text: '8',
},
{name:'114',
id:11,
audiPath: 'https://gdurl.com/3ACz',
text: '8',
},
{name:'115',
id:12,
audiPath: 'https://gdurl.com/cf5D',
text: '8',
},
{name:'116',
id:13,
audiPath: 'https://gdurl.com/yZO3n',
text: '8',
},
{name:'117',
id:14,
audiPath: 'https://gdurl.com/qVKl',
text: '8',

},
{name:'118',
id:15,
audiPath: 'https://gdurl.com/U6Ik3',
text: '8',
},
{name:'119',
id:16,
audiPath: 'https://gdurl.com/Nj_L',
text: '8',
},
{
  name: '120',
  id: 7,
  audiPath: 'https://gdurl.com/NX-4',
  text: '7',
},
{
  name: '121',
  id: 8,
  audiPath: 'https://gdurl.com/Z9E2',
  text: '8',
},
{name:'122',
id:9,
audiPath: 'https://gdurl.com/Cp4Zm',
text: '8',
},
{name:'123',
id:10,
audiPath: 'https://gdurl.com/FRbu',
text: '8',
},
{name:'124',
id:11,
audiPath: 'https://gdurl.com/GDiL',
text: '8',
},
{name:'125',
id:12,
audiPath: 'https://gdurl.com/7Nzg',
text: '8',
},
{name:'126',
id:13,
audiPath: 'https://gdurl.com/GXAJr',
text: '8',
},
{name:'127',
id:14,
audiPath: 'https://gdurl.com/GuZQ',
text: '8',

},
{name:'128',
id:15,
audiPath: 'https://gdurl.com/MZdZ',
text: '8',
},
{name:'129',
id:16,
audiPath: 'https://gdurl.com/LIVe',
text: '8',
},
{
  name: '130',
  id: 7,
  audiPath: 'https://gdurl.com/1lRX',
  text: '7',
},
{
  name: '131',
  id: 8,
  audiPath: 'https://gdurl.com/22Cr',
  text: '8',
},
{name:'132',
id:9,
audiPath: 'https://gdurl.com/dkkl',
text: '8',
},
{name:'133',
id:10,
audiPath: 'https://gdurl.com/yBTs',
text: '8',
},
{name:'134',
id:11,
audiPath: 'https://gdurl.com/VWpV',
text: '8',
},
{name:'135',
id:12,
audiPath: 'https://gdurl.com/MnVS',
text: '8',
},
{name:'136',
id:13,
audiPath: 'https://gdurl.com/0VlF',
text: '8',
},
{name:'137',
id:14,
audiPath: 'https://gdurl.com/2WDU',
text: '8',

},
{name:'138',
id:15,
audiPath: 'https://gdurl.com/ftMa',
text: '8',
},
{name:'139',
id:16,
audiPath: 'https://gdurl.com/y_Z8',
text: '8',
},
{
  name: '140',
  id: 7,
  audiPath: 'https://gdurl.com/Srpv',
  text: '7',
},
{
  name: '141',
  id: 8,
  audiPath: 'https://gdurl.com/6EOT',
  text: '8',
},
{name:'142',
id:9,
audiPath: 'https://gdurl.com/gmMU',
text: '8',
},
{name:'143',
id:10,
audiPath: 'https://gdurl.com/eSu2',
text: '8',
},
{name:'144',
id:11,
audiPath: 'https://gdurl.com/xtZI',
text: '8',
},
{name:'145',
id:12,
audiPath: 'https://gdurl.com/7YUp',
text: '8',
},
{name:'146',
id:13,
audiPath: 'https://gdurl.com/7BQG',
text: '8',
},
{name:'147',
id:14,
audiPath: 'https://gdurl.com/e1Hf',
text: '8',

},
{name:'147',
id:15,
audiPath: 'https://gdurl.com/C8HT',
text: '8',
},
{name:'148',
id:16,
audiPath: 'https://gdurl.com/aIEp',
text: '8',
},
{name:'149',
id:16,
audiPath: 'https://gdurl.com/1lUr',
text: '8',
},
{name:'150',
id:16,
audiPath: 'https://gdurl.com/aGkA',
text: '8',
},
{name:'151',
id:16,
audiPath: 'https://gdurl.com/nAiO',
text: '8',
},
{name:'152',
id:16,
audiPath: 'https://gdurl.com/ASTh',
text: '8',
},
{name:'153',
id:16,
audiPath: 'https://gdurl.com/gD4W',
text: '8',
},
{name:'154',
id:16,
audiPath: 'https://gdurl.com/FpDB',
text: '8',
},
{name:'155',
id:16,
audiPath: 'https://gdurl.com/R0Mx',
text: '8',
},
{name:'156',
id:16,
audiPath: 'https://gdurl.com/dz76',
text: '8',
},
{name:'157',
id:16,
audiPath: 'https://gdurl.com/rhLQ',
text: '8',
},
{name:'158',
id:16,
audiPath: 'https://gdurl.com/xuxl',
text: '8',
},
{name:'159',
id:16,
audiPath: 'https://gdurl.com/bJMf',
text: '8',
},
{name:'160',
id:16,
audiPath: 'https://gdurl.com/xEx5',
text: '8',
},
{name:'161',
id:16,
audiPath: 'https://gdurl.com/ZoLf',
text: '8',
},
{name:'162',
id:16,
audiPath: 'https://gdurl.com/VizD',
text: '8',
},
{name:'163',
id:16,
audiPath: 'https://gdurl.com/lB5C',
text: '8',
},
{name:'164',
id:16,
audiPath: 'https://gdurl.com/2C0Y',
text: '8',
},
{name:'165',
id:16,
audiPath: 'https://gdurl.com/Vcwb',
text: '8',
},
{name:'166',
id:16,
audiPath: 'https://gdurl.com/YTZs',
text: '8',
},
{name:'167',
id:16,
audiPath: 'https://gdurl.com/KzU5',
text: '8',
},
{name:'168',
id:16,
audiPath: 'https://gdurl.com/sNTV',
text: '8',
},
{name:'169',
id:16,
audiPath: 'https://gdurl.com/PJJH',
text: '8',
},
{name:'170',
id:16,
audiPath: 'https://gdurl.com/lXVb',
text: '8',
},
{name:'171',
id:16,
audiPath: 'https://gdurl.com/EKcn',
text: '8',
},
{name:'172',
id:16,
audiPath: 'https://gdurl.com/v-ai',
text: '8',
},
{name:'173',
id:16,
audiPath: 'https://gdurl.com/c1Jl',
text: '8',
},
{name:'174',
id:16,
audiPath: 'https://gdurl.com/ApTJ',
text: '8',
},
{name:'175',
id:16,
audiPath: 'https://gdurl.com/lQWI',
text: '8',
},
{name:'176',
id:16,
audiPath: 'https://gdurl.com/y65M',
text: '8',
},
{name:'177',
id:16,
audiPath: 'https://gdurl.com/8veM',
text: '8',
},
{name:'178',
id:16,
audiPath: 'https://gdurl.com/b65I',
text: '8',
},
{name:'179',
id:16,
audiPath: 'https://gdurl.com/baVt',
text: '8',
},
{name:'180',
id:16,
audiPath: 'https://gdurl.com/b4Z0',
text: '8',
},
{name:'181',
id:16,
audiPath: 'https://gdurl.com/oWXP',
text: '8',
},
{name:'182',
id:16,
audiPath: 'https://gdurl.com/HIak',
text: '8',
},
{name:'183',
id:16,
audiPath: 'https://gdurl.com/sqVv',
text: '8',
},
{name:'184',
id:16,
audiPath: 'https://gdurl.com/RpeE',
text: '8',
},
{name:'185',
id:16,
audiPath: 'https://gdurl.com/u_Ld',
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
          <Text style={styles.title}>فتاوى المرأة المسلمة</Text>

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
