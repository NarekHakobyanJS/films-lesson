import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { fetchText, changeText } from './store/searchFilms';

function App() {
  const dispatch = useDispatch()
  const {s, text} = useSelector((state) => state.search)

  useEffect(() => {
    if(text.length === 3) {
      dispatch(fetchText(text))
    }
    
  }, [text])
  return (
    <div className="App">
     <input type={text} onChange={e => dispatch(changeText(e.target.value))}/>
      {
        s?.map((e) => {
          return <p>{e.title}</p>
        })
      }
    </div>
  );
}

export default App;
