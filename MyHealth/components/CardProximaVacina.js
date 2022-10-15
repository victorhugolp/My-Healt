import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

const CardProximaVacina = props => {
  const {item} = props.item;

  return (
    <View style={styles.container}>
      <Text style={styles.vacina}>{item.vacina}</Text>
      <Text style={styles.proximaVacina}>{item.proximaVacina}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: Dimensions.get('window').width - 60,
    marginBottom: 10,
    paddingVertical: 5,
    paddingLeft: 10,
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  vacina: {
    fontFamily: 'AveriaLibre-Regular',
    color: '#419ED7',
    fontSize: 26,
  },
  proximaVacina: {
    fontFamily: 'AveriaLibre-Regular',
    color: '#8B8B8B',
    fontSize: 16,
    marginTop: -5,
  },
});

export default CardProximaVacina;
