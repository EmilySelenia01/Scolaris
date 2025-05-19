import {GroupModel} from "../Model/GroupModel.js";
import { ModalGroups } from "./modalGroups.js";

/*Global variables */
const URLAPIG = 'https://paginas-web-cr.com/Api/apis/';
const listGroup = 'ListaGrupo.php';
const insertGroup = 'InsertarGrupo.php';
const updateGroup = 'ActualizarGrupo.php';
const deleteGroup = 'BorrarGrupo.php';

/*array*/
let allGroups =[];
/**********************************************************************************/

/*Events the courses*/
$(document).ready(function () {
    getData();

    $('#btnAddGroup').on('click', function () {
        modals();
    });

    setupSearchEvents();
});



function modals() {
    ModalGroups.modalAddGroups(); 
    const modal = new bootstrap.Modal($('#modalAddGroupp')[0]);
    modal.show();

    $('#formAddGroup').off('submit').on('submit', function (e) {
        e.preventDefault();
        addGroups();
    });
}


/**********************************************************************************/
/**********************************************************************************/
/*First Function
Connect the API with back*/

function getData() {
    $.ajax({
        type: "POST",
        url: `${URLAPIG}${listGroup}`,
        dataType: "json",
        success: function (response) {
            allGroups = response.data;
            dataTableGroup(allGroups);
        },
        error: function () {
            $('#dataTableGroupsH').html(`<tr><td colspan="3" class="text-danger">Error loading groups</td></tr>`);
        }
    });
}

/**********************************************************************************/
/*Second function show the data  */
function dataTableGroup(data) {
    const $table = $('#dataTableGroupsH');
    $table.empty();

    data.forEach(element => {
        const row = `
            <tr>
                <td>${element.id}</td>
                <td>${element.nombre}</td>
                <td>
                    <a class="btn btn-danger" onclick="openDeleteGroups(${element.id})">Delete</a>
                    <a class="btn btn-primary" onclick="EditGroup(${element.id}, '${element.nombre}')">Edit</a>
                </td>
            </tr>`;
        $table.append(row);
    });
}


/**********************************************************************************/
/**********************************************************************************/

function addGroups() {
    const nameGroup = $('#nameEditGroup').val();
    const objGroup = new GroupModel(null, nameGroup);

    $.ajax({
        type: "POST",
        url: `${URLAPIG}${insertGroup}`,
        data: JSON.stringify(objGroup),
        contentType: 'application/json',
        dataType: "json",
        success: function (response) {
            hideModal('#modalAddGroupp');
        },
        error: function () {
            alert("Error adding group");
        }
    });
}


/**********************************************************************************/
/**********************************************************************************/
window.EditGroup = function (id, nombre) {
    ModalGroups.modalEditGroups();

    $('#idEditGroup').val(id);
    $('#nameEditGroup').val(nombre);

    const modal = new bootstrap.Modal($('#modalEditGroupp')[0]);
    modal.show();

    $('#formEditGroup').off('submit').on('submit', function (e) {
        e.preventDefault();
        updateGroups();
    });

};


/**********************************************************************************/

function updateGroups() {
    const id = $('#idEditGroup').val();
    const nameGroup = $('#nameEditGroup').val();
    
    const objGroup = new GroupModel(id, nameGroup);

    $.ajax({
        type: "POST",
        url: `${URLAPIG}${updateGroup}`,
        data: JSON.stringify(objGroup),
        contentType: 'application/json',
        dataType: "json",
        success: function (response) {
            hideModal('#modalEditGroupp');
        },
        error: function () {
            alert("Error updating group");
        }
    });
}


/**********************************************************************************/
/**********************************************************************************/

window.openDeleteGroups = function (id) {
    ModalGroups.modalDeleteGroups();
    
    $('#idDeleteGroup').val(id);
    
    const modal = new bootstrap.Modal($('#modalDeleteGroupp')[0]);
    modal.show();

    $('#formDeleteGroup').off('submit').on('submit', function (e) {
        e.preventDefault();
        deleteGroups();
    });
};
/**********************************************************************************/

function deleteGroups() {
    const id = $('#idDeleteGroup').val();

    $.ajax({
        type: "POST",
        url: `${URLAPIG}${deleteGroup}`,
        data: JSON.stringify({ id }),
        contentType: 'application/json',
        dataType: "json",
        success: function (response) {
            hideModal('#modalDeleteGroupp');
        },
        error: function () {
            alert("Error deleting group");
        }
    });
}
/**********************************************************************************/

function hideModal(hideMod) {
    getData();
    const modal = bootstrap.Modal.getInstance($(hideMod)[0]);
    modal.hide();
}

/**********************************************************************************/
/**********************************************************************************/

function setupSearchEvents() {
    const $btnSearch = $('#btnSearchGroup');
    const $inputSearch = $('#searchGroup');

    if ($btnSearch.length && $inputSearch.length) {
        $btnSearch.on('click', function () {
            const value = $inputSearch.val().toLowerCase().trim();
            const filtered = allGroups.filter(group =>
                group.nombre.toLowerCase().includes(value)
            );
            dataTableGroup(filtered);
        });

        $inputSearch.on('keypress', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                $btnSearch.click();
            }
        });
    }
}
