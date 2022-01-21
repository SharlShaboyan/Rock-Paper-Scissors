import './game.css';
import Enemy from './enemy/Enemy';
import Me from './me/Me';
import { useState, useRef } from 'react';

function Game () {

    const meRef = useRef(null);

    // Me
    const tools = ["./images/rock.png", "./images/paper.png", "./images/scissors.png"];

    const [mainImg, setMainImg] = useState("./images/pub.png")

    let [myScore, setMyScore] = useState(0)


    // Enemy
    const enemyTools = ["./images/rock-right.png", "./images/paper-right.png", "./images/scissors-right.png", "./images/rock-right2.png", "./images/paper-right2.png", "./images/scissors-right2.png", "./images/pub.png"];
   
    const [randomCompChoice, setRandomCompChoice] = useState(6);
    
    let [enemyScore, setEnemyScore] = useState(0)
    
    

    //--------------------
            if (mainImg === tools[0] & randomCompChoice === 2) {
                setMyScore(myScore + 1)
                setMainImg("./images/rock2.png")  
                meRef.current.style.borderColor = "green" 
                setTimeout(() => {
                    meRef.current.style.borderColor = "black" 
                }, 500);             
            } else if (mainImg === tools[1] & randomCompChoice === 0) {
                setMyScore(myScore + 1)
                setMainImg("./images/paper2.png")
                meRef.current.style.borderColor = "green" 
                setTimeout(() => {
                    meRef.current.style.borderColor = "black" 
                }, 500);  
            } else if(mainImg === tools[2] & randomCompChoice === 1) {
                setMyScore(myScore + 1)
                setMainImg("./images/scissors2.png") 
                meRef.current.style.borderColor = "green" 
                setTimeout(() => {
                    meRef.current.style.borderColor = "black" 
                }, 500); 
            }

            if(mainImg === tools[0] & randomCompChoice === 1) {
                setEnemyScore(enemyScore + 1)
                setRandomCompChoice(4)
                meRef.current.style.borderColor = "red" 
                setTimeout(() => {
                    meRef.current.style.borderColor = "black" 
                }, 500); 
            } else if(mainImg === tools[1] & randomCompChoice === 2) {
                setEnemyScore(enemyScore + 1)
                setRandomCompChoice(5)
                meRef.current.style.borderColor = "red" 
                setTimeout(() => {
                    meRef.current.style.borderColor = "black" 
                }, 500); 
            } else if(mainImg === tools[2] & randomCompChoice === 0) {
                setEnemyScore(enemyScore + 1)
                setRandomCompChoice(3)
                meRef.current.style.borderColor = "red" 
                setTimeout(() => {
                    meRef.current.style.borderColor = "black" 
                }, 500); 
            }

            if(myScore === 10) {
                setTimeout(() => {
                    alert("You win!")
                    setMyScore(0)
                    setEnemyScore(0)
                    setMainImg("./images/pub.png")
                    setRandomCompChoice(6)
                }, 500);
            }
            if(enemyScore === 10) {
                setTimeout(() => {
                    alert("Computer win!")
                    setEnemyScore(0)
                    setMyScore(0)
                    setMainImg("./images/pub.png")
                    setRandomCompChoice(6)
                }, 500);
            }


    return (
        <div className="game">
            <Me meRef={meRef} myScore={myScore} tools={tools} mainImg={mainImg} setMainImg={setMainImg} setRandomCompChoice={setRandomCompChoice} />
            <Enemy enemyScore={enemyScore} enemyTools={enemyTools} mainImg={mainImg} randomCompChoice={randomCompChoice}  />
        </div>
    )
}

export default Game