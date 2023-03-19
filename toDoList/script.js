
// Com forEch ??



// Com metodo appendChild - funciona mas perde a config

 function pushItem(){
  let listaAfazeres = document.getElementById("itemDigitado");
  let ulLista = document.getElementById('lista');
  let novoLi = document.createElement('li');
  let checkbox = document.createElement('input');
  let cxTexto = document.createElement('label');

  cxTexto.innerText = listaAfazeres.value;
  checkbox.type = "checkbox";
  checkbox.className = "form-check-input me-1";
  cxTexto.className = "form-check-label";
  novoLi.className = "list-group-item";

  novoLi.appendChild(checkbox);
  novoLi.appendChild(cxTexto);
  
  ulLista.appendChild(novoLi);
  
  listaAfazeres.value = "";
 }









//  // DEVER DE CASA ENVIAR ELEMENTOS DE LISTAS PARA  

//      // SE O VALOR FOR DIFERENTE DE VAZIO CRIAR UM ARRAY COM LISTAS, pode adicionar ocm push
//     // laço com for each co variavel q vai giuardar. pesquisar metodo append shold


//    //let tasks = (`<li class="list-group-item">${listaAfazeres.value}</li>`);
//    //let ul = document.getElementById("lista").innerHTML = tasks;