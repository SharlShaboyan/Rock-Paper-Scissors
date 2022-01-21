import './me.css';

function Me ({ myScore, tools, mainImg, setMainImg, setRandomCompChoice, meRef }) {

        return (
        <div className="me" ref={meRef}>
                <h2>Score : {myScore}</h2>
                <img src={mainImg} />
                <div className="tools">
                {
                        tools.map((tool) => {
                                return <img  
                                        key={tool} 
                                        src={tool} 
                                        onClick={() => {
                                                setMainImg(tool)
                                                setRandomCompChoice(Math.floor(Math.random() * 3))
                                        }} 
                                />
                        })
                }
                </div>
        </div>
    )
}

export default Me