const expect = require('chai');
const AlgRomano = require('../algRomano');
const algRomano = new AlgRomano();

describe('Conversor de algaritmos romanos',()=>{
    describe('Valor inicial numérico', ()=>{
        it('deve iniciar com um valor número',()=>{
            expect.assert.isNumber(algRomano.inteiro(),"Resultado expera um número");
        })
    });
    describe('Valor inicial romano', ()=>{
        it('deve iniciar com uma string',()=>{
            expect.assert.isString(algRomano.algarismo(),"Resultado expera uma string");
        })
    });
    describe('Conversão de numeŕico para romano', ()=>{
        it('deve converter o valor passado como parâmetro',()=>{
            expect.assert.isString(algRomano.converterNumeroParaAlg(2),"Resultado expera uma string");
        })
    });
    describe('Conversão de romano para numérico', ()=>{
        it('deve converter o valor passado como parâmetro',()=>{
            expect.assert.isNumber(algRomano.converterRomanoparaNumerico('ii'),"Resultado expera um número");
        })
    })


})