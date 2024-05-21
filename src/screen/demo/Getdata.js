// PDFViewerScreen.js
import React from 'react';
import { Text, View } from 'react-native';
import Pdf from 'react-native-pdf';

const PDFViewerScreen = ({ route }) => {
  const { pdfUri } = route.params;

  return (
    <View style={{ flex: 1 }}>
     
      <Pdf
        source={{ uri: pdfUri }}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={(error) => {
          console.log('Error while displaying PDF:', error);
        }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default PDFViewerScreen;
