# BAYZ.GG

Aplicação para auxiliar desenvolvedores.

## Instalando e configurando ambiente
Siga os passos baixo antes de começarmos:

1. Será necessário puxar as última alterações da aplicação, para isso você precisará ter o <u>[Git](https://git-scm.com/downloads)</u> instalado em seu computador.

2. Configure o seu **Git** clicando [aqui](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Configura%C3%A7%C3%A3o-Inicial-do-Git).

3. Em seu Visual Studio Code é preciso instalar a extensão Sass para poder ter todo o suporte do Vue3 na hora do desenvolvimento.

4. (Opicional) Para desenvolver o front-end é importante ter a extensão Sass para ter um suporte a syntax, autocomplete e Formatter.

5. Depois de tudo está configurando, vamos botar a mão na massa, crie uma pasta para o seu projeto, e execute as linhas abaixo.

> Linux: 
```
git pull https://github.com/BAYZ-GG/axie-infinity-card-builder.git && npm install
```
> Windows (PowerShell):
```
git pull https://github.com/BAYZ-GG/axie-infinity-card-builder.git | npm install
```

Pronto, agora você terá o projeto em suas mãos.

## Rodando localmente

Entre no diretório do projeto

```bash
  cd axie-infinity-card-builder
```

Instale as dependências

```bash
  pnpm install
  npm  install
  yarn install
```

Inicie o servidor

```bash
  npm run start
```

## Rodando o preview para testes

Para rodar os testes, rode o seguinte comando

```bash
  npm run test
```




## Buildando
Execute o script que estará no **package.json**:

> bash:
```
npm run build 
```
Na pasta do projeto será gerado um arquivo chamado (build) para produção.

Pronto! Agora você pode começar a trabalhar nas alterações, lembre-se que esse foi um passo-a-passo simples, divirta-se!