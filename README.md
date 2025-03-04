# 🎯 Objetivo

O objetivo deste repositório é mostrar a aplicação de um simples e-commerce, tendo abas de **Usuário, Marcas, Produtos e Compras**.

## 🗄️ Banco de dados

Para testes recomendo utilizar o Back4app, ele é um simplificador de back end que permite criar aplicações simples mas poderosas.

### 📋 O que deve conter no banco

Algumas colunas devem estar presentes no banco de dados, e também alguns exemplos para serem utilizados.

#### 👤 _User
- username -> String
- password -> String
- email -> String
- name -> String
- city -> String

![image](https://github.com/user-attachments/assets/63d19eb3-4132-4432-b2ac-32f739ef5cbf)
---

#### 🏷️ Brand
- name -> String
- cnpj -> Number
- name -> String
- city -> String

![image](https://github.com/user-attachments/assets/6e5f86dd-4adc-4e3a-8caa-5386bad01dcc)
---

#### 📦 Product
- brand -> Pointer <Brand>
- name -> String
- price -> Number
- stock -> Number
- isSelling -> Boolean
- LaunchDate -> Date
- image -> File

![image](https://github.com/user-attachments/assets/c57c055e-93eb-4c23-942a-02c1742fd610)
---

#### 🛒 Purchase
- user -> Pointer <_User>
- produto -> Pointer <product>
- price -> Number
- city -> String

![image](https://github.com/user-attachments/assets/9e17b19d-aa0e-4626-9dc3-90fc755b04fa)
---

## 🚀 Utilizando a API

Para utilizar é preciso instalar um testador de API, nesse caso utilizarei como exemplo o Insomnia. Nele, caso opte por utilizar o *Back4app*, será preciso utilizar a chave de aplicação de ID:
> Ela deve ser usada na parte *X-Parse-Application-Id*

Nesta mesma página, também será utilizado o *Rest API Key*:
> Deve ser usado na parte *X-Parse-REST-API-Key*

A próxima chave pode ser acessada indo no seu perfil de usuário e acessando *Account Keys*, nela você irá criar uma chave de autorização e acesso ao seu projeto:
> Deve ser usada na parte *X-Parse-Session-Token*

Após isso, você poderá fazer os testes e modificações que quiser. Recomendo utilizar como base para teste e estudo o site [Rest API Guide](https://docs.parseplatform.org/rest/guide/#creating-objects).

## 📄 Arquivo Insomnia

O arquivo *Insomnia_prj_loja* contém alguns testes que você pode utilizar para aprender mais, como criar produtos, interligar eles com as marcas, realizar compras, deletar produtos e **muito mais**.
