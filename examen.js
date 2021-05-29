let  documento = class {

    #nrodocumento;
    #fecha;
    #valor;
    #codcliente;
    constructor(nrodocumento,fecha,valor,codcliente)
    {
        this.#codcliente = codcliente;
        this.#nrodocumento = nrodocumento;
        this.#fecha = fecha;
        this.#valor = valor;
    }

    getnrodocumento(){
        return this.#nrodocumento;
    }
    setnrodocumento(){
        return this.#nrodocumento = nrodocumento;
    }
    getnfecha(){
        return this.#fecha;
    }
    setfecha(){
        return this.#fecha = fecha;
    }
    getvalor(){
        return this.#valor;
    }
    setvalor(){
        return this.#valor = valor;
    }
    getcodcliente(){
        return this.#codcliente;
    }
    setcodcliente(){
        return this.#codcliente = codcliente;
    }

}
let promocion1 = new promocion(1144020, '25 de mayo de 2020', 500, 192020);

console.log(promocion1.getcodcliente());
console.log(promocion1.getnrodocumento());
console.log(promocion1.getfecha());
console.log(promocion1.getvalor());
promocion1.setvalor(500000) * 50 / 100;
console.log(`el porcentaje es: ${promocion1.getvalor} `);

// ejerciciob

function articulo1 (referencia, descripcion, precio, existencia){
    this.referencia = referencia;
    this.descripcion = descripcion;
    this.precio = precio;
    this.existencia = existencia;
}

let articulo = new articulo1('nike','zapatos color negro', 550000, true);

 // manera 2
let articulo = new Object();
articulo.referencia = "ert456";
articulo.descripcion = "azul";
articulo.precio = "1200000";
articulo.existencia = true;

console.log(`referencia: ${articulo.referencia}`);