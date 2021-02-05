
class ProxyFactory {
    static create(objeto, props, acao) {
        return new Proxy(objeto, {
            get(target, prop, reciever) {
                if (
                    ProxyFactory._inLista(props, prop) &&
                    ProxyFactory._isFuncao(target[prop])
                ) {
                    return function() {
                        Reflect.apply(target[prop], target, arguments);
                        return acao(target);
                    }
                }
                return Reflect.get(target, prop, reciever);
            },
            set(target, prop, value, reciever) {
                if (ProxyFactory._inLista(props, prop)) {
                    console.log(`vai setar`, prop);
                    acao(target);
                }
                return Reflect.set(target, prop, value, reciever);
            }
        });
    }
    static _isFuncao(funcao) {
        return typeof(funcao) === typeof(Function);
    }
    static _inLista(props, prop) {
        return props.includes(prop);
    }
}