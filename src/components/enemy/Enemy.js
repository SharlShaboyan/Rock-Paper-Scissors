import './enemy.css';
import { useEffect, useState } from "react";

function Enemy ({ enemyTools, enemyScore, randomCompChoice }) {

    const [computerChoice, setComputerChoice] = useState()

    useEffect(() => {
        setComputerChoice(enemyTools[randomCompChoice])     
    }, [enemyTools])


    return (
        <div className="enemy">
            <h2>Score : {enemyScore}</h2>
            <img src={computerChoice} />
            <div className="tools-enemy">
                <h1>Computer</h1>
            </div>
        </div>
    )
}

export default Enemy