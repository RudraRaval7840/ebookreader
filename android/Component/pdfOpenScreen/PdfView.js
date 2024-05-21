import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import Pdf from 'react-native-pdf';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PdfStyle from './PdfStyle';
import RNFetchBlob from 'rn-fetch-blob';

const PdfView = ({route, navigation}) => {
  const {pdfUrl} = route.params;
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [searchModalVisible, setSearchModalVisible] = useState(false);
  const [downloadedFilePath, setDownloadedFilePath] = useState(null);
  const pdfRef = useRef(null); // Initialize the ref

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    setModalVisible(!modalVisible);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const toggleSearchModal = () => {
    setSearchModalVisible(!searchModalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleDownload = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission Required',
          message: 'App needs access to your storage to download the PDF.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        const response = await RNFetchBlob.config({
          fileCache: true,
          appendExt: 'pdf',
        }).fetch('GET', pdfUrl);

        if (response.respInfo.status === 200) {
          const filePath = response.path();
          const destPath = `${RNFetchBlob.fs.dirs.DownloadDir}/downloaded_pdf.pdf`;
          await RNFetchBlob.fs.mv(filePath, destPath);
          setDownloadedFilePath(destPath);
          Alert.alert('Success', `PDF downloaded at: ${destPath}`);
        } else {
          Alert.alert('Download Failed', 'Failed to download the PDF.');
        }
      } else {
        Alert.alert(
          'Permission Denied',
          'You need to grant storage permission to download the PDF.',
        );
      }
    } catch (error) {
      console.error('Download Error:', error);
      Alert.alert('Download Failed', 'Failed to download the PDF.');
    }
  };

  // const handleSearch = () => {
  //   if (searchText.trim() !== '' && pdfRef.current) {
  //     pdfRef.current.setNativeProps({ searchText: searchText.trim() });
  //     pdfRef.current.jumpToPage(1); // Start searching from the first page
  //     // Close the search modal after initiating the search
  //     setSearchModalVisible(false);
  //   }
  // };

  return (
    <View style={[PdfStyle.container, isDarkMode ? PdfStyle.darkMode : null]}>
      <Pdf
        ref={pdfRef}
        trustAllCerts={false}
        source={{uri: pdfUrl}}
        style={PdfStyle.pdf}
        onLoadComplete={(numberOfPages, filePath) => {
          setTotalPage(numberOfPages);
        }}
        onPageChanged={(page, numberOfPages) => {
          setCurrentPage(page);
        }}
        onError={error => {
          console.error('PDF Error:', error);
        }}
        onPressLink={uri => {
          console.log('Link pressed:', uri);
        }}
      />

      <View style={[PdfStyle.footer, isDarkMode ? PdfStyle.darkMode : null]}>
        <TouchableOpacity
          style={PdfStyle.backBtn}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../src/assets/Photo/Vector.png')}
            style={PdfStyle.img}
          />
        </TouchableOpacity>
        <Text
          style={[PdfStyle.currentPage, isDarkMode ? PdfStyle.darkText : null]}>
          {currentPage} from {totalPage}
        </Text>

        <TouchableOpacity style={PdfStyle.moreBtn} onPress={toggleModal}>
          <Fontisto
            name="more-v-a"
            size={25}
            color={isDarkMode ? 'black' : 'white'}
          />
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}>
          <TouchableWithoutFeedback onPress={closeModal}>
            <View style={styles.modalOverlay} />
          </TouchableWithoutFeedback>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={toggleSearchModal}>
              <Ionicons name="search-outline" size={25} color="black" />
              <Text style={styles.modalButtonText}>Find</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleDownload}>
              <Ionicons name="download-outline" size={25} color="black" />
              <Text style={styles.modalButtonText}>Download</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={true}
          visible={searchModalVisible}
          onRequestClose={toggleSearchModal}>
          <TouchableWithoutFeedback onPress={toggleSearchModal}>
            <View style={styles.modalOverlay} />
          </TouchableWithoutFeedback>
          <View style={styles.searchModalContent}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search text..."
              value={searchText}
              onChangeText={setSearchText}
            />
            <TouchableOpacity
              style={styles.searchButton}
              // onPress={handleSearch}
              >
              <Ionicons name="search-outline" size={25} color="black" />
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    position: 'absolute',
    bottom: 60,
    right: 0,
    height: 80,
    width: 170,
    backgroundColor: 'white',
  },
  modalButton: {
    backgroundColor: 'rgba(250,250, 250, 0.2)',
    flexDirection: 'row',
    width: '100%',
    flex: 1,
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingLeft: 8,
  },
  modalButtonText: {
    color: 'black',
    fontWeight: '400',
    fontSize: 18,
    marginLeft: 8,
  },
  searchModalContent: {
    position: 'absolute',
    bottom: 1,
    right: 0,
    height: 100,
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'black',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  searchButton: {
    padding: 5,
  },
});

export default PdfView;
