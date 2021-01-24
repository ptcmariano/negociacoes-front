
class MensagemView {
    constructor(elemento) {
        this._elemento = elemento;
    }
    _template(model) {
        const classAlert = model.texto ? `class="alert alert-info"` : '';
        let template = `<p ${classAlert}>${model.texto}</p>`;
        return template;
    }
    update(model) {
        this._elemento.innerHTML = this._template(model);
    }
}
