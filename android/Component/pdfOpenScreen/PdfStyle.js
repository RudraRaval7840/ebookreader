import {StyleSheet} from 'react-native';

export default pdfStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  pdf: {
    flex: 1,
    width: '100%',
  },
  //Footer Start========================================
  footer: {
    backgroundColor: '#14161B',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 60,
    alignItems: 'center',
  },
  backBtn: {
    backgroundColor: '#a1a1a1',
    height: 35,
    width: 35,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 15,
    width: 15,
  },
  currentPage: {
    fontSize: 25,
    color: 'white',
  },
  ModalBtnmode: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    // textAlign: 'center',
    // alignSelf: 'center',
  },
  ModalBtnDownload: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    // backgroundColor: 'blue',
    width:'100%'
  },

  ThemImg: {
    height: 20,
    width: 20,
    alignSelf: 'center',
  },

  moreBtn: {
    height: 35,
    width: 35,
    // backgroundColor:'green',
    justifyContent: 'center',
    alignItems: 'center',
    right: 0,
  },
  
  //Footer End========================================

  darkMode: {
    backgroundColor: '#F5F6F8', // Dark background color
  },
  darkText: {
    color: '#14161B', // Text color in dark mode
  },
});
