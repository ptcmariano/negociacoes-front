
class ProxyFactory{
    static create(objeto, props, acao) {
        return new Proxy(objeto, {
            get(target, prop, reciever) {
                if (
                    props.includes(prop) &&
                    typeof(target[prop]) === typeof(Function)
                ) {
                    return function() {
                        console.log(`interceptando ${prop}`)
                        Reflect.apply(target[prop], target, arguments);
                        return acao(target);
                    }
                }
                return Reflect.get(target, prop, reciever);
            }
        });
    }
}