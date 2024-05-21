// PDFViewer.js
import React, {useState, useEffect} from 'react';
import {
  View,
  Button,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
// import FilePickerManager from 'react-native-file-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const PDFViewer = () => {
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
      const updatedPDFs = [...selectedPDFs, pdfUri];
      await AsyncStorage.setItem('selectedPDFs', JSON.stringify(updatedPDFs));
      setSelectedPDFs(updatedPDFs);
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
    // Navigate to PDFViewerScreen passing the PDF URI as a parameter
    navigation.navigate('Getdata', {pdfUri});
  };

  const renderPDFItem = ({item}) => (
    <View
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        height:200,width:150,
        backgroundColor:'red'
      }}>
      <TouchableOpacity onPress={() => openPDF(item)}>
        <Text>{item}</Text>
      </TouchableOpacity>
      <Button title="Remove" onPress={() => removePDF(item)} />
    </View>
  );

  return (
    <View style={{flex: 1}}>
      {/* <Button title="Select PDF" onPress={selectPDF} /> */}
      <FlatList
        numColumns={2}
        columnWrapperStyle={styles.row}
        data={selectedPDFs}
        renderItem={renderPDFItem}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={<Text>No PDFs selected</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
});

export default PDFViewer;
