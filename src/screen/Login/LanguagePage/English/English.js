import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import EngStyle from './EngStyle';
import EngData from './EngData';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const English = ({navigation}) => {
  const [visibleItems, setVisibleItems] = useState(7); // State to track the number of initially visible items
  const [loading, setLoading] = useState(false); // State to track loading status

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => handleItemClick(item)}>
      <View style={EngStyle.itemContainer}>
        <Image source={{uri: item.imageUrl}} style={EngStyle.image} />
        <Text style={EngStyle.author}>by {item.author}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleItemClick = item => {
    navigation.navigate('PdfView', {pdfUrl: item.pdfUrl});
  };
// load Flatlist========
  const loadMoreItems = () => {
    setLoading(true); 
    setTimeout(() => {
      setVisibleItems(prevVisibleItems => prevVisibleItems+3); 
      setLoading(false); 
    }, 4000);
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
    <View style={EngStyle.container}>
      <View style={EngStyle.header}>
        <TouchableOpacity
          style={EngStyle.headerBack}
          onPress={() => navigation.goBack()}>
          <Ionicons color="white" name="arrow-back" size={30} />
        </TouchableOpacity>
        <Text style={EngStyle.headerText}>English pdf ebook</Text>
      </View>
      <FlatList
        data={EngData.slice(0, visibleItems)}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        onEndReached={loadMoreItems}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
      />
      <View id="Footer" style={EngStyle.fileaddBtn}>
        <TouchableOpacity
          style={EngStyle.addBtn}
          onPress={() => navigation.navigate('AddfilePage')}>
          <View
            style={{
              width: 160,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <FontAwesome color="white" name="file-text-o" size={24} />

            <Text style={EngStyle.filetext}>Add new book</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default English;
