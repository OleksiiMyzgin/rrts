import { Todo, Action, ActionTypes } from "../actions";

export const todosReducers = (state: Todo[] = [], action: Action ) => {
    switch (action.type) {
        case ActionTypes.fetchTodos:
            return action.payload;
        default:
            return state;
    }
}