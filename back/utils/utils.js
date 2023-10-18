class Utils{

    isEmpty(value){
        return value === "" || value === undefined
    }

    maxLength(value, max){
        return value.length > max;
    }
}

module.exports = Utils
