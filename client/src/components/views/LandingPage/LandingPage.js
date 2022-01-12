import React , {useEffect} from 'react'
import axios from 'axios';

function LandingPage() {

    useEffect(() => {
        axios.get('/api/hello')
        .then(response => console.log(response.data, for_test()))
    }, [])

    function for_test(){

        const arr = [10, 20, 30, 40];
        for(const item of arr){
            console.log(item)
        }

        const obj = {
            name : 'hesu',
            job : 'programas'
        }
        
        for (const key in obj){
            console.log(`${key} : ${obj[key]}`)
        }

        //for(let i = 0; i< 10; i++ ){
        //   console.log(i)
        //}
    }

    return (
        
        <div>
            <p>LandingPage 랜딩페이지 컴포넌트</p>
        </div>
    )
}

export default LandingPage

