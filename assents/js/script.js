let herois = [];

function nivelHeroi(xp){
    if (xp < 1000){
        return "Ferro";
    }else if (xp <= 2000){
        return "Bronze";
    }else if (xp <= 5000){
        return "Prata";
    }else if (xp <= 7000){
        return "Ouro";
    }else if (xp <= 8000){
        return "Platina";
    }else if (xp <= 9000){
        return "Ascendente";
    }else if (xp <= 10000){
        return "Imortal";
    }else{
        return "Radiante";
    }
}

function validarNivel() {
    let nome_heroi = document.getElementById('username').value;
    let xp_heroi = document.getElementById('userxp').value;
    if(isNaN(xp_heroi)){
        alert("Insira um valor numérico para o XP.");
        return;
    }
    document.getElementById("result").style.display = "inline-block";
    document.getElementById("form").style.display = "none";
    
    let nivel_xp = nivelHeroi(xp_heroi);
    herois.push({nome: nome_heroi, xp: xp_heroi});
    
    let resultado_heroi = document.getElementById('result');
    resultado_heroi.innerHTML = `O herói ${nome_heroi} está no nível ${nivel_xp}.`;
}