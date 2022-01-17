import React , {useEffect} from 'react'
import axios from 'axios';

function LandingPage() {

    useEffect(() => {
        axios.get('/api/hello')
        .then(response => console.log(response.data))
    }, [])
    return (
        
        <div>
            <p>LandingPage 랜딩페이지 컴포넌트</p>


            <progress value="70" min="0" max="100"></progress>

            <meter min="0" max="100" low="20" high="65" optimum="15" value="20"></meter>

            <details>
                <summary>what is the best?</summary>
                <span>고기!</span>
            </details>

            <input type="week"></input>
            <input type="time"></input>


            <picture>
                <source srcSet='src/00.jpg'></source>
                <img></img>
            </picture>

            <datalist>
                <input type="text"/>
            </datalist>
        </div>
    )
}

export default LandingPage

