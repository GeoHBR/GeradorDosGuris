let username;

    document.getElementById("btnGerar").onclick = function(){
        username = document.getElementById("nomeInput").value;
        cidade = document.getElementById("cidadeInput").value;
        adj = document.getElementById("adjInput").value;
        msg = document.getElementById("msgInput").value;

        document.getElementById("myLabel").innerHTML = "Feliz aniversário "+username; 
        document.getElementById("myLabel 2").innerHTML = " que você possa cair mais vezes de bike na minha frente e que você abra assas de mundo do " +cidade;
        document.getElementById("myLabel 3").innerHTML = " para o mundo real para cair mais vezes na minha frente seu " +adj;
        document.getElementById("myLabel 4").innerHTML = "feliz aniversário "+msg;

    }
        //Feliz aniversário (NOME) que vc possa cair mais vezes de bike na minha frente e que vc abra assas do mundo do 
        //(CIDADE) para o mundo real para cair mais vezes na minha frente seu ladrao caixa dois de 
        //churrasco dos guri pai feliz aniversário (ALGUÉM ALEATÓRIO)