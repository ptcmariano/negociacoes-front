let campos = [
    document.querySelector("#data"),
    document.querySelector("#quantidade"),
    document.querySelector("#valor"),
]

let tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event){
    event.preventDefault();
    
    let tr = document.createElement('tr');

    campos.forEach(function(campo){
        let td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    let tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;

    tr.appendChild(tdVolume);
    tbody.appendChild(tr);

    limpaCampos(campos);
});

function limpaCampos(campos){
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = '';

    campos[0].focus();
}
