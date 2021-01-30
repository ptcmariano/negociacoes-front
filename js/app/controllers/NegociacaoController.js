class NegociacaoController {
    constructor() {
        const $ = document.querySelector.bind(document);
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        const self = this;

        this._negociacoesView = new NegociacoesView(document.querySelector('#negociacoesTable'));

        this._listaNegociacoes = new Proxy(new ListaNegociacoes(), {
            get(target, prop, reciever) {
                if (
                    ['adiciona','esvazia'].includes(prop) &&
                    typeof(target[prop]) === typeof(Function)
                ) {
                    return function() {
                        console.log(`interceptando ${prop}`)
                        Reflect.apply(target[prop], target, arguments);
                        self._negociacoesView.update(target);
                    }
                }
                return Reflect.get(target, prop, reciever);
            }
        });

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView(document.querySelector('#mensagemView'));
    }
    adiciona(event) {
        event.preventDefault()
        let dataObjeto = DateHelper.textoParaData(this._inputData.value);
        let negociacao = new Negociacao(
            dataObjeto,
            this._inputQuantidade.value,
            this._inputValor.value
        );
        this._listaNegociacoes.adiciona(negociacao);

        this._mensagem.texto = "Negociação criada com sucesso";
        this._mensagemView.update(this._mensagem);
    }
}
