export class ObjectUtil {
    static removeEmptyProperties(obj) {
        return Object.keys(obj)
            .filter(k => null != obj[k] && undefined !== obj[k] && '' !== obj[k])
            .reduce((v, k) => Object.assign(v, {[k]: obj[k]}), {});
    }
}
