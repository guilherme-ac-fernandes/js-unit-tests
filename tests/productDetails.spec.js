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
    expect(typeof productDetails).toBe('function');
    expect(typeof productDetails()).toBe('object');
    expect(productDetails().length).toBe(2);
    const objectItemTest = (array) => {
      for (let i = 0; i < array.length; i += 1) {
        if (typeof array[i] !== 'object') {
          return false
        }
      }
      return true;
    };
    expect(objectItemTest(productDetails('Alcool gel', 'Máscara'))).toBe(true);
    expect(productDetails('Alcool gel', 'Máscara')).not.toMatchObject(productDetails('Alcool 70%', 'Máscara'))
    expect(productDetails('Alcool gel', 'Máscara')[0].details.productId).toMatch(/123/);
    expect(productDetails('Alcool gel', 'Máscara')[1].details.productId).toMatch(/123/);
  });
});
