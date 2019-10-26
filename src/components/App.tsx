import React from 'react';
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo} from '../actions';
import { StoreState} from '../reducers';

interface AppProps {
    todos: Todo[];
    fetchTodos: Function;
    deleteTodo: typeof deleteTodo;
}
class _App extends React.Component<AppProps> {
    onButtonClick = (): void => {
        this.props.fetchTodos();
    }

    renderList = (): JSX.Element[] => {
        return(
            this.props.todos.map((todo: Todo) => {
                return (
                    <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
                        {todo.title}
                    </div>
                );
            })
        );
    }

    onTodoClick = (id: number): void => {
        this.props.deleteTodo(id);
    };

    render() {
        return (
            <div>
                <button onClick={this.onButtonClick}>Fetch</button>
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
    return { todos }
}

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);