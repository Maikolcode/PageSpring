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

function clearForm(){
    document.getElementById("start-date").value = "";
    document.getElementById("finish-date").value = "";
}

function enableForm(){
    $('#start-date').prop("disabled", false);
    $('#finish-date').prop("disabled", false);
}