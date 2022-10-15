import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {sendPasswordResetEmail} from 'firebase/auth';
import {auth} from '../config/firebase';
import Botao from '../components/Botao';

const Senha = props => {
  const [email, setEmail] = useState();

  const enviarSenha = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('Email de redefinição enviado com sucesso!');
        props.navigation.pop();
      })
      .catch(() => {
        console.log('Erro ao solicitar a redefinição de senha');
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.grupo}>
        <Text style={styles.rotulo}>E-mail</Text>
        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <Botao texto="Recuperar senha" onPress={enviarSenha} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 30,
    backgroundColor: '#ADD4D0',
  },
  grupo: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  rotulo: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 24,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  textInput: {
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 40,
    color: '#419ED7',
  },
});

export default Senha;
