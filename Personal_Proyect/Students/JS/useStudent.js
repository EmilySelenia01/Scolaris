import { StudentModel } from "../Model/StudentModel.js";
import { modalStudents } from "./modalStudents.js";

/*Global variables */
const URLAPIS = 'https://paginas-web-cr.com/Api/apis/';
const listStudent = 'ListaEstudiantes.php';
const addStudent = 'InsertarEstudiantes.php';
const updateStudent = 'ActualizarEstudiantes.php';
const deleteStudent = 'BorrarEstudiantes.php';

/*array*/
let allStudents =[];

/**********************************************************************************/

/*call function */
/*Events the courses*/
$(document).ready(function () {
    getDataStudent();

    $('#btnAddStudent').on('click', () => {
        modals();
    });

    setupStudentSearch();
});


function modals() {
    modalStudents.modalAddStudents();
    const modal = new bootstrap.Modal($('#modalAddStudent')[0]);
    modal.show();

    $('#formAddStudent').off('submit').on('submit', function (e) {
        e.preventDefault();
        addStudents();
    });
}

/**********************************************************************************/
/*Search for name student */
function setupStudentSearch() {
    $('#btnSearchStudent').on('click', () => {
        const value = $('#inputSearchStudent').val().toLowerCase().trim();
        const filtered = allStudents.filter(student => student.nombre.toLowerCase().includes(value));
        dataTableStudent(filtered);
    });

    $('#inputSearchStudent').on('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            $('#btnSearchStudent').click();
        }
    });
}


/**********************************************************************************/
/*First Function
Connect the API with back*/
function getDataStudent() {
    $.ajax({
        type: "POST",
        url: `${URLAPIS}${listStudent}`,
        dataType: "json",
        success: function (response) {
            allStudents = response.data;
            dataTableStudent(allStudents);
        },
        error: function (xhr, status, error) {
            console.error("Error loading students:", error);
            $('#dataTableStudents').html(`<tr><td colspan="15" class="text-danger">Error loading students</td></tr>`);
        }
    });
}

/**********************************************************************************/
/*Show */
/*Third function show the data */
function dataTableStudent(data) {
    const $table = $('#dataTableStudents');
    $table.empty();

    data.forEach(student => {
        const row = `
        <tr>
            <td>${student.id}</td>
            <td>${student.cedula}</td>
            <td>${student.correoelectronico}</td>
            <td>${student.telefono}</td>
            <td>${student.telefonocelular}</td>
            <td>${student.fechanacimiento}</td>
            <td>${student.sexo}</td>
            <td>${student.direccion}</td>
            <td>${student.nombre}</td>
            <td>${student.apellidopaterno}</td>
            <td>${student.apellidomaterno}</td>
            <td>${student.nacionalidad}</td>
            <td>${student.idCarreras}</td>
            <td>${student.usuario}</td>
            <td>
                <a class="btn-action delete" onclick="openDeleteStudents(${student.id})">Delete</a>
                <a class="btn-action edit" onclick="EditStudents(${student.id}, '${student.cedula}', '${student.correoelectronico}', '${student.telefono}', '${student.telefonocelular}', '${student.fechanacimiento}', '${student.sexo}', '${student.direccion}', '${student.nombre}', '${student.apellidopaterno}', '${student.apellidomaterno}', '${student.nacionalidad}', '${student.idCarreras}', '${student.usuario}')">Edit</a>
            </td>
        </tr>`;
        $table.append(row);
    });
}

/**********************************************************************************/
/**********************************************************************************/

function addStudents() {
    const student = new StudentModel(
        $('#idStudent').val(),
        $('#idCardStudent').val(),
        $('#emailStudent').val(),
        $('#phoneStudent').val(),
        $('#cellPhoneStudent').val(),
        $('#dateStudent').val(),
        $('#sexStudent').val(),
        $('#addressStudent').val(),
        $('#nameStudent').val(),
        $('#firstLastNameStudent').val(),
        $('#secondLastNameStudent').val(),
        $('#nationalityStudent').val(),
        $('#idCarrier').val(),
        $('#userStudent').val()
    );

    $.ajax({
        type: "POST",
        url: `${URLAPIS}${addStudent}`,
        data: JSON.stringify(student),
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
            hideModal('#modalAddStudent');
        },
        error: function () {
            alert("Error adding student.");
        }
    });
}

/**********************************************************************************/
/**********************************************************************************/

window.EditStudents = function (...args) {
    const [id, cedula, correoelectronico, telefono, telefonocelular, fechanacimiento, sexo, direccion, nombre, apellidopaterno, apellidomaterno, nacionalidad, idCarreras, usuario] = args;

    modalStudents.modalEditStudents();

        $('#idStudentEdit').val(id);
        $('#idCardStudentEdit').val(cedula);
        $('#emailStudentEdit').val(correoelectronico);
        $('#phoneStudentEdit').val(telefono);
        $('#cellPhoneStudentEdit').val(telefonocelular);
        $('#dateStudentEdit').val(fechanacimiento);
        $('#sexStudentEdit').val(sexo);
        $('#addressStudentEdit').val(direccion);
        $('#nameStudentEdit').val(nombre);
        $('#firstLastNameStudentEdit').val(apellidopaterno);
        $('#secondLastNameStudentEdit').val(apellidomaterno);
        $('#nationalityStudentEdit').val(nacionalidad);
        $('#idCarrierEdit').val(idCarreras);
        $('#userStudentEdit').val(usuario);

        const modal = new bootstrap.Modal($('#modalEditS')[0]);
        modal.show();

        $('#formEditStudent').off('submit').on('submit', function (e) {
            e.preventDefault();
            updateStudents();
        });
};

/**********************************************************************************/

function updateStudents() {
    const student = new StudentModel(
        $('#idStudentEdit').val(),
        $('#idCardStudentEdit').val(),
        $('#emailStudentEdit').val(),
        $('#phoneStudentEdit').val(),
        $('#cellPhoneStudentEdit').val(),
        $('#dateStudentEdit').val(),
        $('#sexStudentEdit').val(),
        $('#addressStudentEdit').val(),
        $('#nameStudentEdit').val(),
        $('#firstLastNameStudentEdit').val(),
        $('#secondLastNameStudentEdit').val(),
        $('#nationalityStudentEdit').val(),
        $('#idCarrierEdit').val(),
        $('#userStudentEdit').val()
    );

    $.ajax({
        type: "POST",
        url: `${URLAPIS}${updateStudent}`,
        data: JSON.stringify(student),
        contentType: "application/json",
        dataType: "json",
        success: function () {
            hideModal('#modalEditS');
        },
        error: function () {
            alert("Error updating student.");
        }
    });
}


/**********************************************************************************/
/**********************************************************************************/
window.openDeleteStudents = function (id) {
    modalStudents.modalDeleteStudents();
    
    $('#idDeleteStudent').val(id);
    const modal = new bootstrap.Modal($('#modalDeleteStudent')[0]);
    modal.show();

    $('#formDeleteStudent').off('submit').on('submit', function (e) {
        e.preventDefault();
        deleteStudents();
    });
};
/**********************************************************************************/
function deleteStudents() {
    const id = $('#idDeleteStudent').val();

    $.ajax({
        type: "POST",
        url: `${URLAPIS}${deleteStudent}`,
        data: JSON.stringify({ id }),
        contentType: "application/json",
        dataType: "json",
        success: function () {
            hideModal('#modalDeleteStudent');
        },
        error: function () {
            alert("Error deleting student.");
        }
    });
}

function hideModal(hideMod) {
    getDataStudent();
    const modal = bootstrap.Modal.getInstance($(hideMod)[0]).hide();
}

/**********************************************************************************/
/**********************************************************************************/

