import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('servicos.db');

export const initializeDatabase = () => {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS tarefas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      descricao TEXT NOT NULL,
      concluida INTEGER DEFAULT 0, 
      cliente_id INTEGER NOT NULL,
      foto TEXT,
      feito INTEGER DEFAULT 0
    );
  `),
  db.execSync(`
    CREATE TABLE IF NOT EXISTS clientes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        telefone TEXT NOT NULL
      );
  `);
};

export default db