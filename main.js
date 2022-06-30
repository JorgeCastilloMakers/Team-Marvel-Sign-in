function recolectarDatos(){

    let name_user = document.getElementById("name_user").value;
    let email_user = document.getElementById("email_user").value;
    let password_user = document.getElementById("password_user").value;

    let groupHeroes = "";

    let antiheroe = document.getElementById("antiheroe").value;
    let heroe = document.getElementById("heroe").value;

    if (antiheroe.cheked){
        groupHeroes = antiheroe.value;
    } else{
        groupHeroes = heroe.value;
    }

    let recoleccionDatos = `User Name: ${name_user}` + " " +
    `User Email: ${email_user}` + " " +
    `User Password: ${password_user}` + " " +
    `User Choose: ${groupHeroes}`;
    
    
    console.log(recoleccionDatos);
    alert("Gracias por registrarte");
}

