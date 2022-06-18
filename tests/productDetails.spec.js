const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // fail('Teste vazio!');

    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');

    // Teste se o retorno da função é um array.
    // Array é um tipo de object
    expect(typeof productDetails()).toBe('object');

    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails().length).toBe(2);

    // Teste se os dois itens dentro do array retornado pela função são objetos.
    const objectItemTest = (array) => { // Teste se cada 
      for (let i = 0; i < array.length; i += 1) {
        if (typeof array[i] !== 'object') {
          return false
        }
      }
      return true;
    };
    expect(objectItemTest(productDetails('Alcool gel', 'Máscara'))).toBe(true);

    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('Alcool gel', 'Máscara')).not.toMatchObject(productDetails('Alcool 70%', 'Máscara'))

    // Teste se os dois productIds terminam com 123.
    expect(productDetails('Alcool gel', 'Máscara')[0].details.productId).toMatch(/123/);
    expect(productDetails('Alcool gel', 'Máscara')[1].details.productId).toMatch(/123/);
  });
});