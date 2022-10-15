import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import Botao from '../components/Botao';
import {listaVacinas} from './Home';

const NovaVacina = props => {
  const [radioButtons] = useState([
    {
      id: '1a. dose',
      label: '1a. dose',
      value: '1D',
      color: '#419ED7',
      size: 18,
      labelStyle: styles.radioRotulo,
    },
    {
      id: '2a. dose',
      label: '2a. dose',
      value: '2D',
      color: '#419ED7',
      size: 18,
      labelStyle: styles.radioRotulo,
    },
    {
      id: '3a. dose',
      label: '3a. dose',
      value: '3D',
      color: '#419ED7',
      size: 18,
      labelStyle: styles.radioRotulo,
    },
    {
      id: 'Dose única',
      label: 'Dose única',
      value: 'DU',
      color: '#419ED7',
      size: 18,
      labelStyle: styles.radioRotulo,
    },
  ]);

  const [data, setData] = useState();
  const [vacina, setVacina] = useState();
  const [dose, setDose] = useState();
  const [proximaVacina, setProximaVacina] = useState();

  const validateNovaVacina = () => {
    listaVacinas.push({
      vacina,
      data,
      dose,
      imagem: require('../assets/imagens/comprovante.png'),
      proximaVacina,
    });
    props.navigation.navigate('MinhasVacinas');
  };

  const selecionaDose = doses => {
    const doseSelecionada = doses.find(s => s.selected);

    setDose(doseSelecionada.id);
  };

  return (
    <KeyboardAvoidingView style={styles.flex1}>
      <View style={styles.container}>
        <View style={styles.formulario}>
          <View style={styles.grupo}>
            <Text style={styles.rotulo}>Data de vacinação</Text>
            <TextInput
              style={styles.textInput}
              value={data}
              onChangeText={setData}
            />
            <Image
              style={styles.calendario}
              source={require('../assets/imagens/calendario.png')}
            />
          </View>

          <View style={styles.grupo}>
            <Text style={styles.rotulo}>Vacina</Text>
            <TextInput
              style={styles.textInput}
              value={vacina}
              onChangeText={setVacina}
            />
          </View>

          <View style={styles.grupo}>
            <Text style={styles.rotulo}>Dose</Text>

            <RadioGroup
              radioButtons={radioButtons}
              onPress={selecionaDose}
              layout="row"
              containerStyle={styles.radioGroup}
            />
          </View>

          <View style={styles.grupo}>
            <Text style={styles.rotulo}>Comprovante</Text>

            <Botao
              texto="Selecionar imagem..."
              styleBotao={styles.botaoComprovante}
              styleTexto={styles.rotulo}
            />
          </View>

          <Image
            style={styles.comprovante}
            source={require('../assets/imagens/comprovante.png')}
          />

          <View style={styles.grupo}>
            <Text style={styles.rotulo}>Próxima vacinação</Text>
            <TextInput
              style={styles.textInput}
              value={proximaVacina}
              onChangeText={setProximaVacina}
            />
            <Image
              style={styles.calendario}
              source={require('../assets/imagens/calendario.png')}
            />
          </View>
        </View>

        <Botao texto="Cadastrar" onPress={validateNovaVacina} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  flex1: {flex: 1},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 60,
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
  radioGroup: {
    flexWrap: 'wrap',
  },
  radioRotulo: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 18,
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
  calendario: {
    position: 'absolute',
    right: 10,
    bottom: 8,
    width: 20,
    height: 20,
  },
  botaoComprovante: {
    backgroundColor: '#419ED7',
    paddingVertical: 2,
  },
  comprovante: {
    height: 155,
    resizeMode: 'contain',
  },
});

export default NovaVacina;
