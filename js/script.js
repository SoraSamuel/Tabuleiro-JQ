$(document).ready(function() { // O Código será executado quando o DOM estiver pronto.
    const tabuleiroDOM = $('#tabuleiro'); // a variável declarada irá receber(=) a id selecionada // $ seleciona o elemento html dentro da ()
  
    for (let l = 0; l < 8; l++) {
      for (let c = 0; c < 8; c++) {                 // cada linha e coluna está recebendo +1 de valor a medida que as linhas e colunas são checadas 
        let celula = $('<div>').addClass('celula'); // declaração de variável recebe = jquery(elementohtml) .método(elementohtml)
                                                    // nesse comando estou criando uma div pra celula
        if ((l + c) % 2 === 0) {                    // checagem impar ou par
          celula.addClass('celula-branca');         // cada celula ganha a classe 'celula-preta' ou 'celula-branca' de acordo com o seu resultado
        } else {
          celula.addClass('celula-preta');
        }

        celula.attr('id',`casa-${l}-${c}`)
  
        tabuleiroDOM.append(celula);

      
      }
    }

    // const primeiraCasa = $('#casa-0-0');
    // primeiraCasa.remove();

  });



