
class ProxyFactory{
    static create(objeto, props, acao) {
        return new Proxy(objeto, {
            get(target, prop, reciever) {
                if (
                    props.includes(prop) &&
                    typeof(target[prop]) === typeof(Function)
                ) {
                    return function() {
                        Reflect.apply(target[prop], target, arguments);
                        return acao(target);
                    }
                }
                return Reflect.get(target, prop, reciever);
            },
            set(target, prop, value, reciever) {
                if (props.includes(prop)) {
                    console.log(`vai setar`, prop);
                    acao(target);
                }
                return Reflect.set(target, prop, value, reciever);
            }
        });
    }
}