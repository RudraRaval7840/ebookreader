import React, { useState } from 'react';
import {View, Text, FlatList, TouchableOpacity, Image, ActivityIndicator,} from 'react-native';
import MathsStyle from './MathsStyle';
import MathsData from './MathsData';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Maths = ({navigation}) => {

  const [visibleItems, setVisibleItems] = useState(7); // State to track the number of initially visible items
  const [loading, setLoading] = useState(false); // State to track loading status

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => handleItemClick(item)}>
      <View style={MathsStyle.itemContainer}>
        <Image source={{uri: item.imageUrl}} style={MathsStyle.image} />
        <Text style={MathsStyle.author}>by {item.author}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleItemClick = item => {
    navigation.navigate('PdfView', {pdfUrl: item.pdfUrl});
  };

// load Flatlist========
const loadMoreItems = () => {
  setLoading(true); // Set loading to true to show loader
  setTimeout(() => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 8); // Increase the visible items count by 10 after a delay (simulating loading)
    setLoading(false); // Set loading to false after items are loaded
  }, 5000); // Simulated delay of 1 second
  return (
    <View>
      <Text style={{color: 'white'}}>rudra</Text>
    </View>
  );
};

const renderFooter = () => {
  return loading ? (
    <ActivityIndicator
      style={{marginVertical: 20}}
      size="large"
      color="blue"
    />
  ) : null;
};
// load Flatlist========

  return (
    <View style={MathsStyle.container}>
      <View style={MathsStyle.header}>
        <TouchableOpacity
          style={MathsStyle.headerBack}
          onPress={() => navigation.goBack()}>
          <Ionicons color="white" name="arrow-back" size={30} />
        </TouchableOpacity>
        <Text style={MathsStyle.headerText}>Maths pdf ebook</Text>
      </View>
      <FlatList
        data={MathsData.slice(0, visibleItems)}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        onEndReached={loadMoreItems}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
      />
      <View id="Footer" style={MathsStyle.fileaddBtn}>
        <TouchableOpacity
          style={MathsStyle.addBtn}
          onPress={() => navigation.navigate('AddfilePage')}>
          <View
            style={{
              width: 160,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
          
          <FontAwesome color="white" name="file-text-o" size={24} />

            <Text style={MathsStyle.filetext}>Add new book</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Maths;
