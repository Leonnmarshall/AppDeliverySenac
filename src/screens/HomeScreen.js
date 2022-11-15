import React from 'react';
import { StyleSheet, Image, View, StatusBar, FlatList } from 'react-native';

import Header from '../components/Header';
import Card from '../components/RestaurantCard';

const restaurants = [
  {
    name: 'Beef Burger',
    categories: '70 Calories',
    delivery: '$12,00',
    image: require('../assets/burger.png'),
    id: 1,
  },
  {
    name: 'Pancakes',
    categories: '60 Calories',
    delivery: '$ 15,00',
    image: require('../assets/pancakes.png'),
    id: 2,
  },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header label="Delivery Senac"/> 
      <StatusBar barStyle="dark-content" />
      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          return <Card info={item} />;
        }}
        keyExtractor={(restaurant) => restaurant.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffafa',
    alignItems: 'center',
    marginTop: 10,
    fontFamily: "Harry Potter",
  },
});

export default HomeScreen;
