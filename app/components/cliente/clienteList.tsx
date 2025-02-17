import { getClientes } from '@/app/utils/clienteModel';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

type ItemData = {
  nome: string;
  telefone: string;
};

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};
const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.telefone}</Text>
    <Text style={[styles.title, {color: textColor}]}>{item.nome}</Text>
  </TouchableOpacity>
);


const ClienteList = () => {
  const [clientes, setClientes] = useState<{ id: number; nome: string; telefone: string }[]>([]);

  useEffect(() => {
    loadClientes();
  }, []);

  const loadClientes = () => {
    const data = getClientes();
    setClientes(data);
  };
  const [selectedId, setSelectedId] = useState<string>();

  const renderItem = ({item}: {item:ItemData}) => {
    const backgroundColor = item.telefone === selectedId ? '#E0F2F1' : 'white';
    const color = item.telefone === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.telefone)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cliente Cadastrados</Text>
      <FlatList
        data={clientes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ClienteList;
