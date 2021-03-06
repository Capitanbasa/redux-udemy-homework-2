const initialState = {
    persons : []
}
const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADDPERSON' :
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.payload.name,
                age: action.payload.age
            }
            return {
                ...state,
                persons : state.persons.concat(newPerson)
            }
        case 'DELETEPERSON' :
         const updatedArray = state.persons.filter(person => person.id !== action.payload.id);
            return {
                ...state,
                persons: updatedArray
            }
        //no default
    }
    return state;
}

export default reducer;