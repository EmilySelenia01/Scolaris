
export class modalStudents {


    static modalAddStudents () {
        const addStudent = `<div
    class="modal fade"
    id="modalAddStudent"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel"
    tabindex="-1"
>
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalToggleLabel">
                    Add Student
                </h5>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <form id="formAddStudent">

                        <input type="hidden" id="idStudent" name="idStudent" value="">

                        <!---->
                        <div class="mb-3">
                            <label for="" class="form-label">Id Card</label>
                            <input
                                type="text"
                                class="form-control"
                                name="idCardStudent"
                                id="idCardStudent"
                                aria-describedby="helpId"
                                placeholder="Id Card"
                            />
                        </div>

                        <!---->
                        <div class="mb-3">
                            <label for="" class="form-label">Email</label>
                            <input
                                type="text"
                                class="form-control"
                                name="emailStudent"
                                id="emailStudent"
                                aria-describedby="helpId"
                                placeholder="email@gmail.com"
                            />
                        </div>

                        <!---->
                        <div class="mb-3">
                            <label for="" class="form-label">Phone</label>
                            <input
                                type="text"
                                class="form-control"
                                name="phoneStudent"
                                id="phoneStudent"
                                aria-describedby="helpId"
                                placeholder="8888-8888"
                            />
                        </div>

                        <!---->
                        <div class="mb-3">
                            <label for="" class="form-label">Cell Phone </label>
                            <input
                                type="text"
                                class="form-control"
                                name="cellPhoneStudent"
                                id="cellPhoneStudent"
                                aria-describedby="helpId"
                                placeholder="8888-8888"
                            />
                        </div>

                        <!---->
                        <div class="mb-3">
                            <label for="dob" class="form-label">Date of Birth</label>
                            <input
                                type="date"
                                class="form-control"
                                name="dateStudent"
                                id="dateStudent"
                                aria-describedby="dobHelp"
                                placeholder=""
                            />
                        </div>

                        <!---->
                        <div class="mb-3">
                            <label for="" class="form-label">Sex</label>
                            <select required class="form-select" name="sexStudent" id="sexStudent">
                              <option value="">-- Select Instructor --</option>
                              <option value="Feminine">Feminine</option>
                              <option value="Masculine">Masculine</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                         

                        <!---->
                        <div class="mb-3">
                            <label for="" class="form-label">Address</label>
                            <input
                                type="text"
                                class="form-control"
                                name="addressStudent"
                                id="addressStudent"
                                aria-describedby="helpId"
                                placeholder="Address"
                            />
                        </div>

                        <!---->
                        <div class="mb-3">
                            <label for="" class="form-label">Name</label>
                            <input
                                type="text"
                                class="form-control"
                                name="nameStudent"
                                id="nameStudent"
                                aria-describedby="helpId"
                                placeholder="Name Student"
                            />
                        </div>

                        <!---->
                        <div class="mb-3">
                            <label for="" class="form-label">First Last Name</label>
                            <input
                                type="text"
                                class="form-control"
                                name="firstLastNameStudent"
                                id="firstLastNameStudent"
                                aria-describedby="helpId"
                                placeholder="First Last Name"
                            />
                        </div>

                        <!---->
                        <div class="mb-3">
                            <label for="" class="form-label">Second Last Name</label>
                            <input
                                type="text"
                                class="form-control"
                                name="secondLastNameStudent"
                                id="secondLastNameStudent"
                                aria-describedby="helpId"
                                placeholder="Second Last Name"
                            />
                        </div>

                        <!---->
                        <div class="mb-3">
                            <label for="" class="form-label">Nationality</label>
                            <input
                                type="text"
                                class="form-control"
                                name="nationalityStudent"
                                id="nationalityStudent"
                                aria-describedby="helpId"
                                placeholder="Nationality Student"
                            />
                        </div>

                        <!---->
                        <div class="mb-3">
                            <label for="idCarrier" class="form-label">Career</label>
                            <select required class="form-select" name="idCarrier" id="idCarrier">
                              <option value="">-- Select Career --</option>
                              <option value="1">Informatics</option>
                              <option value="2">Medicine</option>
                              <option value="3">Veterinary</option>
                              <option value="4">Architecture</option>
                              <option value="5">Psychology</option>
                              <option value="6">Business Administration</option>
                            </select>
                          </div>
                        <!---->
                        <div class="mb-3">
                            <label for="" class="form-label">User</label>
                            <input
                                type="text"
                                class="form-control"
                                name="userStudent"
                                id="userStudent"
                                aria-describedby="helpId"
                                placeholder="User Student"
                            />
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
            
        </div>
    </div>
</div>
`;
$('#modalContainerStudent').html(addStudent);
    }

    static modalEditStudents () {
        const editStudent = `<div
    class="modal fade"
    id="modalEditS"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel"
    tabindex="-1"
>
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalToggleLabel">
                    Edit Student
                </h5>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <form id="formEditStudent">

                        <div class="mb-3">
                            <label for="" class="form-label">Id</label>
                            <input
                                disabled
                                type="text"
                                class="form-control"
                                name="idStudentEdit"
                                id="idStudentEdit"
                                aria-describedby="helpId"
                                placeholder="Id Student"
                            />
                        </div>

                        <!---->
                        <div class="mb-3">
                            <label for="" class="form-label">Id Card</label>
                            <input
                                type="text"
                                class="form-control"
                                name="idCardStudentEdit"
                                id="idCardStudentEdit"
                                aria-describedby="helpId"
                                placeholder="Id Card"
                            />
                        </div>

                        <!---->
                        <div class="mb-3">
                            <label for="" class="form-label">Email</label>
                            <input
                                type="text"
                                class="form-control"
                                name="emailStudentEdit"
                                id="emailStudentEdit"
                                aria-describedby="helpId"
                                placeholder="email@gmail.com"
                            />
                        </div>

                        <!---->
                        <div class="mb-3">
                            <label for="" class="form-label">Phone</label>
                            <input
                                type="text"
                                class="form-control"
                                name="phoneStudentEdit"
                                id="phoneStudentEdit"
                                aria-describedby="helpId"
                                placeholder="8888-8888"
                            />
                        </div>

                        <!---->
                        <div class="mb-3">
                            <label for="" class="form-label">Cell Phone </label>
                            <input
                                type="text"
                                class="form-control"
                                name="cellPhoneStudentEdit"
                                id="cellPhoneStudentEdit"
                                aria-describedby="helpId"
                                placeholder="8888-8888"
                            />
                        </div>

                        <!---->
                        <div class="mb-3">
                            <label for="dob" class="form-label">Date of Birth</label>
                            <input
                                type="date"
                                class="form-control"
                                name="dateStudentEdit"
                                id="dateStudentEdit"
                                aria-describedby="dobHelp"
                                placeholder=""
                            />
                        </div>

                        <!---->
                        <div class="mb-3">
                            <label for="" class="form-label">Sex</label>
                            <select required class="form-select" name="sexStudentEdit" id="sexStudentEdit">
                              <option value="">-- Select Instructor --</option>
                              <option value="Feminine">Feminine</option>
                              <option value="Masculine">Masculine</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                         

                        <!---->
                        <div class="mb-3">
                            <label for="" class="form-label">Address</label>
                            <input
                                type="text"
                                class="form-control"
                                name="addressStudentEdit"
                                id="addressStudentEdit"
                                aria-describedby="helpId"
                                placeholder="Address"
                            />
                        </div>

                        <!---->
                        <div class="mb-3">
                            <label for="" class="form-label">Name</label>
                            <input
                                type="text"
                                class="form-control"
                                name="nameStudentEdit"
                                id="nameStudentEdit"
                                aria-describedby="helpId"
                                placeholder=""
                            />
                        </div>

                        <!---->
                        <div class="mb-3">
                            <label for="" class="form-label">First Last Name</label>
                            <input
                                type="text"
                                class="form-control"
                                name="firstLastNameStudentEdit"
                                id="firstLastNameStudentEdit"
                                aria-describedby="helpId"
                                placeholder="First Last Name"
                            />
                        </div>

                        <!---->
                        <div class="mb-3">
                            <label for="" class="form-label">Second Last Name</label>
                            <input
                                type="text"
                                class="form-control"
                                name="secondLastNameStudentEdit"
                                id="secondLastNameStudentEdit"
                                aria-describedby="helpId"
                                placeholder="Second Last Name"
                            />
                        </div>

                        <!---->
                        <div class="mb-3">
                            <label for="" class="form-label">Nationality</label>
                            <input
                                type="text"
                                class="form-control"
                                name="nationalityStudentEdit"
                                id="nationalityStudentEdit"
                                aria-describedby="helpId"
                                placeholder="Nationality Student"
                            />
                        </div>

                        <!---->
                        <div class="mb-3">
                            <label for="idCarrier" class="form-label">Career</label>
                            <select required class="form-select" name="idCarrierEdit" id="idCarrierEdit">
                              <option value="">-- Select Career --</option>
                              <option value="1">Informatics</option>
                              <option value="2">Medicine</option>
                              <option value="3">Veterinary</option>
                              <option value="4">Architecture</option>
                              <option value="5">Psychology</option>
                              <option value="6">Business Administration</option>
                            </select>
                          </div>
                        <!---->
                        <div class="mb-3">
                            <label for="" class="form-label">User</label>
                            <input
                                type="text"
                                class="form-control"
                                name="userStudentEdit"
                                id="userStudentEdit"
                                aria-describedby="helpId"
                                placeholder="User Student"
                            />
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
                                Edit Student
                            </button>
                            
                        </div>

                    </form>

                </div>
                
            </div>
            
        </div>
    </div>
</div>
`;


        $('#modals').html(editStudent);

}

    static modalDeleteStudents () {
        const deleteStudent = `
<div class="modal fade" id="modalDeleteStudent" 
tabindex="-1" role="dialog"
    aria-labelledby="modalTitleId"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalTitleId">
                    Delete Student
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                    aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <form id="formDeleteStudent">
                        <div class="mb-3">
                            <label for class="form-label">id</label>
                            <input
                                disabled
                                type="text"
                                class="form-control"
                                name="idDeleteStudent"
                                id="idDeleteStudent"
                                aria-describedby="helpId"
                                placeholder />
                        </div>

                        <div class="mb-3">

                            <button
                                type="submit"
                                class="btn btn-danger">
                                Delete Student
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


        $('#modals').html(deleteStudent);

    }

}