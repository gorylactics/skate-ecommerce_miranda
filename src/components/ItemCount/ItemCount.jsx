import { Container, Row , Col , Stack} from "react-bootstrap"
import {useState} from 'react'
import './ItemCount.css'

export const ItemCount = ({stock = 0 , initial = 0 , onAdd}) =>{

    const [count, setCount] = useState(initial);
    const agregar = () =>{
        if(stock === 0){
            alert('sin stock')
        }else if(count >= stock){
            alert('no puedes agregar mas')
        }else{
            setCount(count+1)
        }
    }

    const restar = () => {
        if (count <= 1){
            alert('no puedes agregar menos de 1')
        }else{
            setCount(count-1)
        }
    }
    return(
        <>
            <Container>
                <Row>
                    <Col >
                        <Stack direction="horizontal" gap={3} className="botonera">
                            <div className="contador">
                            <button onClick={restar}> -1 </button>
                            <p className="numero"> {count} </p>
                            <button onClick={agregar}> +1 </button>
                            </div>
                            <button onClick={()=> {onAdd(count)}}>Agregar al carrito</button>
                            <p>Stock disponible : {stock}</p>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </>
    )
}