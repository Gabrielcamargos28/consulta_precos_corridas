// app/(tabs)/index.tsx

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
  Modal,
  FlatList,
  SafeAreaView,
  TextInput,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  tabelaPrecos,
  getOrigens,
  getDestinos,
  formatarPreco,
  type Viagem
} from '../../constants/tabelaPrecos';

export default function HomeScreen() {
  const [origem, setOrigem] = useState<string>('');
  const [destino, setDestino] = useState<string>('');
  const [resultados, setResultados] = useState<Viagem[]>([]);
  const [mostrarTodos, setMostrarTodos] = useState<boolean>(true);
  const [modalOrigemVisible, setModalOrigemVisible] = useState<boolean>(false);
  const [modalDestinoVisible, setModalDestinoVisible] = useState<boolean>(false);

  // Estados para pesquisa
  const [origemPesquisa, setOrigemPesquisa] = useState<string>('');
  const [destinoPesquisa, setDestinoPesquisa] = useState<string>('');
  const [mostrarSugestoesOrigem, setMostrarSugestoesOrigem] = useState<boolean>(false);
  const [mostrarSugestoesDestino, setMostrarSugestoesDestino] = useState<boolean>(false);

  const origens = getOrigens();
  const destinos = getDestinos();

  // Filtrar sugestões baseado na pesquisa
  const origensfiltradas = origens.filter(item =>
      item.toLowerCase().includes(origemPesquisa.toLowerCase())
  );

  const destinosFilterdos = destinos.filter(item =>
      item.toLowerCase().includes(destinoPesquisa.toLowerCase())
  );

  useEffect(() => {
    setResultados(tabelaPrecos);
  }, []);

  const buscarViagem = () => {
    if (!origem.trim() && !destino.trim()) {
      setResultados(tabelaPrecos);
      setMostrarTodos(true);
      return;
    }

    const resultadosFiltrados = tabelaPrecos.filter(viagem => {
      const origemMatch = !origem.trim() || viagem.origem.toLowerCase().includes(origem.toLowerCase());
      const destinoMatch = !destino.trim() || viagem.destino.toLowerCase().includes(destino.toLowerCase());
      return origemMatch && destinoMatch;
    });

    setResultados(resultadosFiltrados);
    setMostrarTodos(false);

    if (resultadosFiltrados.length === 0) {
      Alert.alert(
          'Nenhum resultado',
          'Não foram encontradas viagens para os critérios selecionados.'
      );
    }
  };

  const limparBusca = () => {
    setOrigem('');
    setDestino('');
    setOrigemPesquisa('');
    setDestinoPesquisa('');
    setResultados(tabelaPrecos);
    setMostrarTodos(true);
    setMostrarSugestoesOrigem(false);
    setMostrarSugestoesDestino(false);
  };

  const selecionarOrigem = (origemSelecionada: string) => {
    setOrigem(origemSelecionada);
    setOrigemPesquisa('');
    setModalOrigemVisible(false);
    setMostrarSugestoesOrigem(false);
  };

  const selecionarDestino = (destinoSelecionado: string) => {
    setDestino(destinoSelecionado);
    setDestinoPesquisa('');
    setModalDestinoVisible(false);
    setMostrarSugestoesDestino(false);
  };

  const handleOrigemChange = (text: string) => {
    setOrigemPesquisa(text);
    setOrigem(text);
    setMostrarSugestoesOrigem(text.length > 0);
  };

  const handleDestinoChange = (text: string) => {
    setDestinoPesquisa(text);
    setDestino(text);
    setMostrarSugestoesDestino(text.length > 0);
  };

  const selecionarSugestaoOrigem = (sugestao: string) => {
    setOrigem(sugestao);
    setOrigemPesquisa('');
    setMostrarSugestoesOrigem(false);
  };

  const selecionarSugestaoDestino = (sugestao: string) => {
    setDestino(sugestao);
    setDestinoPesquisa('');
    setMostrarSugestoesDestino(false);
  };

  const solicitarViagem = (viagem: Viagem) => {
    Alert.alert(
        'Viagem Solicitada',
        `${viagem.origem} → ${viagem.destino}\nPreço: ${formatarPreco(viagem.preco)}\n\nEm breve entraremos em contato!`,
        [{ text: 'OK' }]
    );
  };

  const renderItemOrigem = ({ item }: { item: string }) => (
      <TouchableOpacity
          style={styles.modalItem}
          onPress={() => selecionarOrigem(item)}
      >
        <Text style={styles.modalItemText}>{item}</Text>
      </TouchableOpacity>
  );

  const renderItemDestino = ({ item }: { item: string }) => (
      <TouchableOpacity
          style={styles.modalItem}
          onPress={() => selecionarDestino(item)}
      >
        <Text style={styles.modalItemText}>{item}</Text>
      </TouchableOpacity>
  );

  const renderSugestaoOrigem = ({ item }: { item: string }) => (
      <TouchableOpacity
          style={styles.sugestaoItem}
          onPress={() => selecionarSugestaoOrigem(item)}
      >
        <Text style={styles.sugestaoText}>{item}</Text>
      </TouchableOpacity>
  );

  const renderSugestaoDestino = ({ item }: { item: string }) => (
      <TouchableOpacity
          style={styles.sugestaoItem}
          onPress={() => selecionarSugestaoDestino(item)}
      >
        <Text style={styles.sugestaoText}>{item}</Text>
      </TouchableOpacity>
  );

  const renderViagem = ({ item }: { item: Viagem }) => (
      <View style={styles.viagemCard}>
        <View style={styles.viagemHeader}>
          <View style={styles.rotaContainer}>
            <Text style={styles.origemText}>{item.origem}</Text>
            <Text style={styles.seta}>→</Text>
            <Text style={styles.destinoText}>{item.destino}</Text>
          </View>
          <Text style={styles.precoText}>{formatarPreco(item.preco)}</Text>
        </View>

        <View style={styles.detalhesContainer}>
          <Text style={styles.detalheText}>📍 {item.distancia}</Text>
          <Text style={styles.detalheText}>⏱️ {item.tempoEstimado}</Text>
        </View>
      </View>
  );

  return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" backgroundColor="#2c3e50" />

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerEmoji}>🚗</Text>
          <Text style={styles.headerTitle}>Nom Driver</Text>
          <Text style={styles.headerSubtitle}>Consulta de Preços</Text>
        </View>

        <ScrollView style={styles.scrollContainer}>
          {/* Formulário */}
          <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Consultar Preços</Text>

            {/* Campo Origem */}
            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <Text style={styles.inputIcon}>📍</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Digite ou selecione a origem"
                    value={origemPesquisa || origem}
                    onChangeText={handleOrigemChange}
                    onFocus={() => setMostrarSugestoesOrigem(origemPesquisa.length > 0)}
                    placeholderTextColor="#999"
                />
                <TouchableOpacity
                    style={styles.dropdownButton}
                    onPress={() => setModalOrigemVisible(true)}
                >
                  <Text style={styles.dropdownIcon}>▼</Text>
                </TouchableOpacity>
              </View>

              {/* Sugestões Origem */}
              {mostrarSugestoesOrigem && origensfiltradas.length > 0 && (
                  <View style={styles.sugestoesContainer}>
                    <FlatList
                        data={origensfiltradas.slice(0, 5)} // Limitar a 5 sugestões
                        renderItem={renderSugestaoOrigem}
                        keyExtractor={item => item}
                        scrollEnabled={false}
                    />
                  </View>
              )}
            </View>

            {/* Campo Destino */}
            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <Text style={styles.inputIcon}>🎯</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Digite ou selecione o destino"
                    value={destinoPesquisa || destino}
                    onChangeText={handleDestinoChange}
                    onFocus={() => setMostrarSugestoesDestino(destinoPesquisa.length > 0)}
                    placeholderTextColor="#999"
                />
                <TouchableOpacity
                    style={styles.dropdownButton}
                    onPress={() => setModalDestinoVisible(true)}
                >
                  <Text style={styles.dropdownIcon}>▼</Text>
                </TouchableOpacity>
              </View>

              {/* Sugestões Destino */}
              {mostrarSugestoesDestino && destinosFilterdos.length > 0 && (
                  <View style={styles.sugestoesContainer}>
                    <FlatList
                        data={destinosFilterdos.slice(0, 5)} // Limitar a 5 sugestões
                        renderItem={renderSugestaoDestino}
                        keyExtractor={item => item}
                        scrollEnabled={false}
                    />
                  </View>
              )}
            </View>

            {/* Botões */}
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.buscarButton} onPress={buscarViagem}>
                <Text style={styles.buscarButtonText}>🔍 Buscar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.limparButton} onPress={limparBusca}>
                <Text style={styles.limparButtonText}>Limpar</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Resultados */}
          <View style={styles.resultadosContainer}>
            <Text style={styles.resultadosTitle}>
              {mostrarTodos
                  ? 'Todas as Rotas Disponíveis'
                  : `${resultados.length} resultado(s) encontrado(s)`
              }
            </Text>

            <FlatList
                data={resultados}
                renderItem={renderViagem}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
                scrollEnabled={false}
                contentContainerStyle={styles.listContainer}
            />
          </View>
        </ScrollView>

        {/* Modal Origem */}
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalOrigemVisible}
            onRequestClose={() => setModalOrigemVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Selecione a Origem</Text>

              <TouchableOpacity
                  style={[styles.modalItem, styles.modalItemAll]}
                  onPress={() => selecionarOrigem('')}
              >
                <Text style={styles.modalItemTextAll}>Qualquer origem</Text>
              </TouchableOpacity>

              <FlatList
                  data={origens}
                  renderItem={renderItemOrigem}
                  keyExtractor={item => item}
              />

              <TouchableOpacity
                  style={styles.modalCloseButton}
                  onPress={() => setModalOrigemVisible(false)}
              >
                <Text style={styles.modalCloseText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Modal Destino */}
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalDestinoVisible}
            onRequestClose={() => setModalDestinoVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Selecione o Destino</Text>

              <TouchableOpacity
                  style={[styles.modalItem, styles.modalItemAll]}
                  onPress={() => selecionarDestino('')}
              >
                <Text style={styles.modalItemTextAll}>Qualquer destino</Text>
              </TouchableOpacity>

              <FlatList
                  data={destinos}
                  renderItem={renderItemDestino}
                  keyExtractor={item => item}
              />

              <TouchableOpacity
                  style={styles.modalCloseButton}
                  onPress={() => setModalDestinoVisible(false)}
              >
                <Text style={styles.modalCloseText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flex: 1,
  },
  header: {
    backgroundColor: '#2c3e50',
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerEmoji: {
    fontSize: 32,
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#ecf0f1',
  },
  formContainer: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 12,
    position: 'relative',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fafafa',
  },
  inputIcon: {
    fontSize: 18,
    marginRight: 8,
  },
  textInput: {
    flex: 1,
    paddingVertical: 16,
    fontSize: 16,
    color: '#333',
  },
  dropdownButton: {
    padding: 8,
  },
  dropdownIcon: {
    fontSize: 12,
    color: '#666',
  },
  sugestoesContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderTopWidth: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    maxHeight: 150,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  sugestaoItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  sugestaoText: {
    fontSize: 16,
    color: '#333',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  buscarButton: {
    flex: 2,
    backgroundColor: '#3498db',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buscarButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  limparButton: {
    flex: 1,
    backgroundColor: '#95a5a6',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  limparButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  resultadosContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  resultadosTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 12,
  },
  listContainer: {
    paddingBottom: 20,
  },
  viagemCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  viagemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  rotaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  origemText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
  },
  seta: {
    fontSize: 18,
    color: '#3498db',
    marginHorizontal: 8,
  },
  destinoText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
  },
  precoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#27ae60',
  },
  detalhesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  detalheText: {
    fontSize: 14,
    color: '#666',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '90%',
    maxHeight: '70%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 16,
    textAlign: 'center',
  },
  modalItem: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalItemAll: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    marginBottom: 8,
    borderBottomWidth: 0,
  },
  modalItemText: {
    fontSize: 16,
    color: '#333',
  },
  modalItemTextAll: {
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
  },
  modalCloseButton: {
    backgroundColor: '#95a5a6',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  modalCloseText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});