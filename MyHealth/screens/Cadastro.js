import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import {auth} from '../config/firebase';
import Botao from '../components/Botao';
import {createUserWithEmailAndPassword} from 'firebase/auth';

const Cadastro = props => {
  const [radioButtons] = useState([
    {
      id: 'Masculino',
      label: 'Masculino',
      value: 'M',
      color: '#419ED7',
      labelStyle: styles.rotulo,
    },
    {
      id: 'Feminino',
      label: 'Feminino',
      value: 'F',
      color: '#419ED7',
      labelStyle: styles.rotulo,
    },
  ]);

  const [nome, setNome] = useState();
  const [sexo, setSexo] = useState();
  const [dataNascimento, setDataNascimento] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [repetirSenha, setRepetirSenha] = useState();
  const [erro, setErro] = useState();

  const validateCadastrar = () => {
    if (senha !== repetirSenha) {
      setErro(true);
    } else {
      createUserWithEmailAndPassword(auth, email, senha)
        .then(userCredential => {
          console.log('Usuário adicionado com sucesso!');
          props.navigation.pop();
        })
        .catch(error => {
          console.log('Ocorreu um erro ao cadastrar usuário');
          console.log('Erro: ' + error.message);
        });
    }
  };

  const selecionaSexo = sexos => {
    const sexoSelecionado = sexos.find(s => s.selected);

    setSexo(sexoSelecionado.id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formulario}>
        <View style={styles.grupo}>
          <Text style={styles.rotulo}>Nome completo</Text>
          <TextInput
            style={styles.textInput}
            value={nome}
            onChangeText={setNome}
          />
        </View>

        <View style={styles.grupo}>
          <Text style={styles.rotulo}>Sexo</Text>

          <RadioGroup
            radioButtons={radioButtons}
            onPress={selecionaSexo}
            layout="row"
          />
        </View>

        <View style={styles.grupo}>
          <Text style={styles.rotulo}>Data nascimento</Text>
          <TextInput
            style={styles.textInput}
            value={dataNascimento}
            onChangeText={setDataNascimento}
          />
          <Image
            style={styles.calendario}
            source={require('../assets/imagens/calendario.png')}
          />
        </View>

        <View style={styles.grupo}>
          <Text style={styles.rotulo}>E-mail</Text>
          <TextInput
            style={styles.textInput}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.grupo}>
          <Text style={styles.rotulo}>Senha</Text>
          <TextInput
            style={styles.textInput}
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.grupo}>
          <Text style={styles.rotulo}>Repetir senha</Text>
          <TextInput
            style={styles.textInput}
            value={repetirSenha}
            onChangeText={setRepetirSenha}
            secureTextEntry={true}
          />
          {erro && <Text style={styles.erro}>Senha não confere!</Text>}
        </View>
      </View>

      <Botao texto="Cadastrar" onPress={validateCadastrar} />
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
  formulario: {
    width: '100%',
    alignItems: 'center',
  },
  grupo: {
    width: '90%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 5,
  },
  rotulo: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  textInput: {
    fontFamily: 'AveriaLibre-Regular',
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 35,
    color: '#419ED7',
    padding: 0,
    paddingLeft: 10,
  },
  erro: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 16,
    color: '#FD7979',
  },
  texto: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 24,
    color: '#FFFFFF',
  },
  calendario: {
    position: 'absolute',
    right: 10,
    bottom: 8,
    width: 20,
    height: 20,
  },
});

export default Cadastro;
