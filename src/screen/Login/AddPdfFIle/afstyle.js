import {StyleSheet} from 'react-native';

export default AddFileStyle = StyleSheet.create({
  container: {
    backgroundColor: '#14161B',
    height: '100%',
    justifyContent: 'center',
    // alignItems:'center',
  },
  backBtn:{
    position:'absolute',
    top:30,
    left:25
  },
  bookImg: {
    height: 150,
    width: 150,
    alignSelf: 'center',
  },
  heading: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    marginVertical: 10,
  },
  Text: {
    color: '#83899F',
    fontSize: 19,
    fontWeight: '300',
    marginVertical: 10,
    textAlign: 'center',
  },
  addfileBtn: {
    width: 280,
    height: 55,
    backgroundColor: '#8C31FF',
    borderRadius: 12,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
  },
  btnImg: {
    height: 30,
    width: 30,
  },
  btnText: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
  addbtn: {
    position: 'absolute',
    bottom: 60,
    alignSelf: 'center',
  },
  flatlistitem: {
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    height: 210,
    width: 160,
    backgroundColor: '#D3D8E2',
    margin: 15,
    borderRadius:12,
    
  },
 
});
