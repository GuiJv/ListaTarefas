class Utils{

    isEmpty(value){
        return value === "" || value === undefined
    }

    maxLength(value, max){
        return value.length > max;
    }

    isType(type, value){
        return type !== typeof value
    }
}

module.exports = Utils
