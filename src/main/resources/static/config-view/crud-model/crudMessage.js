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

function clearForm(){
    document.getElementById("name").value = "";
    document.getElementById("message").value = "";
}

function enableForm(){
    $('#name').prop("disabled", false);
    $('#message').prop("disabled", false);
}