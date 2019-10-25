import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
    color?: string;
}

// class
class App extends React.Component<AppProps> {
    render() {
        return (
            <div>{this.props.color}</div>
        );
    }
}

// functional component
// const App: React.FC<AppProps> = (props) => {
//     return (
//         <div>{props.color}</div>
//     );
// }

ReactDOM.render(<App />, document.getElementById('root'));
