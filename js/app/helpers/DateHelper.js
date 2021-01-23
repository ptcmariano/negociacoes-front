class DateHelper {
    constructor() {
        throw new Error('Essa classe não pode ser instanciada, use as funções estaticas.')
    }
    static dataParaTexto(data) {
        return data.toLocaleDateString();
    }
    static textoParaData(texto) {
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) throw new Error('texto deve estar no formado yyyy-MM-dd para retornar objeto data, recebido: '+texto);

        return new Date(texto.split('-'));
    }
    static agora() {
        return new Date().toJSON().substr(0,10).toString();
    }
}
