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
    urlGet = "http://localhost:8080/api/Car/"
    var id = leerParametroId();
    $.ajax({
        url : urlGet + "/" + id,
        type : 'GET',
        dataType : 'json',
        crossDomain: true,

        success : function(response) {
            $('.texto-detalles').append(
                '<h1>Detalles del car</h1>' +
                '<div class="ajuste-txt-cl">'+
                '<p>Id: ' + response.idCar + '</p>' +
                '<p>Nombre: '+ response.name +'</p>'+
                '<p>Marca: '+ response.brand +'</p>'+
                '<p>Año: '+ response.year +'</p>'+
                '<p>Descripción: '+ response.description +'</p>'+
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

function traerInfo(){

    urlGet = "http://localhost:8080/api/Car/";
    var id = leerParametroId();

    $.ajax({    
        url : urlGet + "/" + id,
        type : 'GET',
        dataType : 'json',
        crossDomain: true,
    
        success : function(response) {
            $("#id-car").val(response.idCar);
            $("#name-car").val(response.name);
            $("#brand-car").val(response.brand);
            $("#year-car").val(response.year);
            $("#descript-car").val(response.description);
        },
        error : function(xhr, status) {
            console.log('ha sucedido un problema');
        },
        complete : function(xhr, status) {
            console.log('Petición realizada');
        }
    });
}

function obtenerInformacionId(){

    urlGet = "http://localhost:8080/api/Car/";
    var id = leerParametroId();

    $.ajax({    
        url : urlGet + "/" + id,
        type : 'GET',
        dataType : 'json',
        crossDomain: true,
    
        success : function(response) {
            $("#id-car").val(response.idCar);
            $("#txt-aqui").append('Id del registro que se va a eliminar = '+id)
        },
        error : function(xhr, status) {
            console.log('ha sucedido un problema');
        },
        complete : function(xhr, status) {
            console.log('Petición realizada');
        }
    });
}

function actualizar() {

    urlGet = "http://localhost:8080/api/Car/update";

    var body = { 
        idCar: $("#id-car").val(),
        name: $("#name-car").val(),
        brand: $("#brand-car").val(),
        year: $("#year-car").val(),
        description: $("#descript-car").val()
    }
    
    $.ajax({
        url : urlGet,
        data : JSON.stringify(body),
        type : 'PUT',
        contentType: 'application/json',
    
        success : function(response, status) {
            $('.exitoso').append(
                '<div class="alert alert-success alert-dismissible fade show" id="alerta" role="alert">' +
                    '<strong>El carro</strong> a sido actualizado exitosamente' +
                    '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>' +
                '</div>');
        },
        error : function(xhr, status) {
            console.log('ha sucedido un problema');
        },
        complete : function(xhr, status) {
            console.log('Petición realizada');
            $('#id-car').prop("disabled", true);
            $('#name-car').prop("disabled", true);
            $('#brand-car').prop("disabled", true);
            $('#year-car').prop("disabled", true);
            $('#descript-car').prop("disabled", true);
            $.scrollTo("#aqui");
        }
    });
}

function eliminar() {

    urlGet = "http://localhost:8080/api/Car/";
    var id = leerParametroId();

    var body = { 
        idCar: $("#id-car").val(),
    }
    
    $.ajax({
        url : urlGet + id,
        data : JSON.stringify(body),
        type : 'DELETE',
        contentType: 'application/json',
    
        success : function(response, status) {
            alert('Registro eliminado');
        },
        error : function(xhr, status) {
            console.log('ha sucedido un problema');
        },
        complete : function(xhr, status) {
            location.href ="../../index.html";
        }
    });
}
