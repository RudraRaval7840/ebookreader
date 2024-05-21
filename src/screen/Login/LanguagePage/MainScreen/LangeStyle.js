import {StyleSheet} from 'react-native';

export default Language = StyleSheet.create({
  container: {
    backgroundColor: '#14161B',
    height: '100%',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    alignItems: 'center',
    marginTop: 40,
  },
  backBtn: {
    backgroundColor: '#a1a1a1',
    height: 35,
    width: 35,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
  },
  img: {
    height: 15,
    width: 15,
  },
  allbtn: {
    height: 55,
    width: 350,
    // backgroundColor: 'red',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#313843',
    justifyContent: 'center',
    // flexDirection:'row'
  },
  BtnText: {
    color: 'white',
    marginLeft: 20,
    fontSize: 17,
  },
  langu: {
    flexDirection: 'row',
    marginLeft: 20,
    // backgroundColor: 'red',
  },
  flagImg:{
    alignSelf:'center'
  }
});
