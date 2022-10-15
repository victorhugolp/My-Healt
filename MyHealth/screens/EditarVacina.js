import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  KeyboardAvoidingView,
} from 'react-native';
import Botao from '../components/Botao';
import RadioGroup from 'react-native-radio-buttons-group';
import {listaVacinas} from './Home';

const EditarVacina = props => {
  const {item} = props.route.params;

  const [radioButtons] = useState([
    {
      id: '1a. dose',
      label: '1a. dose',
      value: '1D',
      color: '#419ED7',
      size: 18,
      labelStyle: styles.radioRotulo,
      selected: item.dose === '1a. dose',
    },
    {
      id: '2a. dose',
      label: '2a. dose',
      value: '2D',
      color: '#419ED7',
      size: 18,
      labelStyle: styles.radioRotulo,
      selected: item.dose === '2a. dose',
    },
    {
      id: '3a. dose',
      label: '3a. dose',
      value: '3D',
      color: '#419ED7',
      size: 18,
      labelStyle: styles.radioRotulo,
      selected: item.dose === '3a. dose',
    },
    {
      id: 'Dose única',
      label: 'Dose única',
      value: 'DU',
      color: '#419ED7',
      size: 18,
      labelStyle: styles.radioRotulo,
      selected: item.dose === 'Dose única',
    },
  ]);

  const [data, setData] = useState(item.data);
  const [vacina, setVacina] = useState(item.vacina);
  const [dose, setDose] = useState(item.dose);
  const [proximaVacina, setProximaVacina] = useState(item.proximaVacina);
  const [confirmarExcluirVacina, setConfirmarExcluirVacina] = useState(false);

  const validateEditarVacina = () => {
    const i = listaVacinas.findIndex(v => v.vacina === vacina);

    listaVacinas[i] = {
      vacina,
      data,
      dose,
      imagem: require('../assets/imagens/comprovante.png'),
      proximaVacina,
    };

    props.navigation.navigate('MinhasVacinas');
  };

  const excluirVacina = () => {
    setConfirmarExcluirVacina(false);

    const i = listaVacinas.findIndex(v => v.vacina === vacina);

    listaVacinas[i] = null;

    props.navigation.navigate('MinhasVacinas');
  };

  const selecionaDose = doses => {
    const doseSelecionada = doses.find(s => s.selected);

    setDose(doseSelecionada.id);
  };

  return (
    <KeyboardAvoidingView style={styles.flex1}>
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={confirmarExcluirVacina}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.textoModal}>
                Tem certeza que deseja remover essa vacina?
              </Text>
              <View style={styles.botoesModal}>
                <Botao
                  texto="SIM"
                  onPress={excluirVacina}
                  styleBotao={styles.botaoSim}
                  styleTexto={styles.textoBotoes}
                />
                <Botao
                  texto="CANCELAR"
                  onPress={() => setConfirmarExcluirVacina(false)}
                  styleBotao={styles.botaoCancelar}
                  styleTexto={styles.textoBotoes}
                />
              </View>
            </View>
          </View>
        </Modal>

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

        <Botao texto="Salvar alterações" onPress={validateEditarVacina} />

        <TouchableOpacity
          onPress={() => setConfirmarExcluirVacina(true)}
          style={styles.botaoExcluir}>
          <Image
            style={styles.lixo}
            source={require('../assets/imagens/lixo.png')}
          />
          <Text style={styles.texto}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  flex1: {flex: 1},
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
  botaoExcluir: {
    backgroundColor: '#FD7979',
    paddingHorizontal: 10,
    paddingVertical: 6,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
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
  lixo: {
    marginRight: 10,
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderColor: '#B9DFDB',
    borderWidth: 3,
    padding: 20,
    alignItems: 'center',
  },
  textoModal: {
    width: 220,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 18,
    color: '#FD7979',
  },
  botoesModal: {
    flexDirection: 'row',
  },
  botaoSim: {
    backgroundColor: '#FD7979',
    width: 130,
    paddingHorizontal: 0,
  },
  botaoCancelar: {
    marginLeft: 10,
    backgroundColor: '#3F92C5',
    width: 130,
    paddingHorizontal: 0,
  },
  textoBotoes: {
    fontSize: 20,
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

export default EditarVacina;
