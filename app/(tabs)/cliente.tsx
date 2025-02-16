import { Text, View, StyleSheet } from 'react-native';
import ClienteForm from '../components/cliente/clienteForm';
import { useEffect, useState } from 'react';
import { initializeDatabase } from '../utils/database';


export default function ClienteScreen() {
  const [updateList, setUpdateList] = useState(false);
  useEffect(()=>{
    initializeDatabase()
  },[])
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cadastro Cliente</Text>
      <ClienteForm onClienteAdded={() => setUpdateList(!updateList)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
