

document.addEventListener('DOMContentLoaded', () => {

    /*Is Created the variables that relates with html */
    const createAccountBTN = document.getElementById("createAccount");
    const goBackBtn = document.getElementById("goBack");
    const goIndex = document.getElementById('goIndex');
    const btnLogin = document.getElementById('btnLogin');


    /*The methods are called and the parameters that captured the html 
    id and the html file are passed */
    pageRedirect(createAccountBTN, 'Register.html');
    pageRedirect(goBackBtn, '../Home.html');/*Optional here would go Home  */
    pageRedirect(goIndex, 'index.html');
    pageRedirect(btnLogin, 'index.html');

});

/**Function that redirects to pages, the button and url, which
    is the HTML file, are passed by parameters*/
function pageRedirect(button, url) {

    /*Yes, the button exists, when you click the button, the url of 
     the html file is searched */
    if (button) {
        button.addEventListener('click', () => {
            window.location.href = url;
        });
    }
}

