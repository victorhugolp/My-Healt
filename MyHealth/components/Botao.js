import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Botao = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{...styles.botao, ...props.styleBotao}}>
      <Text style={{...styles.texto, ...props.styleTexto}}>{props.texto}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  texto: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 24,
    color: '#FFFFFF',
  },
  botao: {
    backgroundColor: '#49B976',
    paddingHorizontal: 20,
    paddingVertical: 6,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Botao;
