/* CRUD PARA A CLASSE FILME */
const Filme = Parse.Object.extend("Filme");

//C : CREATE
Parse.Cloud.define("create-filme", async (request) => {
  const filme = new Filme();
  
  const nomeBr = request.params.nomeBr;
  if (nomeBr == null) throw "O nome do filme no Brasil é obrigatório.";
  
  filme.set("nomeBr", request.params.nomeBr);
  filme.set("nomeOriginal", request.params.nomeOriginal);
  filme.set("ano", request.params.ano);
  const filmeSalvo = await filme.save(null, {useMasterKey: true});
  
  return filmeSalvo;
});



//R : READ
Parse.Cloud.define("list-filmes", async (request) => {
  const query = new Parse.Query(Filme);
  const filmes = await query.find({useMasterKey: true});
  return filmes;
});


Parse.Cloud.define("read-filme", async (request) => {
  if(request.params.filmeId == null) throw 'Código de filme inválido';
  
  const query = new Parse.Query(Filme);
  const filme = await query.get(request.params.filmeId, {useMasterKey: true});
  const json = filme.toJSON();
  return filme;
});



//U  : UPDATE
Parse.Cloud.define("update-filme", async (request) => {
  if(request.params.filmeId == null) throw 'Código de filme inválido';
  
  filmeId = request.params.filmeId;
  const query = new Parse.Query(Filme);
  const filme = await query.get(filmeId, {useMasterKey: true});

  filme.set("nomeBr", request.params.nomeBr);
  filme.set("nomeOriginal", request.params.nomeOriginal);
  filme.set("ano", request.params.ano);
  await filme.save(null, {useMasterKey: true});

  return filme;
});



//D  : DELETE
Parse.Cloud.define("delete-filme", async (request) => {
  if(request.params.filmeId == null) throw "Código de filme inválido!";

  const filme = new Filme();
  filme.id = request.params.filmeId;

  await filme.destroy({useMasterKey: true});
  
  return "Filme excluído com o código: " + filme.id;
});

/* FIM: CRUD PARA A CLASSE FILME */