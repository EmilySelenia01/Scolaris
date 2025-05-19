/*Function that contains code for recovery the account of users */
function modalRecovery() {

    const modalRecovery = `
    <div
        class="modal fade"
        id="modalRecoveryUsers"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
    >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalToggleLabel">
                        Recovery Account
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
                        <form id="formModalRecovery">

                            <div class="mb-3">
                                <label for="" class="form-label">Email</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    name="emailUsers"
                                    id="emailUsers"
                                    aria-describedby="helpId"
                                    placeholder="email@gmail.com"
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
                                    Send
                                </button>
                                
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    `;

document.getElementById("modalsContainer").innerHTML = modalRecovery;

}