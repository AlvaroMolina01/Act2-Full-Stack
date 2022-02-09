const btnEdit = document.getElementById("btnEdit");
btnEdit.addEventListener("click", fetchEditPlayer);

const btnDelete = document.getElementById("btnDelete");
btnDelete.addEventListener("click", fetchDeletePlayer);

async function fetchDeletePlayer() {
    const idField = document.getElementById("txtId").value;
    const nameField = document.getElementById("txtName").value;
    const surnameField = document.getElementById("txtSurname").value;
    const ageField = document.getElementById("txtAge").value;
    const teamField = document.getElementById("txtTeam").value;
    console.log(nameField + " " + surnameField + " " + ageField + " " + teamField);

    const newPlayer = { name: nameField, surname: surnameField, age: ageField, team: teamField };

    const response = await fetch(
            "https://pruebafootball.herokuapp.com/players/" + idField + "?_method=DELETE", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newPlayer)
            }
        )
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            alert("Player Deleted");
            window.location.href = "index.html";
        })
        .catch((error) => console.log(error));
}



async function fetchEditPlayer() {
    const idField = document.getElementById("txtId").value;
    const nameField = document.getElementById("txtName").value;
    const surnameField = document.getElementById("txtSurname").value;
    const ageField = document.getElementById("txtAge").value;
    const teamField = document.getElementById("txtTeam").value;
    console.log(nameField + " " + surnameField + " " + ageField + " " + teamField);

    const newPlayer = { name: nameField, surname: surnameField, age: ageField, team: teamField };

    const response = await fetch(
            "https://pruebafootball.herokuapp.com/players/" + idField + "?_method=PUT", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newPlayer)
            }
        )
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            alert("Player Edited");

        })
        .catch((error) => console.log(error));
}


async function fetchPlayer(id) {
    const response = await fetch(
            "https://pruebafootball.herokuapp.com/players/" + id, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
            }
        )
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let player = data.player;

            try {

                document.getElementById("txtId").value = id;

                if (player != null) {
                    document.getElementById("txtName").value = player.name;
                    document.getElementById("txtSurname").value = player.surname;
                    document.getElementById("txtAge").value = player.age;
                    document.getElementById("txtTeam").value = player.team;
                }

            } catch (e) {
                // sentencias para manejar cualquier excepción
                console.log(e); // pasa el objeto de la excepción al manejador de errores
            }




        })
        .catch((error) => console.log(error));
}



function getParameterByName(name, url = window.location.href) {
    console.log(url);

    name = name.replace(/[\[\]]/g, '\\$&');

    console.log(name);
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

console.log(getParameterByName('id'));
fetchPlayer(getParameterByName('id'));