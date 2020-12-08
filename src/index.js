import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

class Square extends React.Component{
  render(){
    return(
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

class Board extends React.Component{
  renderSquare(i){
    return(
      <Square/>
    );
  }

  renderBoard(i,j){
    var lin = 0;
    var col = 0;
    var conta=0;
    var item = [];
    var linha = [];
    for(lin=0;lin<i;lin++){
      for(col=0;col<j;col++){
      item.push(<>{this.renderSquare(conta)}</>);
        conta++;
      }
      linha.push(<div className="board-row">{item}</div>);
      item = []; 
    }
    return(
      <div>
      {linha}
      </div>
    );
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div>
          {this.renderBoard(3,3)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
