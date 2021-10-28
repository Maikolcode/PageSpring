var url = "http://localhost:8080/api/Client/save";

function registroCliente(){

    $('#name').prop("disabled", true);
    $('#email').prop("disabled", true);
    $('#password').prop("disabled", true);
    $('#edad').prop("disabled", true);

    var body = {
        name: $("#name").val(),
        email: $("#email").val(),
        password: $("#password").val(),
        age: $("#edad").val(),
    }

    $.ajax({
        url : url,
        data : JSON.stringify(body),
        type : 'POST',
        contentType: 'application/json',

        success : function(response, status) {
            $('.exitoso').append(
                '<div class="alert alert-success alert-dismissible fade show" id="alerta" role="alert">' +
                '<strong>El cliente</strong> a sido registrado exitosamente' +
                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' +
                '</div>');
        },
        error : function(xhr, status) {
            alert('Error')
        },
        complete : function(xhr, status) {
            clearForm();
            enableForm();
            $.scrollTo("#aqui");
        }
    });

}

function clearForm(){
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("edad").value = "";
}

function enableForm(){
    $('#name').prop("disabled", false);
    $('#email').prop("disabled", false);
    $('#password').prop("disabled", false);
    $('#edad').prop("disabled", false);
}
