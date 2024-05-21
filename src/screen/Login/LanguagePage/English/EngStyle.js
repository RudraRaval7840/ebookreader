import {StyleSheet} from 'react-native';

export default pagestyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#14161B',
  },
  //header start =========================
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  headerBack: {
    // height:30,
    // width:30,
    // backgroundColor:'#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 20,
    position: 'absolute',
    left: 3,
  },
  headerText: {
    color: '#83899F',
    fontSize: 23,
  },
  //header end ============================
  // Flatlist start ==========================

  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    // borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    // padding: 10,
    height: 250,
    // width:170,
    // backgroundColor:'red'
  },

  image: {
    width: 150,
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  author: {
    fontSize: 16,
    color: '#83899F',
    // marginTop: 5,
  },

  // Flatlist end ============================
  //Footer start =============================

  fileaddBtn: {
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    // position:'absolute',
    // bottom: 40,
  },
  addBtn: {
    width: '60%',
    height: 50,
    backgroundColor: '#8C31FF',
    borderRadius: 12,
    borderWidth: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    
  },
  AddFileImg: {
    height: 35,
    width: 35,
    alignSelf: 'center',
  },
  filetext: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'white',
  },

  //Footer end =============================
});
