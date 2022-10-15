import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import CardProximaVacina from '../components/CardProximaVacina';
import Botao from '../components/Botao';
import {listaVacinas} from './Home';

const ProximasVacinas = props => {
  const proximasVacinas = listaVacinas.filter(
    vacina => vacina.proximaVacina.trim() !== '',
  );

  const novaVacina = () => {
    props.navigation.navigate('NovaVacina');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={proximasVacinas}
        renderItem={item => <CardProximaVacina item={item} />}
      />

      <Botao texto="Nova Vacina" onPress={novaVacina} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 30,
    backgroundColor: '#ADD4D0',
  },
});

export default ProximasVacinas;
