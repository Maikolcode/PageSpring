var url = "http://localhost:8080/api/Car/save";

function registroCarro(){

    $('#carro-nombre').prop("disabled", true);
    $('#carro-brand').prop("disabled", true);
    $('#carro-year').prop("disabled", true);
    $('#carro-description').prop("disabled", true);

    var body = {
        name: $("#carro-nombre").val(),
        brand: $("#carro-brand").val(),
        year: $("#carro-year").val(),
        description: $("#carro-description").val(),
    }

    $.ajax({
        url : url,
        data : JSON.stringify(body),
        type : 'POST',
        contentType: 'application/json',

        success : function(response, status) {
            $('.exitoso').append(
                '<div class="alert alert-success alert-dismissible fade show" id="alerta" role="alert">' +
                '<strong>El carro</strong> a sido registrado exitosamente' +
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
    document.getElementById("carro-nombre").value = "";
    document.getElementById("carro-brand").value = "";
    document.getElementById("carro-year").value = "";
    document.getElementById("carro-description").value = "";
}

function enableForm(){
    $('#carro-nombre').prop("disabled", false);
    $('#carro-brand').prop("disabled", false);
    $('#carro-year').prop("disabled", false);
    $('#carro-description').prop("disabled", false);
}
