var url = "http://localhost:8080/api/Reservation/save";

function registroReservation(){

    $('#start-date').prop("disabled", true);
    $('#finish-date').prop("disabled", true);

    var body = {
        startDate: $("#start-date").val(),
        devolutionDate: $("#finish-date").val(),
    }

    $.ajax({
        url : url,
        data : JSON.stringify(body),
        type : 'POST',
        contentType: 'application/json',

        success : function(response, status) {
            $('.exitoso').append(
                '<div class="alert alert-success alert-dismissible fade show" id="alerta" role="alert">' +
                '<strong>La reservación</strong> a sido creada exitosamente' +
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
    urlGet = "http://localhost:8080/api/Reservation/"
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
                '<p>Id: ' + response.idReservation + '</p>' +
                '<p>Fecha inicio: ' + response.startDate + '</p>' +
                '<p>Fecha final: '+ response.devolutionDate +'</p>'+
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
    document.getElementById("start-date").value = "";
    document.getElementById("finish-date").value = "";
}

function enableForm(){
    $('#start-date').prop("disabled", false);
    $('#finish-date').prop("disabled", false);
}