# Objetivo 

O objetivo deste repositorio e mostrar a aplicação de um simples e-commerce, tendo abas de **Usuario, Marcas, Produtos e Compras**


# Banco de dados
Para testes recomendo utilziar o Back4app, ele e um simplificador de back end em que permite criar aplicações simples mas poderosas


## O que deve conter em banco
Algumas colunas devem estar presentes no banco de dados, e tambem alguns exemplos para serem utilizados 

### _User
- username -> String
- password -> String
- email -> String
- name -> String
- city -> String
  
  ![image](https://github.com/user-attachments/assets/63d19eb3-4132-4432-b2ac-32f739ef5cbf)
---

### Brand
- name -> String
- cnpj -> Number
- name -> String
- city -> String

![image](https://github.com/user-attachments/assets/6e5f86dd-4adc-4e3a-8caa-5386bad01dcc)
---

### Product
- brand -> Pointer <Brand>
- name -> String
- price -> Number
- stock -> Number
- isSelling -> Boolean
- LaunchDate -> Date
- image -> File

![image](https://github.com/user-attachments/assets/c57c055e-93eb-4c23-942a-02c1742fd610)
---

  ### Purchase
- user -> Pointer <_User>
- produto -> Pointer <product>
- price -> Number
- city -> String

![image](https://github.com/user-attachments/assets/9e17b19d-aa0e-4626-9dc3-90fc755b04fa)
---

# Utilizando a API
Para utilizar e preciso instalar um testador de API, nesse caso utilizarei como exemplo o insominia, nele, caso optie por utilizar o *Back4app*, sera preciso utilizar a chave de aplicação de ID, em que pode ser encontrado apos cirar um novo APP e ir em App Settings> Secutity & Keys -> Application ID.
> Ele deve ser usado na parte *X-Parse-Application-Id*

Nesta mesma pagina, tambem sera utilizado o *Rest API Key*
> Deve ser usado na parte *X-Parse-REST-API-Key*

A proxima chave pode ser acessada indo no seu perfil de usuario e acessando *Account Keys*, nela voce ira criar uma chave de autorização e acesso ao seu projeto 
> Deve ser usado na parte *X-Parse-Session-Token*

Apos isso voce podera fazer os testes e modificaçoes que quiser, recomendo utilizar como base para teste e estudo o site [Rest API Guide](https://docs.parseplatform.org/rest/guide/#creating-objects)

