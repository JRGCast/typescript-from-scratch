# typescript-from-scratch
1. Aprendendo a instalar o typescript e outras configurações do zero;
2. Utilizando o TS;


## Pré-TS e TS:
1. Gitignore => Há o site [gitignore.io] que gera um gitignore completo. Neste caso utilizou-se o .gitignore gerado com a pesquisa "Node";
2. Iniciar o node com npm init (podendo fazer o -y para a criação 'default');
3. Instalar o typescript como DEV DEPENDENCIES (já que ele só é feito para auxiliar no desenvolvimento), com o comando npm i typescript -D. Obs.: instalar localmente pode levar a futuros conflitos de versões entre projetos, mas nada que uma atualização não resolva;
4. Veja que foi criada a pasta .bin, contendo 'tsc' e 'tsserver', bem como a pasta typescript;

*Typescript não é uma linguagem compilada. Ou seja, é necessário compilar antes de rodar o código*;
- Porém é possível 'acelerar' o desenvolvimento com a extensão ts node (npm i ts-node -D);
- É possível configurá-lo com um arquivo tsconfig.json (leia a doc em  [https://www.npmjs.com/package/ts-node#via-tsconfigjson-recommended] ), mas aqui utilizaremos a configuração do code-runner no VSCODE;

### Configurações do VSCODE localmente: 
1. Crie uma pasta .vscode com o arquivo settings.json;
2. Dentro do arquivo settings, há a configuração do code-runner (com autocomplete), busque por executor map, isso incluirá a configuração para todas as linguagens. No caso do typescript ele já utiliza o ts-node. Para facilitar, apenas acrecente npx no início e --files ao final do ts-node no arquivo settings.
- Se você não quiser checar por erros de tipagem em cada execução, para deixar o coderunner executar mais rapidamente, pode acrescentar --transpile-only após --files, daí o coderunner apenas executará o arquivo sem mostrar os erros. Muito útil para quando se quer ver apenas a saída da função/código.

### Configuração do eslint localmente:
1. Tenha a extensão do eslint, que vinculará o VSCODE com o ESLINT;
2. Utilize o comando npm i eslint -D para instalar como devDependencies;
3. Especificamente para o typescript, também utilize o comando npm i @typescript-eslint/eslint-plugin @typescript-eslint/parser -D (o primeiro é um plugin para o eslint e o segundo para que avise em tempo real, o que fará a integração deste com o VSCODE e o TS);
4. Configure os settings do eslint criando um arquivo .eslintrc (eslint Run Commands);
- É possível configurá-lo tanto como json quanto como js. No caso será configurado como eslintrc.js pelo module.exports;
- Há muitos pontos para vincular, mas as minúcias devem ser esclarecidas com a doc pertinente. Utilizam-se nos extends os 'recommendeds', mas não é uma regra;
- Inclusive para melhor 'mobilidade' não se entrará, no momento, nas recomendações da AIRBNB e Google;
- Configurações mais relacionadas à estética do código serão colocadas com o prettier, inclusive com a integração eslint-prettier;

### Configuração do prettier localmente:
1. Utilize o comando npm i prettier eslint-config-prettier eslint-plugin-prettier -D;
2. Insira no arquivo do *eslintrc*, em extends, o 'plugin:prettier/recommended' (novamente, o 'default' recommended, mas isso não é uma regra universal);
3. Crie um arquivo .prettierc, podendo ser tanto json quanto js. No caso será js pelo module.exports;
4. O objeto contendo as regras deve conter aquelas de acordo com o gosto. Por exemplo 'semi: true', para colocar ';' ao final de funções, variáveis e etc.

### Configuração tsconfig localmente:
- *É interessante ter essa configuração para que todo o time tenha a mesmíssima configuração, evitando problemas*;
1. Veja no site [https://www.typescriptlang.org/docs/handbook/compiler-options.html] as regras aplicáveis;
2. É possível criar o arquivo 'default' com o comando npx tsc --init (veja a doc em [https://aka.ms/tsconfig.json]), que criará inúmeras 'compiler options' por padrão;
3. Importante verificar os campos target, module e lib, este último é para informar ao TS quais libs/ferramentas serão utilizadas no projeto;
4. É possível configurar o outDir para que todos os JS criados a partir da compilação do TS vão para uma pasta específica, para não sobrecarregar o mesmo diretório com arquivos .ts e .js (já pensou a bagunça de duplicar tudo?). O padrão é colocar o diretório './dist';
- *Não esqueça de adicionar no tsconfig.json o objeto 'include' para que o TS veja a pasta ./src e dali compile*;
5. O 'strict' é a aplicação de diversas regras para restringir a 'codação';
6. O "esModuleInterop": true é para conseguir utilizar o export e import (o node, por padrão, não suporta);
7. A cada compilação, sobrescreverá os arquivos de mesmo nome e adicionará os novos, *CONTUDO NÃO ELIMINA ARQUIVOS*, então é sempre interessante apagar a pasta ./dist em novas compilações, para que não continuem arquivos porventura apagados;


### Configuração WEBPACK:
1. Instale as devDependencies necessárias com o comando npm i ts-loader webpack webpack-cli -D;
2. Configure o WEBPACK com um arquivo na raiz webpack.config.js (também pode ser .json). Há uma opção 'default' na doc em [https://webpack.js.org/guides/typescript/];
- As propriedades mais importantes são entry (que irá verificar o primeiro arquivo a ser lido pelo WEBPACK, e a partir dele encontrará os demais), output(que configura o nome do arquivo de saída e o local), e module (que irá procurar arquivos pela extensão lá configurada);
- Não esqueça de adequar as entradas e saídas tsconfig.js ou .json com as do webpack.config (outDir daquele com output deste);
- É oportuno acrescentar no arquivo webpack a propriedade devtool, com a propriedade 'source-map', pois, ajuda no eventual debug;
- Também pode colocar no webpack a propriedade mode:'development', apenas para observar e aprender, pois, com esse modo, ele não minificará o arquivo bundle, que é um dos objetivos do webpack;
- Esse objetivo vale para arquivos html, css (e suas 'variações', como scss, sass) e js e demais suportados pelo webpack;
- Rode o comando local npx webpack;

