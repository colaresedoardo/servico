import React from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { insertCliente } from '@/app/utils/clienteModel';


type FormData = {
  nome: string;
  telefone: string;
};

const ClienteForm = ({ onClienteAdded }: { onClienteAdded: () => void }) => {
  const { control, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    try {
      insertCliente(data.nome, data.telefone);
      Alert.alert('Success', 'Client added successfully!');
      reset();
      onClienteAdded(); // Refresh the client list
    } catch (error) {
      Alert.alert('Error', 'Failed to add client.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome</Text>
      <Controller
        control={control}
        name="nome"
        rules={{ required: 'Nome is required' }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter name"
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      <Text style={styles.label}>Telefone</Text>
      <Controller
        control={control}
        name="telefone"
        rules={{ required: 'Telefone is required' }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter phone"
            keyboardType="phone-pad"
            value={value}
            onChangeText={onChange}
          />
        )}
      />

      <Button title="Add Client" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default ClienteForm;
