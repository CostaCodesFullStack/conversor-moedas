# Conversor de Moedas 💱

Um aplicativo web simples e elegante para conversão de moedas em tempo real, desenvolvido com React e Vite. Permite converter valores entre diferentes moedas usando taxas de câmbio atualizadas da API Frankfurter.

## 📋 Funcionalidades

- **Conversão em Tempo Real**: Converte valores entre moedas usando taxas de câmbio atualizadas.
- **Interface Intuitiva**: Design limpo e responsivo com Tailwind CSS.
- **Seleção de Moedas**: Lista dinâmica de moedas suportadas pela API.
- **Validação Simples**: Trata casos onde as moedas de origem e destino são iguais.
- **Deploy Automático**: Configurado para deploy no GitHub Pages.

## 🛠️ Tecnologias Utilizadas

- **Frontend**:
  - React 18 - Biblioteca para construção da interface
  - Vite - Ferramenta de build rápida
  - Tailwind CSS - Framework CSS utilitário
  - Axios - Cliente HTTP para requisições à API

- **Ferramentas de Desenvolvimento**:
  - ESLint - Linting de código
  - PostCSS - Processamento CSS
  - Autoprefixer - Adição automática de prefixos CSS

- **Deploy**:
  - GitHub Pages - Hospedagem gratuita

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## 🚀 Instalação

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/conversor-moedas.git
   cd conversor-moedas
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

4. **Abra no navegador**:
   Acesse `http://localhost:5173` (ou a porta indicada no terminal).

## 📖 Uso

1. **Selecionar Moedas**: Escolha a moeda de origem e destino nos dropdowns.
2. **Inserir Valor**: Digite o valor a ser convertido no campo numérico.
3. **Converter**: Clique no botão "Converter" para obter o resultado.
4. **Resultado**: O valor convertido será exibido abaixo do botão.

### Exemplo de Uso

- Converter 100 USD para BRL
- Selecionar USD como origem e BRL como destino
- Inserir 100 no campo de valor
- Clicar em "Converter"
- Resultado: "100 USD = 500.00 BRL" (valor aproximado baseado na taxa atual)

## 🌐 API Utilizada

O aplicativo utiliza a [Frankfurter API](https://www.frankfurter.app/), uma API gratuita para taxas de câmbio:

- **Base URL**: `https://api.frankfurter.app/latest`
- **Funcionalidades**:
  - Lista de moedas suportadas
  - Taxas de câmbio em tempo real
  - Conversão entre moedas específicas

### Endpoints Principais

- `GET /latest` - Obtém taxas de câmbio atuais
- `GET /latest?amount=100&from=USD&to=BRL` - Converte valor específico

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção localmente
- `npm run lint` - Executa linting do código
- `npm run deploy` - Faz deploy para GitHub Pages

## 🚀 Deploy

O projeto está configurado para deploy automático no GitHub Pages:

1. **Configure o repositório no GitHub**
2. **Atualize o `homepage` no `package.json`** (se necessário):
   ```json
   "homepage": "https://seu-usuario.github.io/conversor-moedas"
   ```
3. **Execute o deploy**:
   ```bash
   npm run deploy
   ```

## 📁 Estrutura do Projeto

```
conversor-moedas/
├── public/
│   └── moeda.svg          # Ícone da aplicação
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx            # Componente principal
│   ├── main.jsx           # Ponto de entrada da aplicação
│   ├── index.css          # Estilos globais
│   └── App.css            # Estilos do componente App
├── index.html             # Template HTML
├── package.json           # Dependências e scripts
├── vite.config.js         # Configuração do Vite
├── tailwind.config.js     # Configuração do Tailwind CSS
├── postcss.config.js      # Configuração do PostCSS
└── eslint.config.js       # Configuração do ESLint
```

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

### Diretrizes de Contribuição

- Mantenha o código limpo e bem documentado
- Siga as convenções de nomenclatura existentes
- Teste suas mudanças antes de submeter
- Atualize a documentação se necessário

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙋‍♂️ Suporte

Se você tiver dúvidas ou problemas:

- Abra uma [issue](https://github.com/seu-usuario/conversor-moedas/issues) no GitHub
- Verifique a documentação da [Frankfurter API](https://www.frankfurter.app/docs)

## 📈 Melhorias Futuras

- [ ] Adicionar histórico de conversões
- [ ] Suporte a mais moedas
- [ ] Gráficos de variação cambial
- [ ] Modo offline com cache
- [ ] Notificações de alteração de taxas
- [ ] Tema escuro/claro

