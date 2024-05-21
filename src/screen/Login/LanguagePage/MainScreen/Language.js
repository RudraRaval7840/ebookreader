

import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import LangeStyle from './LangeStyle';

const Language = ({navigation}) => {

  return (
    <View style={LangeStyle.container}>
      <View style={LangeStyle.header}>
        <TouchableOpacity
          style={LangeStyle.backBtn}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../../assets/Photo/Vector.png')}
            style={LangeStyle.img}
          />
        </TouchableOpacity>
        <Text style={LangeStyle.headerText}>
          What language are you {'\n'}studying now?
        </Text>
      </View>
      <View
        style={{justifyContent: 'space-around', height: 250, marginTop: 25}}>
        <TouchableOpacity
          style={LangeStyle.allbtn}
          onPress={() => navigation.navigate('English')}>
          <View style={LangeStyle.langu}>
            <Image
              source={require('../../../../assets/Photo/Flags.png')}
              style={LangeStyle.flagImg}
            />
            <Text style={LangeStyle.BtnText}>English</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={LangeStyle.allbtn}
          onPress={() => navigation.navigate('Gujarati')}>
          <View style={LangeStyle.langu}>
            <Image
              source={require('../../../../assets/Photo/Flags2.png')}
              style={LangeStyle.flagImg}
            />
            <Text style={LangeStyle.BtnText}>Gujarati</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={LangeStyle.allbtn}
          onPress={() => navigation.navigate('Hindi')}>
          <View style={LangeStyle.langu}>
            <Image
              source={require('../../../../assets/Photo/Flags3.png')}
              style={LangeStyle.flagImg}
            />
            <Text style={LangeStyle.BtnText}>Hindi</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={LangeStyle.allbtn}
          onPress={() => navigation.navigate('Maths')}>
          <View style={LangeStyle.langu}>
            <Image
              source={require('../../../../assets/Photo/Flags4.png')}
              style={LangeStyle.flagImg}
            />
            <Text style={LangeStyle.BtnText}>Maths</Text>
          </View>
        </TouchableOpacity>

       
      </View>
    </View>
  );
};

export default Language;
