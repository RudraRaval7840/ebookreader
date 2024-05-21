import React, { useState, } from 'react';
import {View, Text, FlatList, TouchableOpacity, Image, ActivityIndicator} from 'react-native';
import GujStyle from './GujStyle';
import GujData from './GujData';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Gujarati = ({navigation}) => {
  const [visibleItems, setVisibleItems] = useState(7); // State to track the number of initially visible items
  const [loading, setLoading] = useState(false); // State to track loading status

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => handleItemClick(item)}>
      <View style={GujStyle.itemContainer}>
        <Image source={{uri: item.imageUrl}} style={GujStyle.image} />
        <Text style={GujStyle.author}>by {item.author}</Text>
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
    <View style={GujStyle.container}>
      <View style={GujStyle.header}>
        <TouchableOpacity
          style={GujStyle.headerBack}
          onPress={() => navigation.goBack()}>
          <Ionicons color="white" name="arrow-back" size={30} />
        </TouchableOpacity>
        <Text style={GujStyle.headerText}>Gujarati pdf ebook</Text>
      </View>
      <FlatList
        data={GujData.slice(0, visibleItems)}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        onEndReached={loadMoreItems}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
      />
      <View id="Footer" style={GujStyle.fileaddBtn}>
        <TouchableOpacity
          style={GujStyle.addBtn}
          onPress={() => navigation.navigate('AddfilePage')}>
          <View
            style={{
              width: 160,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <FontAwesome color="white" name="file-text-o" size={24} />

            <Text style={GujStyle.filetext}>Add new book</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Gujarati;
