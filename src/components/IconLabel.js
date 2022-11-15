import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const IconLabel = ({ name, label, color }) => {
  return (
    <View style={styles.container}>
      <Icon
        name={name} type="ionicon" size={23} color={color} style={styles.iconStyle}/>
      <Text style={styles.labelStyle}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    marginRight: 11,
    alignItems: 'center',
  },

  labelStyle:{
    fontSize: 15,
    fontWeight: '500',
    color: '#d3d3d3',
    paddingBottom: 8,
    paddingTop:6,
    marginTop:10,
    textAlign: 'flex-start',
  },

  iconStyle:{
    marginRight:3,
    color: '#fff',
    marginTop:10,
    alignItems: 'flex-start',
  },
});

export default IconLabel;