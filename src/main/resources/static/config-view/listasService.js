var ruta_car = "http://localhost:8080/api/Car/all";
var ruta_client = "http://localhost:8080/api/Client/all";
var ruta_message = "http://localhost:8080/api/Message/all";

function cargarListas() {
    cargarListaCar();
    cargarListaClient();
    cargarListaMessage();
}

function cargarListaCar() {
    $.ajax({
        url: ruta_car,
        type: 'GET',
        dataType: 'json',
        crossDomain: true,

        success: function (json) {
            if (json.length === 0) {
                document.getElementById("table-car").classList.add('hidden');
                $('.table-car-add').append(
                    '<h3>Aun no hay nada</h3>'+
                    '<div class="img-message-tb">'+
                    '<img src="config-view/images/no-car.png"/>'+
                    '</div>'
                );
            } else {
                document.getElementById("tb-car-hd").classList.add('hidden');
                for (var i = 0; i < json.length; i++) {
                    $('.carga-lista')
                        .append('<tr>' +
                            '<th scope="row">' + json[i].idCar + '</th>' +
                            '<td>' + json[i].name + '</td>' +
                            '<td>' + json[i].brand + '</td>' +
                            '<td>' + json[i].year + '</td>' +
                            '<td>' + json[i].description + '</td>' +
                            '<td><a href="/carros/detalleCar.html?id=' + json[i].idCar+ '">Mas información</a></td>' +
                            '</tr>');
                }
            }
        },
        error: function (xhr, status) {
            alert("Error")
        },
        complete: function (xhr, status) {
            console.log("Lista de autos cargada correctamente");
        }
    });
}

function cargarListaClient() {
    $.ajax({
        url: ruta_client,
        type: 'GET',
        dataType: 'json',
        crossDomain: true,

        success: function (json) {
            if (json.length === 0) {
                document.getElementById("table-client").classList.add('hidden');
                $('.table-client-add').append(
                    '<h3>Aun no hay nada</h3>'+
                    '<div class="img-message-tb">'+
                    '<img src="config-view/images/clientetb.png"/>'+
                    '</div>'
                );
            } else {
                document.getElementById("tb-client-hd").classList.add('hidden');
                for (var i = 0; i < json.length; i++) {
                    $('.carga-lista-client')
                        .append('<tr>' +
                            '<th scope="row">' + json[i].idClient + '</th>' +
                            '<td>' + json[i].name + '</td>' +
                            '<td>' + json[i].email + '</td>' +
                            '<td>' + json[i].age + '</td>' +
                            '<td>' + json[i].password + '</td>' +
                            '<td><a href="/cliente/detalleClient.html?id=' + json[i].idClient + '">Mas información</a></td>' +
                            '</tr>');
                }
            }
        },
        error: function (xhr, status) {
            alert("Error")
        },
        complete: function (xhr, status) {
            console.log("Lista clientes cargada correctamente");
        }
    });
}

function cargarListaMessage() {
    $.ajax({
        url: ruta_message,
        type: 'GET',
        dataType: 'json',
        crossDomain: true,

        success: function (json) {
            if (json.length === 0) {
                document.getElementById("table-message").classList.add('hidden');
                $('.table-message-add').append(
                    '<h3>Aun no hay nada</h3>'+
                    '<div class="img-message-tb">'+
                    '<img src="config-view/images/no.png"/>'+
                    '</div>'
                );
            } else {
                document.getElementById("tb-message-hd").classList.add('hidden');
                for (var i = 0; i < json.length; i++) {
                    $('.carga-lista-message')
                        .append('<tr>' +
                            '<th scope="row">' + json[i].idMessage + '</th>' +
                            '<td>' + json[i].messageText + '</td>' +
                            '<td><a href="/mensaje/detalleMessage.html?id=' + json[i].idMessage + '">Mas información</a></td>' +
                            '</tr>');
                }
            }
        },
        error: function (xhr, status) {
            alert("Error")
        },
        complete: function (xhr, status) {
            console.log("Lista mensajes cargada correctamente");
        }
    });
}