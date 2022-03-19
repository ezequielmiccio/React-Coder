import { useState, useEffect } from 'react'

const FunctionCounter = (props) => {
    console.log('1 Empieza la ejecucion del componente')
    const [count, setCount] = useState(props.initial)
    const [title, setTitle] = useState('Titulo inicial')

    useEffect(() => {
        console.log('3 Ya se monto el componente en pantalla')

        return(() => {
            console.log('se va a desmontar')
            setCount()
        })
    }, [])
    
    // useEffect(() => {
    //     console.log('cambio uno de los estados')
    // }, [count, title])

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    console.log('2 Se va a montar en pantalla el componente')
    return(
        <div>
            <h1>{title}</h1>
            <button onClick={() => setTitle('Cambie el titulo')}>Cambiar titulo</button>
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default FunctionCounter