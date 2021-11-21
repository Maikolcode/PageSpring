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

function leerParametroId() {
    var sPageURL = window.location.search.substring(1),
        sParameterName;

    sParameterName = sPageURL.split('=');
    if (sParameterName[0] === 'id') {
        return sParameterName[1];
    }
    return undefined;
}

function cargarDetalles() {
    urlGet = "http://localhost:8080/api/Client/"
    var id = leerParametroId();
    $.ajax({
        url : urlGet + "/" + id,
        type : 'GET',
        dataType : 'json',
        crossDomain: true,

        success : function(response) {
            $('.texto-detalles').append(
                '<h1>Detalles del cliente</h1>' +
                '<div class="ajuste-txt-cl">'+
                '<p>Id: ' + response.idClient + '</p>' +
                '<p>Nombre: '+ response.name +'</p>'+
                '<p>Email: '+ response.email +'</p>'+
                '<p>Password: '+ response.password +'</p>'+
                '<p>Edad: '+ response.age +'</p>'+
                '</div>'
            );
        },
        error : function(xhr, status) {
            console.log('ha sucedido un problema');
        },
        complete : function(xhr, status) {
            console.log('Petición realizada');
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
