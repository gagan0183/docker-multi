import './App.css';
import { Route } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import { Fib } from './Fib';
import { OtherPage } from './OtherPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Fib} />
        <Route path="/otherpage" component={OtherPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
