import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

import IconLabel from './IconLabel';

const iconColor = '#ff8c00';
const RestaurantCard = ({ info }) => {
  const { name, categories, delivery, image } = info;
  return (
    <View style={styles.container}>   
      <View style={styles.cardContainer}>
        <Image style={styles.imageStyle} source={image} />
        <View style={styles.infoStyle}>
          <Text style={styles.titleStyle}>{name}</Text>
          <View style={styles.iconLabelStyle}>
            <IconLabel name="flame-outline" label={categories} color={iconColor}/>
          </View>
          <View>
            <Text style={styles.categoryStyle}>{delivery}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const deviceWidth = Math.round(Dimensions.get('window').width);
const radius = 30;
const styles = StyleSheet.create({
  cardContainer: {
    width: deviceWidth - 20,
    backgroundColor: '#fff',
    height: 130,
    borderRadius: 20,
    shadowColor: '#dcdcdc',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    elevation: 9,
    shadowRadius: 5,
    marginTop: 10,
  },
  imageStyle: {
    flex: 1,
    height: 90,
    width: 93,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    alignSelf: 'end',
    justifyContent: 'space-between',
    paddingBottom: 60,
    margin: 15,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'justify',
    marginTop: -90,
  },
  infoStyle: {
    marginHorizontal: 15,
  },
  categoryStyle: {
    color: '#ffa505',
    fontWeight: '600',
    fontSize:14,
    textAlign: 'flex-start',
    marginStart: 2,
    marginTop: -35,
  },
  iconLabelStyle: {
    marginTop: -10,
    marginStart: -4,
    flex: 20,
    height: 50,
  },
});

export default RestaurantCard;
