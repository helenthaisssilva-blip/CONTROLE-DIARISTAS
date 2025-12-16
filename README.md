# 📋 Aplicativo de Lista de Presença com Login, Senha e Geolocalização

Este projeto é um aplicativo simples de **registro de presença online**, criado para controle de funcionários, diaristas ou equipes de trabalho.

O sistema exige **login e senha**, verifica se o usuário está **liberado ou bloqueado**, solicita a **localização (GPS)** no momento do registro e salva automaticamente todas as informações em uma **planilha Google (Excel online)**.

---

## 🎯 Funcionalidades

- Login com usuário e senha
- Bloqueio e desbloqueio de usuários pelo administrador
- Registro de presença com:
  - Nome
  - Login
  - Data
  - Hora
  - Latitude
  - Longitude
- Mensagens automáticas:
  - ✅ "Presença confirmada!"
  - ❌ "Hoje você não foi escalado para trabalhar!"
- Geração de relatório diário
- Exportação dos dados para Excel (.xlsx)

---

## 👤 Tipos de Usuário

### Administrador
- Cadastra usuários
- Bloqueia e desbloqueia funcionários
- Acessa a planilha com todos os registros

### Funcionário
- Faz login
- Registra presença (se estiver liberado)

---

## 🧩 Como o sistema funciona

1. O usuário acessa o aplicativo
2. Informa login e senha
3. O sistema verifica se o usuário está bloqueado
4. Se estiver liberado:
   - O aplicativo solicita a localização
   - Registra a presença
   - Salva os dados na planilha
5. Se estiver bloqueado:
   - Mostra a mensagem informando que não foi escalado

---

## 🗂 Estrutura do Projeto

