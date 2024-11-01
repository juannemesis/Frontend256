//mostrar productos
function mostrarProductos() {
    let request = sendRequest('productos', 'GET', '');
    let table = document.getElementById('productos-table');
    table.innerHTML = "";
    request.onload = function () {
        let data = request.response;
        console.log(data);
        data.forEach(element => {
        table.innerHTML += `
        <tr>
         <td>${element._id}</td>
         <td>${element.nombre}</td>
         <td>${element.descripcion}</td>
         <td>${element.valorcompra}</td>
         <td>${element.valorventa}</td>
         <td>${element.cantidad}</td>
         <td>${element.lote}</td>
         <td>
             <button type="button" class ="btn btn-primary" onclick='window.location = "/formProductos.html?id=${element._id}"'>Editar</button>
             <button type="button" class ="btn btn-danger" onclick='deleteProductos("${element._id}")'>Eliminar</button>
         </td>
        </tr>
        `
       });
    }
    request.onerror = function(){
        table.innerHTML = `
        <tr>
            <td colspan="">Error al traer los datos</td>
        </tr>
        `
    }
}

//eliminar productos
function deleteProductos(id){
    let request = sendRequest('productos/'+id, 'DELETE' , '');
    request.onload = function(){
        mostrarProductos();
    }
}

//crear productos
function guardarProductos(){
    let nom = document.getElementById('nombre-n').value
    let des = document.getElementById('descripcion-d').value
    let valc = document.getElementById('valorcompra-vc').value
    let valv = document.getElementById('valorventa-vv').value
    let can = document.getElementById('cantidad-c').value
    let lot = document.getElementById('lote-l').value
    let data = {'nombre':nom, 'descripcion':des, 'valorcompra':valc, 'valorventa':valv, 'cantidad':can, 'lote':lot}
    let request = sendRequest('productos/', 'POST', data);
    request.onload = function(){
        window.location='productos.html'
    }
    request.onerror = function(){
        alert("Error al guardar los datos");
    }
}

//editar productos
function cargarDatos(id){
    let request = sendRequest('productos/'+id, 'GET', '');
    let nom = document.getElementById('nombre-n')
    let des = document.getElementById('descripcion-d')
    let valc = document.getElementById('valorcompra-vc')
    let valv = document.getElementById('valorventa-vv')
    let can = document.getElementById('cantidad-c')
    let lot = document.getElementById('lote-l')

    request.onload = function(){
        let data = request.response;
        nom.value = data.nombre
        des.value = data.descripcion
        valc.value = data.valorcompra
        valv.value = data.valorventa
        can.value = data.cantidad
        lot.value = data.lote
        console.log(data)
    }
    request.onerror = function(){
        alert("Error al guardar los datos");
    }
}

function modificarProductos(id){
    let nom = document.getElementById('nombre-n').value
    let des = document.getElementById('descripcion-d').value
    let valc = document.getElementById('valorcompra-vc').value
    let valv = document.getElementById('valorventa-vv').value
    let can = document.getElementById('cantidad-c').value
    let lot = document.getElementById('lote-l').value
    let data = {'nombre':nom, 'descripcion':des, 'valorcompra':valc, 'valorventa':valv, 'cantidad':can, 'lote':lot}
    let request = sendRequest('productos/'+id, 'PUT', data);
    console.log(request)
    request.onload = function(){
        window.location='productos.html'
    }
    request.onerror = function(){
        alert("Error al modificar los datos")
    }
}