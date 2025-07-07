# ReservaLab – Sistema de Reserva de Laboratórios (Versão Local)

Este projeto é a versão local do sistema de reservas de laboratórios da UFOPA, desenvolvido para a disciplina de **Segurança da Informação**.

---

## Funcionalidades de Segurança Implementadas

Todas as medidas abaixo foram implementadas no código e podem ser verificadas nos arquivos citados:

### Autenticação JWT
- Implementado em `authService.js` (emissão e verificação do token)
- Middleware: `authMiddleware.js` com `authenticateToken`

### RBAC – Controle de acesso por papéis
- `authorizeRoles()` no `authMiddleware.js`
- Roteamento no frontend (`App.jsx`) com `ProtectedRouteUser`, `ProtectedRouteAdmin`, etc.

### Autenticação em duas etapas (2FA)
- Códigos gerados e enviados por e-mail via `authService.js`
- Verificação com expiração de 5 minutos
- Frontend: `Verificar2FA.jsx` e controle no `Login.jsx`

### Ativação por e-mail
- Envio do link com token em `authService.js` (função `cadastroDireto`)
- Verificação e ativação com `ativarContaPorToken()`
- Frontend: página `AtivarConta.jsx`

### Definição de senha segura
- Envio de token com `register()` e `registerAndSendEmail()`
- Validação de força da senha via regex no backend (`authController.js`)
- Página de definição: `DefinirSenha.jsx`

### reCAPTCHA e bloqueio de brute-force
- Backend: verificação com Google reCAPTCHA em `authController.js`
- Frontend: `Login.jsx` com controle de tentativas e exibição condicional

### Logs de segurança
- Função `createLog()` em `logService.js`
- Ações registradas: login suspeito, ativação de conta, cadastro com convite, redefinição, exclusão, exibição do reCAPTCHA, 2FA, entre outras.
- Logs visíveis em `PainelAdmin.jsx`, aba "Auditoria"

### Upload seguro de imagens
- Upload com `multer`, tratamento de nome e tipo em `labsRoutes.js`

---

## Como rodar o sistema localmente

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/reserva-labs.git
cd reserva-labs
```

---

### 2. Backend

```bash
cd backend
npm install
```

#### 2.1. Crie o arquivo `.env`

```env
DATABASE_URL="postgresql://postgres:1234@localhost:5432/reservalabs"
JWT_SECRET=reservalab123@2025
EMAIL_FROM=gcarlosdavi@gmail.com
EMAIL_PASSWORD=sua_senha_app
FRONTEND_URL=http://localhost:5173
```

#### 2.2. Rode as migrações

```bash
npx prisma migrate dev --name init
```

#### 2.3. Inicie o servidor

```bash
npm run dev
```

---

### 3. Frontend

```bash
cd ../frontend
npm install
```

#### 3.1. Inicie o frontend

```bash
npm run dev
```

Acesse: [http://localhost:5173](http://localhost:5173)

---

## Testes sugeridos

- Cadastro de usuário solicitante
- Ativação via e-mail
- Login com 2FA
- Tentativas erradas ativando reCAPTCHA
- Reserva de laboratório
- Aprovação via painel do coordenador
- Consulta aos logs de auditoria

---

## 🔗 Versão em produção

Acesse a versão online do sistema aqui:  
[https://reserva-labs.vercel.app](https://reserva-labs.vercel.app)

---

## Acesso de Administrador

E-mail: `carlos@example.com`  
Senha: `123456`

---

## Desenvolvedor

Carlos Davi  
Projeto final da disciplina **Segurança da Informação – UFOPA (2025)**
