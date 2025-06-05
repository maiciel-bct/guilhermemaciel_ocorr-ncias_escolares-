CREATE DATABASE IF NOT EXISTS escola_guilherme;
USE escola_guilherme;

CREATE TABLE IF NOT EXISTS alunos_guilherme (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    matricula VARCHAR(20),
    turma VARCHAR(10)
);


INSERT INTO alunos_guilherme (nome, matricula, turma) VALUES
('Lucas Silva', '202501', '2B'),
('Mariana Costa', '202502', '2B'),
('Julia Souza', '202504', '2B'),
('Fernando Lopes', '202505', '2B');

SELECT * FROM alunos_guilherme;


DELETE FROM alunos_guilherme WHERE matricula = '202504';