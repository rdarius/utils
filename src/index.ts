export const getCLIArguments = () => {

    const args = {};

    for(let arg of process.argv) {
        if (arg.startsWith('-')) {

        }
    }
};

export const createParamIfDoesNotExist = (object: Object, param: string, expectedType: "array" | "object") => {
    if (object.hasOwnProperty(param)) {
        // object[param] = expectedType === 'array' ? [] : {};
    }
}


getCLIArguments();
