
export class Modals {
static modalAddCourses() { 
const modalAdd = `<!-- Modal ADD-->
"<div class="modal fade" id="courseModal" tabindex="-1" role="dialog" aria-labelledby="modalTitleId"
aria-hidden="true">
<div class="modal-dialog" role="document">
    <div class="modal-content">
        
        <div class="modal-header">
            <h5 class="modal-title" id="idModalCourse"> Add Course
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"
                aria-label="Close"></button>
        </div>
        
        <div class="modal-body">
            <div class="container-fluid">
                <form id="formAddCourse">
                    <div class="mb-3">
                        <label for="" class="form-label">Name Course</label>
                        <input required type="text" class="form-control" name="nameCourse" id="nameCourse"
                            aria-describedby="helpId" placeholder="Name Course" />
                    </div>


                    <div class="mb-3">
                        <label for="" class="form-label">Description</label>
                        <input required type="text" class="form-control" name="descriptionCourse" id="descriptionCourse"
                            aria-describedby="helpId" placeholder="Description Course" />
                    </div>

                    <div class="mb-3">
                        <label for="" class="form-label">Time</label>
                        <input required type="text" class="form-control" name="timeCourse" id="timeCourse"
                            aria-describedby="helpId" placeholder="timeCourse" />
                    </div>

                    <div class="mb-3">
                        <label for="" class="form-label">User</label>
                        <select required class="form-select" name="userCourse" id="userCourse">
                          <option value="">-- Select Instructor --</option>
                          <option value="Mario Jimenez">Mario Jimenez</option>
                          <option value="Aarón Galagarza">Aarón Galagarza</option>
                          <option value="Irwin">Irwin Leal</option>
                          <option value="JC Umanzor">JC Umanzor</option>
                          <option value="Raquel Porras">Raquel Porras</option>
                        </select>
                      </div>

                    <div class="mb-3">
                        <button
                            type="reset"
                            class="btn btn-danger"
                        >
                            Clear
                        </button>

                        <button
                            type="submit"
                            class="btn btn-primary"
                        >
                            Add
                        </button>
                        
                    </div>

                </form>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Close
            </button> 
        </div>
    </div>
</div>
</div>
`;

$('#modalContainer').html(modalAdd);

}

static modalDeleteCourses() {
    const modalDelete = `
<div class="modal fade" id="modalDeleteCourse" tabindex="-1" role="dialog"
    aria-labelledby="modalTitleId"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalTitleId">
                    Modal Delete
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <form id="formDelete">
                        <div class="mb-3">
                            <label for class="form-label">id</label>
                            <input
                                disabled
                                type="text"
                                class="form-control"
                                name="idDeleteCourse"
                                id="idDeleteCourse"
                                aria-describedby="helpId"
                                placeholder />
                        </div>

                        <div class="mb-3">

                            <button
                                type="submit"
                                class="btn btn-danger">
                                Delete
                            </button>

                        </div>

                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary"
                    data-bs-dismiss="modal">
                    Close
                </button>

            </div>
        </div>
    </div>
</div>`;

    $('#modals').html(modalDelete); 

}

static modalEditCourses() {
    const modalEdit = `
    <!-- Modal Edit -->

    <div class="modal fade" id="modalEdit" tabindex="-1" role="dialog" aria-labelledby="modalTitleId"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalTitleId">
                    Modal Edit
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <form id="formEdit">
                        <div class="mb-3">
                            <label for="" class="form-label">id</label>
                            <input
                                disabled
                                type="text"
                                class="form-control"
                                name="idEdit"
                                id="idEdit"
                                aria-describedby="helpId"
                                placeholder="Id"
                            />
                        </div>
                        

                        <div class="mb-3">
                            <label for="" class="form-label">Name Course</label>
                            <input required type="text" class="form-control" name="nameEdit" id="nameEdit"
                                aria-describedby="helpId" placeholder="name Edit" />
                        </div>


                        <div class="mb-3">
                            <label for="" class="form-label">Description Course</label>
                            <input required type="text" class="form-control" name="descriptionEdit" id="descriptionEdit"
                                aria-describedby="helpId" placeholder="Description Course" />
                        </div>

                        <div class="mb-3">
                            <label for="" class="form-label">Time Course</label>
                            <input required type="text" class="form-control" name="timeEdit" id="timeEdit"
                                aria-describedby="helpId" placeholder="Time Edit" />
                            
                        </div>

                        <div class="mb-3">
                            <label for="" class="form-label">User Course</label>
                            <select required class="form-select" name="userEdit" id="userEdit">
                              <option value="">-- Select Instructor --</option>
                              <option value="Mario Jimenez">Mario Jimenez</option>
                              <option value="Aarón Galagarza">Aarón Galagarza</option>
                              <option value="Irwin">Irwin Leal</option>
                              <option value="JC Umanzor">JC Umanzor</option>
                              <option value="Raquel Porras">Raquel Porras</option>
                            </select>
                          </div>
                        

                        <div class="mb-3">
                            <button
                                type="reset"
                                class="btn btn-danger"
                            >
                                Clean
                            </button>
                            

                            <button
                                type="submit"
                                class="btn btn-primary"
                            >
                                Edit
                            </button>
                            
                        </div>

                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                </button>
                
            </div>
        </div>
    </div>
</div>`;

        $('#modals').html(modalEdit);
}
}//end class