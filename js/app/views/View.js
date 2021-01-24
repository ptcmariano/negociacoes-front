
class View {
    constructor(elemento) {
        this._elemento = elemento;
    }
    template(model) {
        // abstração para implementar nas classes herdadas
        throw new Error('O método template deve ser implementado');
    }
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
}