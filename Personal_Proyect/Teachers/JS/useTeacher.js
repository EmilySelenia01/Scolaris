import { TeacherModel } from '../Model/TeacherModel.js';
import { modalTeacher } from './modalTeacher.js';

/*Global variables */
const APIURLT = 'https://paginas-web-cr.com/Api/apis/';
const listTeacher = 'ListaProfesores.php';
const addTeacher = 'InsertarProfesores.php';
const updateTeacher = 'ActualizarProfesores.php';
const deleteTeacher = 'BorrarProfesores.php';

/*array*/
let allTeachers = [];

/**********************************************************************************/
/*Events*/

$(document).ready(function() {
    getDataTeacher();

    $('#btnAddTeacher').on('click',function() {
       modals();        
    });

});

function modals() {
    modalTeacher.modalAddTeachers()
    const modal = new bootstrap.Modal($('#modalAddTeacher')[0]);
    modal.show();

    $('#formAddTeacher').off('submit').on('submit', function (e) {
        e.preventDefault();
        addTeachers();
    });
}


/**********************************************************************************/
/*Search for name teacher */
function searchTeacher() {
     /*Called index_T */
    const btnSearch = document.getElementById('btnSearchTeacher');
    const inputSearch = document.getElementById('searchTeacher');

    /*It only works if you have both*/
    if (btnSearch && inputSearch) {

        /*takes the value of the input and searches all
            teacher for the value */
        btnSearch.addEventListener('click', () => {
            const value = inputSearch.value.toLowerCase().trim();
            const filter = allTeachers.filter(teacher =>
                teacher.nombre.toLowerCase().includes(value)
            );
            /*Passes the value to search */
            dataTableTeachers(filter);
        });

        /*Pressing input loads it */
        inputSearch.addEventListener('keypress', (e) => {
            if (e.key() === 'Enter') {
                e.preventDefault();
                btnSearch.click();
            }
        });
    }
}/*End Function */ 

/**********************************************************************************/
/*Connect with api teacher */
function getDataTeacher() {
    $.ajax({
        type: "POST",
        url: `${APIURLT}${listTeacher}`,
        dataType: "json",
        success: function (response) {
            allTeachers = response.data;
            dataTableTeachers(allTeachers);
        },
        error: function () {
            $('#dataTableTeacher').html(`<tr><td colspan="3" class="text-danger">Error loading teachers</td></tr>`);
        }
    });
}

/**********************************************************************************/
/*Execute the view of teachers
Third function show the data */
function dataTableTeachers(data) {
    /*local variable 
    It is called the index*/
    const $table = $('#dataTableTeacher');
    $table.empty();

    data.forEach(element => {
        let line = `
                     <tr>
                         <td>${element.id}</td>
                         <td>${element.cedula}</td>
                         <td>${element.correoelectronico}</td>
                         <td>${element.telefono}</td>
                         <td>${element.telefonocelular}</td>
                         <td>${element.fechanacimiento}</td>
                         <td>${element.sexo}</td>
                         <td>${element.direccion}</td>
                         <td>${element.nombre}</td>
                         <td>${element.apellidopaterno}</td>
                         <td>${element.apellidomaterno}</td>
                         <td>${element.idCarreras}</td>
                         <td>${element.usuario}</td>
                         <td>${element.nacionalidad}</td>
                        <td>                    
                            <a
                                name=""
                                id=""
                                class="btn-action delete"
                                onclick="openDeleteTeacher(${element.id})"
                                role="button"
                                >Delete</a
                            >

                            
                           <a class="btn-action edit" 
                           onclick="EditTeachers(${element.id},
                           '${element.cedula}',
                           '${element.correoelectronico}',
                           '${element.telefono}',
                           '${element.telefonocelular}',
                           '${element.fechanacimiento}',
                           '${element.sexo}',
                           '${element.direccion}',
                           '${element.nombre}',
                           '${element.apellidopaterno}',
                           '${element.apellidomaterno}',
                           '${element.idCarreras}',
                           '${element.usuario}',
                           '${element.nacionalidad}')" 
                           role="button">
                           Edit</a>
                        </td>
                     </tr>        
                 `;

        $table.append(line);

    });/*End Foreach */
}/*End Third Function */

/**********************************************************************************/
/**********************************************************************************/

function addTeachers() {

    /*capture the data from the HTML 
    and are assigned to a constant*/
    const idCard = $('#idCardTeacher').val();
    const email = $('#emailTeacher').val();
    const phone = $('#phoneTeacher').val();
    const cellPhone = $('#cellPhoneTeacher').val();
    const dateBorn = $('#dateTeacher').val();
    const sex = $('#sexTeacher').val();
    const address = $('#addressTeacher').val();
    const name = $('#nameTeacher').val();
    const firstLastName = $('#firstLastNameTeacher').val();
    const secondLastName = $('#secondLastNameTeacher').val();
    const carrier = $('#idCarrier').val();
    const user = $('#userTeacher').val();
    const nationality = $('#nationalityTeacher').val();

    /*constructor */
    const objTeacher = new TeacherModel(null, idCard, email, phone,
        cellPhone, dateBorn, sex, address, name, firstLastName,
        secondLastName, carrier, user, nationality);

    /*Connect with API TEACHER */
    $.ajax({
        type: "POST",
        url: `${APIURLT}${addTeacher}`,
        data: JSON.stringify(objTeacher),
        contentType: 'application/json',
        dataType: "json",
        success: function (response) {
            hideModal('#modalAddTeacher');
            
        },
        error: function(xhr, status, error) {
            alert("Error adding teacher")
        }
    });

}

/**********************************************************************************/
/**********************************************************************************/
/*Create container to Modal and gets teacher data */
window.EditTeachers = function (
    id, cedula, correoelectronico, telefono, telefonocelular, fechanacimiento,
    sexo, direccion, nombre, apellidopaterno, apellidomaterno,
    idCarreras, usuario, nacionalidad
) {
    modalTeacher.modalEditTeachers(); 

    const modal = new bootstrap.Modal($('#modalEditTeacher')[0]);
    modal.show();

    $('#idTeacherEdit').val(id);
    $('#idCardTeacherEdit').val(cedula);
    $('#emailTeacherEdit').val(correoelectronico);
    $('#phoneTeacherEdit').val(telefono);
    $('#cellPhoneTeacherEdit').val(telefonocelular);
    $('#dateTeacherEdit').val(fechanacimiento);
    $('#sexTeacherEdit').val(sexo);
    $('#addressTeacherEdit').val(direccion);
    $('#nameTeacherEdit').val(nombre);
    $('#firstLastNameTeacherEdit').val(apellidopaterno);
    $('#secondLastNameTeacherEdit').val(apellidomaterno);
    $('#idCarrierEdit').val(idCarreras);
    $('#userTeacherEdit').val(usuario);
    $('#nationalityTeacherEdit').val(nacionalidad);

    $('#formEditTeacher').off('submit').on('submit', function (e) {
        e.preventDefault();
        updateTeachers();
    });
};


/**********************************************************************************/
function updateTeachers() {
    const id = $('#idTeacherEdit').val();
    const idCard = $('#idCardTeacherEdit').val();
    const email = $('#emailTeacherEdit').val();
    const phone = $('#phoneTeacherEdit').val();
    const cellPhone = $('#cellPhoneTeacherEdit').val();
    const dateBorn = $('#dateTeacherEdit').val();
    const sex = $('#sexTeacherEdit').val();
    const address = $('#addressTeacherEdit').val();
    const name = $('#nameTeacherEdit').val();
    const firstLastName = $('#firstLastNameTeacherEdit').val();
    const secondLastName = $('#secondLastNameTeacherEdit').val();
    const carrier = $('#idCarrierEdit').val();
    const user = $('#userTeacherEdit').val();
    const nationality = $('#nationalityTeacherEdit').val();

    const objTeacherEdit = new TeacherModel(
        id, idCard, email, phone, cellPhone,
        dateBorn, sex, address, name,
        firstLastName, secondLastName, carrier, user, nationality
    );

    $.ajax({
        type: "POST",
        url: `${APIURLT}${updateTeacher}`,
        data: JSON.stringify(objTeacherEdit),
        contentType: 'application/json',
        dataType: "json",
        success: function (response) {
            hideModal('#modalEditTeacher');
        },
        error: function () {
            alert("Error updating teacher");
        }
    });
}

/**********************************************************************************/


window.openDeleteTeacher = function(id) {

    modalTeacher.modalDeleteTeachers();
    
    $('#idDeleteTeacher').val(id);
    
    const modal = new bootstrap.Modal($('#modalDeleteTeacher')[0]);
    modal.show();
    
    $('#formDeleteTeacher').off('submit').on('submit', function (e) {
        e.preventDefault();
        deleteTeachers();
    });
}

/**********************************************************************************/

/*this delete course */
function deleteTeachers() {
    const id = $('#idDeleteTeacher').val();

    $.ajax({
        type: "POST",
        url: `${APIURLT}${deleteTeacher}`,
        data: JSON.stringify({id}),
        contentType: 'application/json',
        dataType: "json",
        success: function (response) {
            hideModal('#modalDeleteTeacher');
        },
        error: function (xhr,status,error) {
            alert("Error deleting teacher", error);
        }
    });
}

function hideModal(hideMod) {
    getDataTeacher();
    const modal = bootstrap.Modal.getInstance($(hideMod)[0]).hide();
}

/**********************************************************************************/
/**********************************************************************************/
