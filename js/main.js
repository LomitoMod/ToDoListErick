function agregar(){
    const textoinput=document.getElementById("inputpushme").value;
    const nuevalista=document.createElement("li");
    const textoNuevoElemento = document.createTextNode(textoinput);
    nuevalista.appendChild(textoNuevoElemento);

    const lista = document.querySelector(".Lista");
    lista.appendChild(nuevalista);
    document.getElementById("inputpushme").value = "";
}