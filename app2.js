const btnNew = document.getElementById("btnNew");
btnNew.addEventListener("click", fetchCreatePlayer);


async function fetchCreatePlayer() {
    //const newProduct = {name: "miguelinnnnnnn",price: 25.5, category:"vegetable"};
    const nameField = document.getElementById("txtName").value;
    const surnameField = document.getElementById("txtSurname").value;
    const ageField = document.getElementById("txtAge").value;
    const teamField = document.getElementById("txtTeam").value;
    console.log(nameField + " " + surnameField + " " + ageField);

    const newPlayer = { name: nameField, surname: surnameField, age: ageField, team: teamField };

    const response = await fetch(
            "https://pruebafootball.herokuapp.com/players", {
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
            alert("Player Created");

        })
        .catch((error) => console.log(error));
}