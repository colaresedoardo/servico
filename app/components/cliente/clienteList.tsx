import { getClientes } from '@/app/utils/clienteModel';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';


const ClienteList = () => {
  const [clientes, setClientes] = useState<{ id: number; nome: string; telefone: string }[]>([]);

  useEffect(() => {
    loadClientes();
  }, []);

  const loadClientes = () => {
    const data = getClientes();
    setClientes(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Client List</Text>
      <FlatList
        data={clientes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.nome}</Text>
            <Text>{item.telefone}</Text>
          </View>
        )}
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
