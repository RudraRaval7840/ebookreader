import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SpleshScreen from '../Login/SpleshScreen/SpleshScreen';
import StartPage from '../Login/StratingPage/StartPage';
import Language from '../Login/LanguagePage/MainScreen/Language';
import English from '../Login/LanguagePage/English/English';
import Hindi from '../Login/LanguagePage/Hindi/Hindi';
import Gujarati from '../Login/LanguagePage/Gujarati/Gujarati';
import Maths from '../Login/LanguagePage/Maths/Maths';
import Addfile from '../Login/AddPdfFIle/Addfile';
import Demo from '../demo/Demo';
import Getdata from '../demo/Getdata';
import StorageScreen from '../demo/Demo';
import DisplayScreen from '../demo/Getdata';
import Pdfview from '../demo/Pdfview';
import PdfView from '../../../android/Component/pdfOpenScreen/PdfView';
// import PdfView from '../Login/LanguagePage/English/PdfView';

const Stack = createNativeStackNavigator();

const AppNavigater = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splesh"
          component={SpleshScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Start"
          component={StartPage}
          options={{headerShown: false}}
        />

        {/*============ language pages ==============*/}

         <Stack.Screen
          name="Language"
          component={Language}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="English"
          component={English}
          options={{headerShown: false}}
        />
       <Stack.Screen
          name="Maths"
          component={Maths}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Hindi"
          component={Hindi}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Gujarati"
          component={Gujarati}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PdfView"
          component={PdfView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddfilePage"
          component={Addfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Getdata"
          component={Getdata}
          options={{headerShown: false}}
        />
        {/*============= this file create for testing  ==============*/}

        <Stack.Screen
          name="Demo"
          component={Demo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Pdfview"
          component={Pdfview}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigater;
