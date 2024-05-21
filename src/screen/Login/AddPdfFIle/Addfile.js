import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
// import FilePickerManager from 'react-native-file-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import afstyle from './afstyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Addfile = () => {
  const navigation = useNavigation();
  const [selectedPDFs, setSelectedPDFs] = useState([]);

  useEffect(() => {
    loadSelectedPDFs();
  }, []);

  const loadSelectedPDFs = async () => {
    try {
      const storedPDFs = await AsyncStorage.getItem('selectedPDFs');
      if (storedPDFs) {
        setSelectedPDFs(JSON.parse(storedPDFs));
      }
    } catch (error) {
      console.log('Error loading selected PDFs:', error);
    }
  };

  const saveSelectedPDFs = async pdfUri => {
    try {
      // Check if the item already exists in the selectedPDFs array
      if (!selectedPDFs.includes(pdfUri)) {
        const updatedPDFs = [...selectedPDFs, pdfUri];
        await AsyncStorage.setItem('selectedPDFs', JSON.stringify(updatedPDFs));
        setSelectedPDFs(updatedPDFs);
      } else {
        console.log('PDF already selected');
      }
    } catch (error) {
      console.log('Error saving selected PDFs:', error);
    }
  };

  const removePDF = async pdfUri => {
    try {
      const updatedPDFs = selectedPDFs.filter(item => item !== pdfUri);
      await AsyncStorage.setItem('selectedPDFs', JSON.stringify(updatedPDFs));
      setSelectedPDFs(updatedPDFs);
    } catch (error) {
      console.log('Error removing PDF:', error);
    }
  };

  // const selectPDF = () => {
  //   FilePickerManager.showFilePicker(null, response => {
  //     if (response.didCancel) {
  //       console.log('User cancelled file picker');
  //     } else if (response.error) {
  //       console.log('FilePickerManager Error: ', response.error);
  //     } else {
  //       saveSelectedPDFs(response.path);
  //     }
  //   });
  // };

  const openPDF = pdfUri => {
    navigation.navigate('Getdata', {pdfUri});
  };

  const renderPDFItem = ({item}) => {
    const fileName = item.split('/').pop();
    return (
      <View style={afstyle.flatlistitem}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <TouchableOpacity onPress={() => openPDF(item)}>
            <FontAwesome color="black" name="file-pdf-o" size={45} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openPDF(item)}>
            <Text style={{textAlign: 'center'}}>{fileName}</Text>
          </TouchableOpacity>
        </View>
        <View style={{position: 'absolute', bottom: 20}}>
          <Button title="Remove" onPress={() => removePDF(item)} />
        </View>
      </View>
    );
  };

  return (
    <View style={afstyle.container}>
      <TouchableOpacity style={afstyle.backBtn} onPress={()=>navigation.goBack()}>
        <Ionicons color="white" name="arrow-back" size={30} />
      </TouchableOpacity>
      {selectedPDFs.length === 0 && (
        <View id="booktext">
          <Image
            source={require('../../../assets/Photo/bookimg.png')}
            style={afstyle.bookImg}
          />
          <Text style={afstyle.heading}>
            Upload your favorite book and {'\n'}start your journey!
          </Text>
          <Text style={afstyle.Text}>You can upload book in .EPUB format</Text>
        </View>
      )}

      <View>
        <FlatList
          numColumns={2}
          columnWrapperStyle={styles.row}
          data={selectedPDFs}
          renderItem={renderPDFItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <View style={afstyle.addbtn}>
        {/* <TouchableOpacity style={afstyle.addfileBtn} onPress={selectPDF}>
          <View
            style={{
              width: 190,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Image
              source={require('../../../assets/Photo/plus.png')}
              style={afstyle.btnImg}
            />
            <Text style={afstyle.btnText}>Add new. EPUB book</Text>
          </View>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
});

export default Addfile;
