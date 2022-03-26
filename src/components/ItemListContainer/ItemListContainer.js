import React from 'react'
// import { getProducts } from "../../asyncmock"
import { useState, useEffect } from 'react'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("")

    // useEffect(() => {
    //     fetch('https://api.mercadolibre.com/sites/MLA/search?q=notebook')
    //         .then(response => {
    //            return response.json()
    //         }).then( res => {
    //             console.log(res.results)
    //             setProducts(res.results)
    //         })
    // }, [])

    const fetchProducts = () => {
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`) 
            .then(response => {
                return response.json()
            }).then( res => {
                console.log(res.results)
                setProducts(res.results)
            })
    }

    return(
        <div>
            <h1>{greeting}</h1>
            <input type="text" onChange={(e) => setSearch(e.target.value)}/>
            <button onClick={fetchProducts}>Buscar</button>
            <ul>
                {products.map(product => <img key={product.id} src={product.thumbnail} alt='img'/>)}
            </ul>
        </div>

    )
}

export default ItemListContainer