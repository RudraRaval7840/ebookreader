import {View, Text, Image, ToastAndroid, TouchableOpacity} from 'react-native';
import React from 'react';
import StartStyle from './StartStyle';
const StartPage = ({navigation}) => {
  return (
    <View style={StartStyle.container}>
      <Image
        source={require('../../../assets/Photo/frame.png')}
        style={StartStyle.MainImg}
      />
      <View style={StartStyle.TextSection}>
        <Text style={StartStyle.heading}>
          Learn language{'\n'} easily with books
        </Text>
        <Text style={StartStyle.heading1}>
          Read favorite books in their original {'\n'}language with parallel
          translation
        </Text>
      </View>
      <View>
        <TouchableOpacity style={StartStyle.btn} onPress={()=>navigation.navigate('Language')}>
          <Image
            source={require('../../../assets/Photo/bookicon.png')}
            style={StartStyle.btnimg}
          />
          <Text style={StartStyle.btnText}>Get started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StartPage;
