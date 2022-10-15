import React, {useState} from 'react';
import {
  ImageBackground,
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import Botao from '../components/Botao';
import {auth} from '../config/firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';

const Login = props => {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [erro, setErro] = useState();

  const validateLogin = () => {
    if (!email || !senha) {
      setErro(true);
    } else {
      signInWithEmailAndPassword(auth, email, senha)
        .then(userCredential => {
          console.log('Usuário autenticado com sucesso!');
          setErro(false);
          props.navigation.push('Home');
        })
        .catch(error => {
          console.log('Falha ao autenticar: ' + error.message);
        });
    }
  };

  const criarConta = () => {
    props.navigation.push('Cadastro');
  };

  const esqueciSenha = () => {
    props.navigation.push('Senha');
  };

  return (
    <ImageBackground
      source={require('../assets/imagens/background.png')}
      resizeMode="cover"
      style={styles.container}>
      <View style={styles.containerLogo}>
        <Image
          style={styles.logo}
          source={require('../assets/imagens/vacina.png')}
        />
        <Text style={styles.titulo}>MyHealth</Text>
      </View>

      <View>
        <Text style={styles.textoDestaque}>
          Controle as suas vacinas e fique seguro
        </Text>
      </View>

      <View style={styles.grupo}>
        <Text style={styles.texto}>E-mail</Text>
        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.grupo}>
        <Text style={styles.texto}>Senha</Text>
        <TextInput
          style={styles.textInput}
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
        />
        {erro && <Text style={styles.erro}>E-mail e/ou senha inválidos</Text>}
      </View>

      <Botao texto="Entrar" onPress={validateLogin} />
      <Botao
        texto="Criar minha conta"
        onPress={criarConta}
        styleBotao={styles.botaoCriarConta}
      />
      <Botao
        texto="Esqueci minha senha"
        onPress={esqueciSenha}
        styleBotao={styles.botaoSenha}
        styleTexto={styles.textoBotaoSenha}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 30,
  },
  containerLogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  titulo: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 42,
    textAlign: 'center',
    textDecorationLine: 'underline',
    color: '#419ED7',
  },
  textoDestaque: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 30,
    textAlign: 'center',
    color: '#419ED7',
  },
  grupo: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  texto: {
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
  erro: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 19,
    color: '#FD7979',
  },
  botaoCriarConta: {
    backgroundColor: '#419ED7',
  },
  botaoSenha: {
    backgroundColor: '#B0CCDE',
    paddingVertical: 2,
    fontSize: 20,
  },
  textoBotaoSenha: {
    fontSize: 20,
  },
});

export default Login;
