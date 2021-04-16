const toggleAction = (param) => {
    return {
        type: 'TOGGLE',
        payload: param
    }};
const valueAction = (param) => {
    return {
        type: 'VALUE',
        payload: param
    }};

    export {
        toggleAction,
        valueAction
    };