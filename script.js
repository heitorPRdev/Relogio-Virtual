var area_muda = document.getElementById('hora')
const horario = new Date()
const hora = horario.getHours()
const minuto = horario.getMinutes()

if (hora >= 12 && hora <= 17){
    area_muda.innerHTML = `${hora}:${minuto}`;
    var img = document.createElement('IMG')
    img.src = "sol_demanha.png"
    document.getElementById('imagens').appendChild(img);
    document.body.style.backgroundColor = 'lightblue'
}
else if(hora >= 6 && hora <= 11){
    area_muda.innerHTML = `${hora}:${minuto}`;
    var img = document.createElement('IMG')
    img.src = "sol.png"
    document.getElementById('imagens').appendChild(img);
    document.body.style.backgroundColor = '#c48f2e'
}
else{
    area_muda.innerHTML = `${hora}:${minuto}`;
    var img = document.createElement('IMG')
    img.src = "noite.png"
    document.getElementById('imagens').appendChild(img);
    document.body.style.backgroundColor = '#b8b8b8'
}

