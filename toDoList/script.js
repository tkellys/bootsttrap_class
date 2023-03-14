
let listaAfazeres = document.getElementById("itemDigitado");

 function pushItem(){
    // SE O VALOR FOR DIFERENTE DE VAZIO CRIAR UM ARRAY COM LISTAS, pode adicionar ocm push
    // laço com for each co variavel q vai giuardar. pesquisar metodo append shold
   let tasks = (`<li class="list-group-item">${listaAfazeres.value}</li>`);
   let ul = document.getElementById("lista").innerHTML = tasks;
    
 }

 // DEVER DE CASA ENVIAR ELEMENTOS DE LISTAS PARA  