//1 - crie uma função que exiba uma mensagem no console

function mensagem() {
  console.log("uma mensagem");
}
mensagem();

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function nome(name) {
  console.log("meu nome é ${name}")
}
nome("Romulo")

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function info (nome, idade, estiloMusical){
 console.log ('meu nome é: ${nome}', 'minha idade é: ${idade} anos', 'meu estilo de músicaFavorito é: ${estiloMusical')
}

info('Rômulo', '43', 'Pop Internacional')
 //4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

 function passatempos (filme, música){
console.log('Meu filme favorito é: ${'filme'}'  'minha musica favorita é: ${'musica'}')
 }

 passatempos('The Goonies', 'True Colors')

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function multiplica(x){
  return x*3
}

console.log (multiplica (5))
