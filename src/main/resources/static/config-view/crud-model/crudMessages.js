var url = "http://localhost:8080/api/Message/save";

function registroMessage(){

    $('#name').prop("disabled", true);
    $('#message').prop("disabled", true);

    var body = {messageText: $("#message").val()};
    var nameAuthor = $("#name").val();

    $.ajax({
        url : url,
        data : JSON.stringify(body),
        type : 'POST',
        contentType: 'application/json',

        success : function(response, status) {
            $('.exitoso').append(
                '<div class="alert alert-success alert-dismissible fade show" id="alerta" role="alert">' +
                nameAuthor +'<strong> el mensaje</strong> a sido creada exitosamente' +
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

function leerParametroId(){
    var sPageURL = window.location.search.substring(1),
        sParameterName;

    sParameterName = sPageURL.split('=');
    if (sParameterName[0] === 'id') {
        return sParameterName[1];
    }
    return undefined;
}

function cargarDetalles() {
    urlGet = "http://localhost:8080/api/Message/"
    var id = leerParametroId();
    $.ajax({
        url : urlGet + "/" + id,
        type : 'GET',
        dataType : 'json',
        crossDomain: true,

        success : function(response) {
            $('.texto-detalles').append(
                '<h1>Detalles del mensaje</h1>' +
                '<div class="ajuste-txt-cl">'+
                '<p>Id: ' + response.idMessage + '</p>' +
                '<p>Mensaje: '+ response.messageText +'</p>'+
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
    document.getElementById("message").value = "";
}

function enableForm(){
    $('#name').prop("disabled", false);
    $('#message').prop("disabled", false);
}