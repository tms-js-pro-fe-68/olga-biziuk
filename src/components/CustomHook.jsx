import { Box } from "@mui/material";
import { useEffect,useState } from "react"

const api = 'https://api.chucknorris.io/jokes/random';

function useCustomHook() {
    const [chackFact,setChackFact] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [errors,setError] = useState([]);
    const [count,setCount] = useState(0);
    async function getText() {
        try {
            const response = await fetch(api);
            if (response.status === 200) {
                response.json()
                .then(data => { setChackFact(arr => [...arr,data]);

                })
                .finally(()=>{
                    setIsLoading(false)
                })
            }
            else throw new Error(`--- Response status is ${response.status} --- `)
        } catch (error) {            
            setError(array=>[...array,error.message])
        }
}

    useEffect(() => {
        setIsLoading(true)
        getText()
}
,[count])

    return {isLoading,chackFact, errors, setCount }
}


export default function useMyCustomHook(){
    const { isLoading,chackFact, errors, setCount } = useCustomHook();
    return (
        <Box sx={{
            display: 'grid',
            direction: 'column',
            gap:1,
            p:32,
        }}>
        <p>
            Errors: {errors}
        </p>
        <p>
            {isLoading && 'Loading, wait ...'}
        </p>
        <button 
            type = 'button'
            onClick = {()=>{setCount(c => c + 1)}}>
                Try to click
        </button>
        <div >
            {chackFact.map((fact) => 
            <div key={fact.id}
            style = {{
                    background:'rgba(255, 88, 42, 0.5)',
                    color: 'red',
                    fontWeight: '180',
                    margin: '10px',
                    padding: '10px',
                    width: '300px',
                    borderRadius : '3px'}}>
                        {fact.value}
            </div> 
)}
        </div>

        </Box>
)
}