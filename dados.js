    
    $(function () {
        $('[data-toggle="popover"]').popover()
      })

    document.addEventListener("DOMContentLoaded", function() {

        document.getElementById("btnGerar").onclick = function(){
            username = document.getElementById("nomeInput").value;
            cidade = document.getElementById("cidadeInput").value;
            adj = document.getElementById("adjInput").value;
            msg = document.getElementById("msgInput").value;
    
            var fraseFinal = "Feliz aniversário " +username + " que você possa cair mais vezes de bike na minha frente e que você abra assas de mundo do " +cidade + " para o mundo real para cair mais vezes na minha frente seu " +adj + " feliz aniversário "+msg;
            document.getElementById("resultado").innerHTML = fraseFinal;
        }
        var btnCompartilhar = document.getElementById("btnCompartilhar");
      
        if (btnCompartilhar) {
          btnCompartilhar.addEventListener("click", function() {
            var textoCompartilhar = encodeURIComponent(resultado.textContent);
            var urlCompartilhar = "https://api.whatsapp.com/send?text=" + textoCompartilhar;
            window.open(urlCompartilhar);
          });
        } else {
          console.error("Elemento com ID 'btnCompartilhar' não encontrado na página");
        }
        var btnCopiar = document.getElementById("btnCopiar");
        if (btnCopiar) {
          btnCopiar.addEventListener("click", function() {
            if (resultado) {
              navigator.clipboard.writeText(resultado.textContent).then(function() {
                var feedback = document.getElementById("feedback");
                console.log("Texto copiado com sucesso: " + resultado);
              }, function(error) {
                console.error("Erro ao copiar o texto: " + error);
              });
            } else {
              console.error("A variável 'fraseFinal' não está definida ou está vazia");
            }
          });
        } else {
          console.error("Elemento com ID 'btnCopiar' não encontrado na página");
        }
      });
    
      
      


        //Feliz aniversário (NOME) que vc possa cair mais vezes de bike na minha frente e que vc abra assas do mundo do 
        //(CIDADE) para o mundo real para cair mais vezes na minha frente seu ladrao caixa dois de 
        //churrasco dos guri pai feliz aniversário (ALGUÉM ALEATÓRIO)