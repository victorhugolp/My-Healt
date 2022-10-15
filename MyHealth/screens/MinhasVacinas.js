import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Image, FlatList} from 'react-native';
import CardVacina from '../components/CardVacina';
import Botao from '../components/Botao';
import {listaVacinas} from './Home';

const MinhasVacinas = props => {
  const [pesquisar, setPesquisar] = useState('');

  const vacinasPesquisadas =
    pesquisar.trim() === ''
      ? listaVacinas
      : listaVacinas.filter(vacina => vacina.vacina.includes(pesquisar));

  const novaVacina = () => {
    props.navigation.navigate('NovaVacina');
  };

  return (
    <View style={styles.container}>
      <View style={styles.grupo}>
        <TextInput
          style={styles.textInput}
          value={pesquisar}
          onChangeText={setPesquisar}
          placeholder="PESQUISAR VACINA..."
          placeholderTextColor="#8B8B8B"
        />
        <Image
          style={styles.iconePesquisar}
          source={require('../assets/imagens/pesquisar.png')}
        />
      </View>

      <FlatList
        data={vacinasPesquisadas}
        renderItem={item => (
          <CardVacina item={item} navigation={props.navigation} />
        )}
        numColumns={2}
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
  grupo: {
    width: '90%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  textInput: {
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 35,
    color: '#419ED7',
    padding: 0,
    paddingLeft: 40,
  },
  iconePesquisar: {
    position: 'absolute',
    resizeMode: 'contain',
    left: 10,
    bottom: 6,
    width: 24,
    height: 24,
  },
});

export default MinhasVacinas;
