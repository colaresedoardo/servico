import db from './database';

export const insertCliente = (nome: string, telefone: string) => {
  db.runSync('INSERT INTO clientes (nome, telefone) VALUES (?, ?);', [nome, telefone]);
};

export const getClientes = () => {
  return db.getAllSync('SELECT * FROM clientes;');
};
