import { UserModal } from "../Model/UserModal.js";

const URLAPI_U = 'https://paginas-web-cr.com/Api/apis/';
const listUser = 'ListaUsuarios.php'; 
const addUser ='InsertarUsuarios.php';

let allUsers = []

document.addEventListener('DOMContentLoaded', () => {
    getData();

    const formUsers = document.getElementById('formUsers');
    if(formUsers) {
        formUsers.addEventListener('submit', function(e) {
            e.preventDefault();
            addUsers();
        });
    }
    
    const btnLogin = document.getElementById("btnLogin");
    if(btnLogin) {
        btnLogin.addEventListener('submit', function(e) {
            e.preventDefault();
            login();
        });
    }
    
});

function getData() {
    fetch(`${URLAPI_U}${listUser}`, {
        method : 'GET'
    })
    .then(Response => Response.json())
    .then(data => {
        allUsers = data.data; /*The data is added in the allUsers */
        tableUsers(allUsers);
    })
    .catch(error => console.error(error))
}

/**---------------------------------------------------------------------------------------------- */
function tableUsers(data) {
    console.log(data);

    const table = document.getElementById('tableDataUsers');

    table.innerHTML = '';

    data.forEach(element => {
        let line = `
                     <tr class="">
                         <td scope="row">${element.id}</td>
                         <td>${element.name}</td>
                         <td>${element.password}</td>
                         <td>${element.email}</td>
                        <td>                    
                            <a
                                name=""
                                id=""
                                class="btn btn-danger"
                                onclick="openDeleteCourses(${element.id})"
                                role="button"
                                >Delete</a
                            >
                                
                
                           <a class="btn btn-primary" 
                           onclick="EditCourse(${element.id},
                           '${element.name}',
                           '${element.password}',
                           '${element.email}')" 
                           role="button">
                           Edit</a>

                        
                        </td>
                     </tr>        
                 `;
                 table.innerHTML += line;
        
    });    
}

function addUsers (data) {
    console.log(data);

    /*Declaration the variables, data is captured from the html file */
    const idUser = document.getElementById("idUsers").value;
    const nameUser = document.getElementById("nameUser").value;
    const passwordUser = document.getElementById("passwordUser").value;
    const emailUser = document.getElementById("emailUser").value;
    
    if (!emailUser || !nameUser || !passwordUser) {
        alert("The field is required.");
        return;
    }

    const emailExists = allUsers.some(user => user.email === emailUser);

    if (emailExists) {
        alert("This email already exists. Please use a different email.");
        return; 
    }

    const objUser = new UserModal(idUser, nameUser, passwordUser, emailUser);


    /**Connection with API */
    fetch(`${URLAPI_U}${addUser}`, {
        method : 'POST',
        body : JSON.stringify(objUser) /**Converts data, to JSON format */
    })
    .then(response => response.json())
    .then(data => {
        console.log('User Add', data);
    })
    .catch(error => console.error(error))
}

function login() {
    
    const emailUser = document.getElementById("emailLogin").value;
    const passwordUser = document.getElementById("passwordLogin").value;
    
    if (!emailUser || !passwordUser) {
        alert("The field is required.");
        return;
    }

    const emailExists = allUsers.some(user => user.email === emailUser);
    const password = allUsers.some(user => user.password === passwordUser);
    
    if (emailExists && password) {
        alert("This User already exists.");
        return; 
    }

}

