import { Text, View, StyleSheet } from 'react-native';
import ClienteForm from '../components/cliente/clienteForm';
import { useEffect, useState } from 'react';
import { initializeDatabase } from '../utils/database';
import ClienteList from '../components/cliente/clienteList';


export default function ClienteScreen() {
  const [updateList, setUpdateList] = useState(false);
  useEffect(()=>{
    initializeDatabase()
  },[])
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cadastro Cliente</Text>
      <ClienteForm onClienteAdded={() => setUpdateList(!updateList)} />
      
      <ClienteList key={updateList.toString()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
