import React from 'react';
import './App.css';

function App() {
  const name = 'melt';
  const num = 3;
  return (
    <fragments>
      <div>
        hello {name}!!!! 
        <input type="text"/>

        {
          1+2 === 13 ? (<div>맞다!!</div>) : (<div>틀리다!!</div>)
        } 
        </div>

        <div>
          {
            (()=> {
              if(num === 1) return (<div>원</div>);
              if(num === 2) return (<div>투</div>);
              if(num === 3) return (<div>쓰리</div>);
            })()
        
          }

        </div>

        <div className="App-test">리액트</div>
      </fragments>
    );
}

export default App;
