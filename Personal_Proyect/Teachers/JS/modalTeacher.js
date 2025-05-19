
export class modalTeacher {

    static modalAddTeachers() {
        const addTeacher = `
<div class="modal fade" id="modalAddTeacher" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel">Add Teacher</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="container-fluid">
          <form id="formAddTeacher">
            <input type="hidden" id="idTeacher" name="idTeacher" value="">

            <div class="mb-3">
              <label for="idCardTeacher" class="form-label">Id Card</label>
              <input type="text" class="form-control" name="idCardTeacher" id="idCardTeacher" placeholder="Id Teacher" />
            </div>

            <div class="mb-3">
              <label for="emailTeacher" class="form-label">Email</label>
              <input type="text" class="form-control" name="emailTeacher" id="emailTeacher" placeholder="email@gmail.com" />
            </div>

            <div class="mb-3">
              <label for="phoneTeacher" class="form-label">Phone</label>
              <input type="text" class="form-control" name="phoneTeacher" id="phoneTeacher" placeholder="8888-8888" />
            </div>

            <div class="mb-3">
              <label for="cellPhoneTeacher" class="form-label">Cell Phone</label>
              <input type="text" class="form-control" name="cellPhoneTeacher" id="cellPhoneTeacher" placeholder="8888-8888" />
            </div>

            <div class="mb-3">
              <label for="dateTeacher" class="form-label">Date of Birth</label>
              <input type="date" class="form-control" name="dateTeacher" id="dateTeacher" />
            </div>

            <div class="mb-3">
              <label for="sexTeacher" class="form-label">Sex</label>
              <select required class="form-select" name="sexTeacher" id="sexTeacher">
                <option value="">-- Select Sex --</option>
                <option value="Feminine">Feminine</option>
                <option value="Masculine">Masculine</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div class="mb-3">
              <label for="addressTeacher" class="form-label">Address</label>
              <input type="text" class="form-control" name="addressTeacher" id="addressTeacher" placeholder="Address" />
            </div>

            <div class="mb-3">
              <label for="nameTeacher" class="form-label">Name</label>
              <input type="text" class="form-control" name="nameTeacher" id="nameTeacher" placeholder="Name Teacher" />
            </div>

            <div class="mb-3">
              <label for="firstLastNameTeacher" class="form-label">First Last Name</label>
              <input type="text" class="form-control" name="firstLastNameTeacher" id="firstLastNameTeacher" placeholder="First Last Name" />
            </div>

            <div class="mb-3">
              <label for="secondLastNameTeacher" class="form-label">Second Last Name</label>
              <input type="text" class="form-control" name="secondLastNameTeacher" id="secondLastNameTeacher" placeholder="Second Last Name" />
            </div>

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

            <div class="mb-3">
              <label for="userTeacher" class="form-label">User</label>
              <select required class="form-select" name="userTeacher" id="userTeacher">
                <option value="">-- Select Instructor --</option>
                <option value="Mario Jimenez">Mario Jimenez</option>
                <option value="Aarón Galagarza">Aarón Galagarza</option>
                <option value="Irwin Leal">Irwin Leal</option>
                <option value="JC Umanzor">JC Umanzor</option>
                <option value="Raquel Porras">Raquel Porras</option>
                <option value="Ronald Perez">Ronald Perez</option>
              </select>
            </div>

            <div class="mb-3">
              <label for="nationalityTeacher" class="form-label">Nationality</label>
              <input type="text" class="form-control" name="nationalityTeacher" id="nationalityTeacher" placeholder="Nationality" />
            </div>

            <div class="mb-3">
              <button type="reset" class="btn btn-danger">Clear</button>
              <button type="submit" class="btn btn-primary">Add Teacher</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>`;

        $('#modalContainer').html(addTeacher);
    }



    static modalEditTeachers() {
        const editTeacher =`<div
    class="modal fade"
    id="modalEditTeacher"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel"
    tabindex="-1"
>
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalToggleLabel">
                    Edit Teacher
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
                    <form id="formEditTeacher">

                        <div class="mb-3">
                            <label for="" class="form-label">Id Card</label>
                            <input
                                disabled
                                type="text"
                                class="form-control"
                                name="idTeacherEdit"
                                id="idTeacherEdit"
                                aria-describedby="helpId"
                                placeholder="Id Teacher"
                            />
                        </div>

                        <!---->
                        <div class="mb-3">
                            <label for="" class="form-label">Id Card</label>
                            <input
                                type="text"
                                class="form-control"
                                name="idCardTeacherEdit"
                                id="idCardTeacherEdit"
                                aria-describedby="helpId"
                                placeholder="Id Teacher"
                            />
                        </div>

                        <!---->
                        <div class="mb-3">
                            <label for="" class="form-label">Email</label>
                            <input
                                type="text"
                                class="form-control"
                                name="emailTeacherEdit"
                                id="emailTeacherEdit"
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
                                name="phoneTeacherEdit"
                                id="phoneTeacherEdit"
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
                                name="cellPhoneTeacherEdit"
                                id="cellPhoneTeacherEdit"
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
                                name="dateTeacherEdit"
                                id="dateTeacherEdit"
                                aria-describedby="dobHelp"
                                placeholder=""
                            />
                        </div>

                        <!---->
                        <div class="mb-3">
                            <label for="" class="form-label">Sex</label>
                            <select required class="form-select" name="sexTeacherEdit" id="sexTeacherEdit">
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
                                name="addressTeacherEdit"
                                id="addressTeacherEdit"
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
                                name="nameTeacherEdit"
                                id="nameTeacherEdit"
                                aria-describedby="helpId"
                                placeholder="Name Teacher"
                            />
                        </div>

                        <!---->
                        <div class="mb-3">
                            <label for="" class="form-label">First Last Name</label>
                            <input
                                type="text"
                                class="form-control"
                                name="firstLastNameTeacherEdit"
                                id="firstLastNameTeacherEdit"
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
                                name="secondLastNameTeacherEdit"
                                id="secondLastNameTeacherEdit"
                                aria-describedby="helpId"
                                placeholder="Second Last Name"
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
                            <select required class="form-select" name="userTeacherEdit" id="userTeacherEdit">
                              <option value="">-- Select Instructor --</option>
                              <option value="Mario Jimenez">Mario Jimenez</option>
                              <option value="Aarón Galagarza">Aarón Galagarza</option>
                              <option value="Irwin Leal">Irwin Leal</option>
                              <option value="JC Umanzor">JC Umanzor</option>
                              <option value="Raquel Porras">Raquel Porras</option>
                              <option value="Ronald Perez">Ronald Perez</option>
                            </select>
                          </div>


                        <!---->
                        <div class="mb-3">
                            <label for="" class="form-label">Nationality</label>
                            <input
                                type="text"
                                class="form-control"
                                name="nationalityTeacherEdit"
                                id="nationalityTeacherEdit"
                                aria-describedby="helpId"
                                placeholder="Nationality Student"
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
                                Edit Teacher
                            </button>
                            
                        </div>

                    </form>

                </div>
                
            </div>
            
        </div>
    </div>
</div>
`;

$('#modals').html(editTeacher);
    }

    static modalDeleteTeachers() {
        const deleteTeacher =`
<div class="modal fade" id="modalDeleteTeacher" 
tabindex="-1" role="dialog"
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
                    <form id="formDeleteTeacher">
                        <div class="mb-3">
                            <label for class="form-label">id</label>
                            <input
                                disabled
                                type="text"
                                class="form-control"
                                name="idDeleteTeacher"
                                id="idDeleteTeacher"
                                aria-describedby="helpId"
                                placeholder />
                        </div>

                        <div class="mb-3">

                            <button
                                type="submit"
                                class="btn btn-danger">
                                Delete Teacher
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
  $('#modals').html(deleteTeacher);
    }
  


}