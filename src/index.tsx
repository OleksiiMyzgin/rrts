import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
    color?: string;
}

// #1
const App:React.FC<AppProps> = (props):JSX.Element => {
    return (
        <div>Hello</div>
    )
}

// #2
const App = (props: AppProps):JSX.Element => {
    return (
        <div>Hello</div>
    )
}

// class App extends React.Component<AppProps> {
//     state = { counter: 0 };

//     onIncrement = (): void => {
//         this.setState({ counter: this.state.counter + 1 });
//     }

//     onDecrement = (): void => {
//         this.setState({ counter: this.state.counter - 1 });
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.onIncrement}>Increment</button>
//                 <button onClick={this.onDecrement}>Decrement</button>
//                 {this.state.counter}
//             </div>
//         );
//     }
// }

ReactDOM.render(<App />, document.getElementById('root'));
