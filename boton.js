function btncalcular(){
    let tipo = document.getElementById("tipo").value;
    if (tipo == "1") {
        alert("prestamo de vivienda");
        
    }

    if (tipo == "2"){
        alert("prestamo de vehiculo");
    }
}

const btncalculando =()=>{
    let valor = document.getElementById("valor").value;
    let ncuotas = document.getElementById("ncuotas").value;
    let tipo = document.getElementById("tipo").value;


    let result = 0;
    let response = '';

    return new Promise((resolve, reject)=>{
        if(valor <10000000){
            if (tipo == "1"){
            result = valor /ncuotas * 0.1 +  valor / ncuotas;
            response = `v de cuotas: ${result}`;
        }

        
        if (tipo == "2"){
            result = valor /ncuotas * 0.2 +  valor / ncuotas;
            response = `v de cuotas: ${result}`;
        }
        resolve(response);
        }else{
            response = "no es";
        reject(response);
        }


        }); 
    
}

const valorcta =(calcularfuncion)=> {
    let resultados = document.getElementById("resultados").value;
    let alert = document.getElementById("alert").value;
    btncalculando().then((res)=>{
        resultados.innerHTML = res;

    }).catch((response)=>{
        alert.style.display = "block";
        setTimeout(()=>{
            alert.style.display = "none";
        },1000);
    })

    calcularfuncion();
    
}