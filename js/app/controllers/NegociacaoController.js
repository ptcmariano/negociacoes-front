class NegociacaoController {
    constructor() {
        const $ = document.querySelector.bind(document);
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        const self = this;

        this._negociacoesView = new NegociacoesView(document.querySelector('#negociacoesTable'));

        this._listaNegociacoes = ProxyFactory.create(
            new ListaNegociacoes(),
            ['adiciona', 'esvazia'],
            (model) => this._negociacoesView.update(model)
        );

        this._mensagemView = new MensagemView(document.querySelector('#mensagemView'));
        this._mensagem = ProxyFactory.create(
            new Mensagem(),
            ['texto'],
            (model) => this._mensagemView.update(model)
        );
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
    }
}
