import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { formatPrice } from '../helpers'

const Container = styled.div`
  margin: 200px auto;
  display: grid;
    grid-template-columns:  1fr;
    gap: 2rem;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
`

const SelectSt = styled.select`
    width: 100%;
    height: 60px;
    background-color: transparent;
    color: #fff;
    font-size: 24px;
    padding: 1rem;
    line-height: 21rem;

    &:focus {
        background-color: #434343;
        outline: none;
    }
`

const Select = ({data}) => {

    const [crypto, setCrypto] = useState('Seleccione')
    const [selected, setSelected] = useState({})

    useEffect(() => {
    
        const cryptoReq = () => {
            const cryptoSelected = data.filter( el => el.uuid === crypto)
            setSelected(cryptoSelected[0])    
        }
        cryptoReq()        

    }, [crypto])


    

  return (
    <Container>
        <div>
            <h1>Selecciona tu crypto</h1>
            <SelectSt 
                name="crypto"
                value={crypto}
                onChange={(e) => {
                    setCrypto(e.target.value)
                }}
            >
                {data.map(item => (
                    <option key={item.uuid} value={item.uuid}>{item.name}</option>
                ))}
            </SelectSt>
        </div>
        <div>
            {
                selected ? (
                    <div>
                        <h2>Moneda: {selected.name}</h2>
                        <p>{selected.symbol}</p>
                        <p>Precio: U$ {formatPrice.format(selected.price)}</p>
                        <p>Cambio: {selected.change}</p>
                        <p>Ranking crypto: {selected.rank}</p>
                    </div>
                ) : (
                    <div>
                        <h2>Bitcoin</h2>
                        <p>Bitcoin (BTC) is a digital currency and worldwide payment system invented by Satoshi Nakamoto in 2009. It is the first decentralized digital currency, as the system works without a central bank or single administrator.</p>
                    </div>
                )
            }
        </div>
    </Container>
  )
}

export default Select