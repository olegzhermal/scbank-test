import { useEffect } from 'react';
import { useDispatch } from 'react-redux'

// import logo from './logo.svg';
import './App.css';
import { CardContainer } from './components/CardContainer'
import { getDataAcync } from './helpers/generateData'
import { init } from './reducers/cards'

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        const getData = async () => {
            const data = await getDataAcync(10)
            dispatch(init(data))
        }
        getData()
    }, [dispatch]);

    return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
      <CardContainer />
    </div>
  );
}

export default App;
