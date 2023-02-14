// DESAFIO 3//

         // Sequência de Fibonacci //
          
         let atual = 1
         let anterior = 0

         for(let i = 0; i <= 50; i++) {
            console.log (atual)
            let proximo = atual + anterior
            anterior = atual 
            atual = proximo
        }

        //////////////////////////////////////////