class NegociacaoController {
    constructor() {
        const $ = document.querySelector.bind(document);
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');

        this._listaNegociacoes = new Associa(
            new ListaNegociacoes(),
            new NegociacoesView(document.querySelector('#negociacoesTable')),
            'adiciona', 'esvazia'
        );

        this._mensagem = new Associa(
            new Mensagem(),
            new MensagemView(document.querySelector('#mensagemView')),
            'texto'
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
