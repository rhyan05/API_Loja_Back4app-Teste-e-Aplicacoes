const Product = Parse.Object.extend("product"); 
const Brand = Parse.Object.extend("Brand");

Parse.Cloud.define("hello", (request) => {
  const name = request.params.name;
  return "Hello " + name + " Cloud Code";
});

Parse.Cloud.define("create-product", async (request) => {
  if(request.user == null) throw new Error("Usuário não autenticado");

  const stock = request.params.stock;
  if (stock == null || stock > 999) throw "Quantidade inválida";
  if (request.params.brandId == null) throw "Marca inválida";

  const brand = new Brand();
  brand.id = request.params.brandId;

  const product = new Product();
  product.set("name", request.params.name);
  product.set("price", request.params.price);
  product.set("stock", request.params.stock); 
  product.set("brand", brand);
  product.set("createdBy", request.user);
  product.set("isSelling", false);

  const savedProduct = await product.save(null, { useMasterKey: true });
  return savedProduct.id;
});

Parse.Cloud.define("change-price", async (request) => {
  if (!request.params.productId) throw new Error("Produto não encontrado");
  if (!request.params.price) throw new Error("Preço não informado");

  const product = new Product();
  product.id = request.params.productId;

  product.set("price", request.params.price);
  const savedProduct = await product.save(null, { useMasterKey: true });
  return savedProduct.get("price");
});

Parse.Cloud.define("delete-product", async (request) => {
  if (!request.params.productId) throw new Error("Produto não encontrado");

  const product = new Product();
  product.id = request.params.productId;

  await product.destroy({ useMasterKey: true });
  return "Produto deletado com sucesso";
});

Parse.Cloud.define("get-product", async (request) => {
  if (!request.params.productId) throw new Error("Produto não encontrado");

  const query = new Parse.Query(Product);
  query.include("brand");

  const product = await query.get(request.params.productId, { useMasterKey: true }); 

  const json = product.toJSON();
  return {
    name: json.name,
    price: json.price,
    brandName: json.brand ? json.brand.name : null,
    stock: json.stock,
  };
});

Parse.Cloud.define("list-products", async (request) => {
  const query = new Parse.Query(Product);

  // query.equalTo("isSelling", true);
  // query.greaterThanOrEqualTo("price", 1000);
  // query.lessThanOrEqualTo("price", 3000);
  query.equalTo("createdBy", request.user);
  query.include("brand");
  query.descending("stock");

  query.limit(2);
  query.skip(0);

  const products = await query.find({ useMasterKey: true });

  return products.map((prod) => {
    const pJson = prod.toJSON();
    return {
      name: pJson.name,
      price: pJson.price,
      stock: pJson.stock,
    };
  });
});

Parse.Cloud.define("sign-up", async (request) => {
  if (!request.params.email) throw new Error("Email não informado");
  if (!request.params.password) throw new Error("Senha não informada");
  if (!request.params.name) throw new Error("Nome não informado");

  const user = new Parse.User();
  user.set("username", request.params.email);
  user.set("email", request.params.email);
  user.set("password", request.params.password);
  user.set("name", request.params.name);

  if (request.params.city) {
    user.set("city", request.params.city);
  }

  const savedUser = await user.signUp(null, { useMasterKey: true });
  return savedUser.get("sessionToken");
});

Parse.Cloud.define("get-current-user", async (request) => {
  return request.user;
});


Parse.Cloud.define("login", async (request) => {
  const user = await Parse.User.logIn(request.params.email, request.params.password);
  return user;
});
