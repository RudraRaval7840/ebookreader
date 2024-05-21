import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import Video from 'react-native-video';
import SpleshStyle from './SpleshStyle';
const SpleshScreen = props => {
  const [authLoaded, setAuthLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAuthLoaded(true);
    }, 3000);
  }, []);
  useEffect(() => {
    if (authLoaded) {
      props.navigation.replace('Start');
    }
  });
  return (
    <View style={SpleshStyle.container}>
    <Video source={require('../../../assets/video/new.mp4')}  
     style={SpleshStyle.Video}  
      />
      
    </View>
  );
};


export default SpleshScreen;
