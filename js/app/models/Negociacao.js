class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        this._volume = quantidade * valor;
        Object.freeze(this);
    }

    get quantidade() {
        return this._quantidade;
    }
    get data() {
        return new Date(this._data.getTime());
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._volume;
    }
}