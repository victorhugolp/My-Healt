import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';

const CardVacina = props => {
  const {item} = props.item;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.navigation.navigate('EditarVacina', {item})}>
      <Text style={styles.vacina}>{item.vacina}</Text>
      <Text style={styles.dose}>{item.dose}</Text>
      <Text style={styles.data}>{item.data}</Text>
      <Image style={styles.image} source={item.imagem} />
      <Text style={styles.proximaVacina}>
        {item.proximaVacina
          ? 'Próxima dose em: ' + item.proximaVacina
          : 'Não há próxima dose'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: Dimensions.get('window').width / 2 - 20,
    margin: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  vacina: {
    fontFamily: 'AveriaLibre-Regular',
    color: '#419ED7',
    fontSize: 24,
  },
  dose: {
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: '#419ED7',
    color: '#FFFFFF',
    fontSize: 14,
    paddingHorizontal: 15,
  },
  data: {
    fontFamily: 'AveriaLibre-Regular',
    color: '#8B8B8B',
    fontSize: 14,
    paddingHorizontal: 15,
    marginVertical: 5,
  },
  text: {
    fontFamily: 'AveriaLibre-Regular',
    color: '#419ED7',
    fontSize: 20,
  },
  image: {
    height: 80,
    resizeMode: 'contain',
  },
  proximaVacina: {
    fontFamily: 'AveriaLibre-Regular',
    width: '100%',
    textAlign: 'right',
    color: '#FD7979',
    fontSize: 12,
  },
});

export default CardVacina;
