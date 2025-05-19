import { CourseModel } from "../Model/CourseModel.js";
import { Modals } from "./modals.js";

/*Global variables */
const URLAPI = 'https://paginas-web-cr.com/Api/apis/';
const listCourses = 'ListaCurso.php';
const addCourse = 'InsertarCursos.php';
const updateCourse = 'ActualizarCursos.php';
const deleteCourse = 'BorrarCursos.php';

/*array*/
let allCourse = [];

/**********************************************************************************/

$(document).ready(function() {
    getData();

    $('#btnAddCourse').on('click', function() {
       modals(); 
    });

    setupSearchEvents();
});



function modals() {
    Modals.modalAddCourses(); 
    const modal = new bootstrap.Modal($('#courseModal')[0]);
    modal.show(); 
    
    $('#formAddCourse').off('submit').on('submit', function (e) {
        e.preventDefault();
        addCourses();
    });

}

/**********************************************************************************/

/*Search for name course */
function setupSearchEvents() {
    const $btnSearch = $('#btnSearchCourse');
    const $inputSearch = $('#searchCourse');

    if ($btnSearch.length && $inputSearch.length) {
        // Al hacer clic en el botón
        $btnSearch.on('click', function () {
            const value = $inputSearch.val().toLowerCase().trim();

            const filtered = allCourse.filter(course =>
                course.nombre.toLowerCase().includes(value)
            );

            dataTableCourse(filtered);
        });

        // Si presiona Enter en el input
        $inputSearch.on('keypress', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                $btnSearch.click();
            }
        });
    }
}


/**********************************************************************************/
/**********************************************************************************/

/*Second Function
Connect the API with back*/
function getData() {
    $.ajax({
        type: "POST",
        url: `${URLAPI}${listCourses}`,
        dataType: "json",
        success: function (response) {
            allCourse = response.data; // Guarda para búsqueda
            dataTableCourse(allCourse); // Pinta la tabla
        },
        error: function (xhr, status, error) {
            console.error("Error en getData:", error);
            $("#dataTableCourseH").html(`
                <tr><td colspan="6" class="text-danger">Error loading courses</td></tr>
            `);
        }
    });
}


/**********************************************************************************/
/*Third function show the data */
function dataTableCourse(data) {
    const $table = $("#dataTableCourseH");
    $table.empty(); // Limpia la tabla antes de agregar nuevos datos

    data.forEach(course => {
        const row = `
            <tr>
                <td>${course.id}</td>
                <td>${course.nombre}</td>
                <td>${course.descripcion}</td>
                <td>${course.tiempo}</td>
                <td>${course.usuario}</td>
                <td>
                    <a class="btn btn-danger" onclick="openDeleteCourses(${course.id})">Delete</a>
                    <a class="btn btn-primary" onclick="EditCourse(${course.id}, 
                                                                    '${course.nombre}', 
                                                                    '${course.descripcion}', 
                                                                    '${course.tiempo}', 
                                                                    '${course.usuario}')">
                                                                    Edit</a>
                </td>
            </tr>`;
        $table.append(row);
    });
}


/**********************************************************************************/
/**********************************************************************************/
/*Fourth Function Add Course */
function addCourses(data) {

    /*capture the data from the HTML 
    and are assigned to a constant*/
    const name = $('#nameCourse').val();
    const description = $('#descriptionCourse').val();
    const time = $('#timeCourse').val();
    const user = $('#userCourse').val();

    /*constructor */
    const newCourse = new CourseModel(null, name, description, time, user);

    /*Connect with API */
    $.ajax({
        type: "POST",
        url: `${URLAPI}${addCourse}`,
        data: JSON.stringify(newCourse),
        contentType: 'application/json',
        dataType: "json",
        success: function (response) {
            hideModal('#courseModal'); 
        },
        error : function(xhr, status, error) {
            console.error("Error the adds", error);
        }
    });
}//ADD COURSE

/**********************************************************************************/
/**********************************************************************************/

window.EditCourse = (id, nameCourse, descriptionEdit, timeCourse, userCourse) => {
    Modals.modalEditCourses();

    $('#idEdit').val(id);
    $('#nameEdit').val(nameCourse);
    $('#descriptionEdit').val(descriptionEdit);
    $('#timeEdit').val(timeCourse);
    $('#userEdit').val(userCourse);

    const modal = new bootstrap.Modal($('#modalEdit')[0]);
    modal.show();

    $('#formEdit').off('submit').on('submit', function (e) {
        e.preventDefault();
        updateCourses();
    });
   
};

/**********************************************************************************/

function updateCourses() {
    const id = $('#idEdit').val();
    const name = $('#nameEdit').val();
    const description = $('#descriptionEdit').val();
    const time = $('#timeEdit').val();
    const user = $('#userEdit').val();

    const objEdit = new CourseModel(id, name, description, time, user);

    $.ajax({
        type: "POST",
        url: `${URLAPI}${updateCourse}`,
        data: JSON.stringify(objEdit),
        contentType: 'application/json',
        dataType: "json",
        success: function (response) {
            hideModal('#modalEdit');
        },
        error: function () {
            alert("Error updating course");
        }
    });
}


/**********************************************************************************/
/**********************************************************************************/
/*This show modal */
window.openDeleteCourses =  function (id) {
    Modals.modalDeleteCourses();

    $('#idDeleteCourse').val(id);
    
    const modal = new bootstrap.Modal($('#modalDeleteCourse')[0]);
    modal.show();

    $('#formDelete').off('submit').on('submit', function (e) {
        e.preventDefault();
        deleteCourses();
    });
    
}



/**********************************************************************************/

/*this delete course */
function deleteCourses() {

    const id = $('#idDeleteCourse').val();

    $.ajax({
        type: "POST",
        url: `${URLAPI}${deleteCourse}`,
        data: JSON.stringify({ id }),
        contentType: 'application/json',
        dataType: "json",
        success: function (response) {
            hideModal('#modalDeleteCourse')
        },
        error: function () {
            alert("Error deleting course");
        }
    });
}

function hideModal(hideMod) {
    getData();
    const modal = bootstrap.Modal.getInstance($(hideMod)[0]);
    modal.hide();
}