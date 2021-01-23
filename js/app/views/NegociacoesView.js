
class NegociacoesView {

    constructor(elemento) {
        this._elemento = elemento;
    }

    update(listaModel) {
        this._elemento.innerHTML = this._template(listaModel);
    }

    _template(listaModel) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                ${listaModel.negociacoes.map(item => `
                    <tr>
                        <td>${DateHelper.dataParaTexto(item.data)}</td>
                        <td>${item.quantidade}</td>
                        <td>${item.valor}</td>
                        <td>${item.volume}</td>
                    </tr>
                `).join('')}
                </tbody>
                
                <tfoot>
                    <td colspan="3"></td>
                    <td>${
                        listaModel.negociacoes.reduce((total, item) => total+=item.volume ,0)
                    }</td>
                </tfoot>
            </table>
        `;
    }
}
