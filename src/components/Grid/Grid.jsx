import { useState } from "react";
import Card from "../Card/Card";
import './Grid.css'
import isWinner from "../Helpers/checkWinner";
export default function Grid({numberOfCards}){
   const [boardState,setBoardState]=useState(Array(numberOfCards).fill(""))
   const [turn,setTurn]=useState(true); // true => O , false => X
   const [winner, setWinner]=useState(null)
  
   function play(index){
    if(turn == true){
        boardState[index]="O";
    }else{
        boardState[index]="X";
    }
    const win = isWinner(boardState, turn ? "O" : "X")
    if(win){
       setWinner(win);
    }
    setBoardState([...boardState]);
    setTurn(!turn);
   }

   function reset(){
    setTurn(true);
    setWinner(null);
    setBoardState(Array(numberOfCards).fill(""))
   }

   return (
    <div className="grid-wrapper">
        {
            winner && (
                <>
                    <h1 className="turn-highlight">Winner is {winner}</h1>
                    <button className="reset" onClick={()=>reset()}>Reset Game</button>
                </>
               
            )
        }
        <h1 className="turn-highlight">Current turn: {(turn) ? 'O' : 'X'}</h1>
        <div className="grid">
            {boardState.map((ele,idx) => <Card key={idx} onPlay={play} gameEnd={winner ? true : false} player={ele} index={idx} > {ele} </Card>)}
        </div>
    </div>
    
   )
}