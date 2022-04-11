import React,{useState} from "react"
import Start from "./components/Start"
import Quiz from "./components/Quiz"

function App() {

    const [isIntroPage, setIsIntroPage] = useState(true)

    return (
        <div className="container">
            {isIntroPage
                ? <Start handleClick={() => setIsIntroPage(false)}/>
                : <Quiz />       
            }
        </div>
    )
}

export default App