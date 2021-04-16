export const toggleReducer = (state = false, action) => {
    switch(action.type) {
        case 'TOGGLE':
            return action.payload;
        default:
            return state;
    }};
export const valueReducer = (state = "Välj Förråd", action) => {
    switch(action.type) {
        case 'VALUE':
            return action.payload;
        default:
            return state;
    }};