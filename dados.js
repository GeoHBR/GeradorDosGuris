let username;

    document.getElementById("btnGerar").onclick = function(){
        username = document.getElementById("nomeInput").value;
        cidade = document.getElementById("cidadeInput").value;
        adj = document.getElementById("adjInput").value;
        msg = document.getElementById("msgInput").value;

        var fraseFinal = "Feliz aniversário " +username + " que você possa cair mais vezes de bike na minha frente e que você abra assas de mundo do " +cidade + " para o mundo real para cair mais vezes na minha frente seu " +adj + "feliz aniversário "+msg;
        document.getElementById("resultado").innerHTML = fraseFinal;
    }

    document.getElementById("btnCompartilhar").addEventListener("click", function() {
        // código para compartilhar a mensagem no WhatsApp
      });

      document.getElementById("btnCompartilhar").addEventListener("click", function() {
        var mensagem = encodeURIComponent(fraseFinal);
        window.open("https://api.whatsapp.com/send?text=" + mensagem);
      });

    document.getElementById("btnCopiar").addEventListener("click", function() {
        // código para copiar o texto para a área de transferência
    });

    document.getElementById("btnCopiar").addEventListener("click", function() {
        navigator.clipboard.writeText(fraseFinal).then(function() {
          console.log("Texto copiado com sucesso para a área de transferência.");
        }, function(err) {
          console.error("Erro ao copiar o texto para a área de transferência:", err);
        });
      });
    
      
      


        //Feliz aniversário (NOME) que vc possa cair mais vezes de bike na minha frente e que vc abra assas do mundo do 
        //(CIDADE) para o mundo real para cair mais vezes na minha frente seu ladrao caixa dois de 
        //churrasco dos guri pai feliz aniversário (ALGUÉM ALEATÓRIO)