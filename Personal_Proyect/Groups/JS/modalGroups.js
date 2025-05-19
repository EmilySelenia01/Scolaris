
export class ModalGroups {


    static modalAddGroups() {

        const modalAddGroup = `<div
    class="modal fade"
    id="modalAddGroupp"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel"
    tabindex="-1"
>
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalToggleLabel">
                    Add 
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
                    <form id="formAddGroup">
                    
                        <div class="mb-3">
                            <label for="" class="form-label">Name</label>
                            <input
                                type="text"
                                class="form-control"
                                name="nameEditGroup"
                                id="nameEditGroup"
                                aria-describedby="helpId"
                                placeholder="Name Group"
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
                                Add Group
                            </button>
                            
                        </div>
                    </form>
                </div>
                
            </div>
            
        </div>
    </div>
</div>
`;
$('#modalContainer').html(modalAddGroup);

    }

    static modalDeleteGroups() {

        const modalDeleteGroup = `<div
    class="modal fade"
    id="modalDeleteGroupp"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel"
    tabindex="-1"
>
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalToggleLabel">
                    Delete Group
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
                    <form id="formDeleteGroup">

                        <div class="mb-3">
                            <label for="" class="form-label">Id</label>
                            <input
                                type="text"
                                class="form-control"
                                name="idDeleteGroup"
                                id="idDeleteGroup"
                                aria-describedby="helpId"
                                placeholder="Id Group"
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
                                Delete Group
                            </button>
                            
                        </div>
                    </form>
                </div>
                
            </div>
           
        </div>
    </div>
</div>
`;

        $('#modals').html(modalDeleteGroup);

    }

    static modalEditGroups() {

        const modalEditGroup = `<div
    class="modal fade"
    id="modalEditGroupp"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel"
    tabindex="-1"
>
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalToggleLabel">
                    Edit Group 
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
                    <form id="formEditGroup">

                        <div class="mb-3">
                            <label for="" class="form-label">Id</label>
                            <input
                                type="text"
                                class="form-control"
                                name="idEditGroup"
                                id="idEditGroup"
                                aria-describedby="helpId"
                                placeholder="Id Group"
                                readonly
                            />
                        </div>
                    
                        <div class="mb-3">
                            <label for="" class="form-label">Name</label>
                            <input
                                type="text"
                                class="form-control"
                                name="nameEditGroup"
                                id="nameEditGroup"
                                aria-describedby="helpId"
                                placeholder="Name Group"
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
                                Edit Group
                            </button>
                            
                        </div>
                    </form>
                </div>
                
            </div>
            
            </div>
        </div>
    </div>
</div>
`;

        $('#modals').html(modalEditGroup);

}



}//end class