
class MensagemView {
    constructor(elemento) {
        super(elemento);
    }
    template(model) {
        const classAlert = model.texto ? `class="alert alert-info"` : '';
        let template = `<p ${classAlert}>${model.texto}</p>`;
        return template;
    }
}
