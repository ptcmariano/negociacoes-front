
class MensagemView extends View {
    constructor(elemento) {
        super(elemento);
    }
    template(model) {
        const classAlert = model.texto ? `class="alert alert-info"` : '';
        const textoContent = model.texto ? model.texto : '';
        let template = `<p ${classAlert}>${textoContent}</p>`;
        return template;
    }
}
