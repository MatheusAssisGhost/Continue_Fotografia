function enviar_dados() {
    var coletados = document.getElementById("dados1, dados2, dados3, dados4, dados5, dados6").value;

    let form = document.getElementById("texto_teste");

    form.innerHTML("Olá," + dados1 + "Tudo bem? Confirma seus dados, por favor!" + dados2 + dados3 + dados4 + dados5 + dados6);
}