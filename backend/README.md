# Recuperação de senha

**RF**

- O usuario deve poder recuperar sua senha informando o seu email;
- O usuario deve receber um email com instruções de recuperação de senha;
- O usuario deve poder resetar sua senha;

**RNF**

- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar o Amazon SES para envios de email em ambiente de prod;
- O envio de e-mails deve acontecer em segundo plano (background job)

**RN**

- O link enviado por email para resetar senha, deve resetar em 2h;
- O usuario precisa confirmar a nova senha ao resetar sua senha;

# Atulaização do perfil

**RF**

- O usuario deve poder atualizar o seu nome, email e senha;

**RN**

- O usuario não pode alterar o seu e-mail para um e-mail ja utilizado;
- Para atualizar sua senha, o usuario deve informar a senha antiga;
- Para atualizar sua senha, o usuario precisa confirmar sua nova senha

# Painel do prestador

**RF**

- O usuario deve poder listar seus agendamentos de um dia especifico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder vizualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia deve ser armazenados em cache;
- As notificações do prestador deve ser armazenadas no MongoDB;
- As notificações do prestador deve ser enviadas em tempo real utilizando Socket.io

**RN**

- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar


# Agendamento de serviços

**RF**

- O usuario deve poder listar todos os prestadotates de serviços cadastrados
- O usuario deve poder listar os dias de um mês com pelo menos um horarios disponivel de um prestador;
- O usuario deve poder listar horários disponiveis em um dia especifico de um prestador;
- O usuario deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos disponiveis entre 8h às 18h (Primeiro às 8h, último as 17h);
- O usuario não pode agendar em um horário já ocupado;
- O usuario não pode agendar em um horário que já passou;
- O usuario não pode agendar um horário consigo mesmo;
