# JurisSecure - Gestão Jurídica Inteligente 🔖

JurisSecure é uma plataforma moderna e completa para gestão jurídica, oferecendo ferramentas inteligentes para advogados e clientes. A plataforma integra consultoria jurídica online, gestão de casos e recursos de inteligência artificial para otimizar o trabalho jurídico.

## 🚀 Funcionalidades

### 📱 Página Principal
- Busca avançada de advogados por especialização, localização e nome
- Interface moderna e intuitiva
- Seções destacadas para principais serviços

### 💼 Gestão de Casos
- Armazenamento seguro de documentos
- Gerenciamento de prazos e compromissos
- Sistema de notificações automáticas
- Monitoramento de processos em tempo real

### 🤖 IA Jurídica
- Pesquisa jurídica automatizada
- Automação de documentos
- Predição de desfechos baseada em casos anteriores

### 👥 Colaboração
- Espaço para colaboração entre advogados
- Compartilhamento seguro de documentos
- Fórum interno para discussões

### 📊 Análise de Dados
- Painel de estatísticas
- Métricas de desempenho
- Insights sobre casos

## 🛠️ Tecnologias Utilizadas

- **Frontend:**
  - React 18
  - TypeScript
  - Tailwind CSS
  - Lucide React (ícones)
  - React Router DOM

- **Backend:**
  - Supabase (Banco de dados e Autenticação)

## 📋 Pré-requisitos

- Node.js 18+
- npm ou yarn
- Conta no Supabase

## 🚀 Instalação

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
cd jurissecure
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env` na raiz do projeto:
```env
VITE_SUPABASE_URL=sua_url_do_supabase
VITE_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

## 🔧 Configuração do Banco de Dados

O projeto utiliza Supabase como banco de dados. As migrações incluem:
- Tabela de perfis (profiles)
- Tabela de casos (cases)
- Tabela de compromissos (appointments)

## 🔐 Segurança

- Autenticação robusta via Supabase
- Row Level Security (RLS) implementado
- Criptografia de dados sensíveis
- Políticas de acesso granulares

## 📱 Recursos Mobile

- Design responsivo
- PWA ready
- Integração com calendário do dispositivo
- Notificações push

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

Para suporte, envie um email para [email@jurissecure.com.br] ou abra uma issue no repositório.

---

Desenvolvido com ❤️ pela equipe JurisSecure
