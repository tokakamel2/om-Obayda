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

import PlayerScreen from 'react-native-sound-playerview';

import { ScrollView } from 'react-native-gesture-handler';

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [
        {
          name: 'كيف أفوز برمضان',
          id: 1,
          audiPath: 'https://gdurl.com/LF_E',
          isOpend: false,
          
          },
          {
            name: '1استغلال شهر رمضان',
            id: 2,
            audiPath: 'https://gdurl.com/2i-b',
            isOpend: false,
            
            },
            {
              name: 'استغلال شهر رمضان2',
              id: 3,
              audiPath: 'https://gdurl.com/37Mk',
              isOpend: false,
              
              },
              {
                name: 'استغلال شهر رمضان3',
                id: 4,
                audiPath: 'https://gdurl.com/MoNq',
                isOpend: false,
                
                },
                {
                  name: 'الجرأة على الله في المعاصي1',
                  id: 5,
                  audiPath: 'https://gdurl.com/jKqf',
                  isOpend: false,
                  
                  },

                  {
                    name: 'الجرأة على الله في المعاصي2',
                    id: 6,
                    audiPath: 'https://gdurl.com/UbWe',
                    isOpend: false,
                    
                    },
                    {
                      name: 'كيف أحقق التقوى في رمضان',
                      id: 7,
                      audiPath: 'https://gdurl.com/5NmI',
                      isOpend: false,
                      
                      },
                      {
                        name: 'ليلة القدر اغتنميها',
                        id: 8,
                        audiPath: 'https://gdurl.com/3Al4',
                        isOpend: false,
                        
                        },
                        {
                          name: 'فقه الصيام',
                          id: 9,
                          audiPath: 'https://gdurl.com/o_3b',
                          isOpend: false,
                          
                          },         
                          {
                            name: 'علاج الفتور في رمضان',
                            id: 9,
                            audiPath: 'https://gdurl.com/8DeK',
                            audiPath2:'https://gdurl.com/oKil',
                            isOpend: false,
                            
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
          <Text style={styles.title}>كيف أفوز برمضان</Text>
          <ScrollView>
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
