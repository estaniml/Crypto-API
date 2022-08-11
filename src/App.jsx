import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Navbar from './components/Navbar'
import ListValues from './components/ListValues'
import List from './components/List'
import Select from './components/Select'
import Footer from './components/Footer'

const Container = styled.div`
  width: 80%;
  margin: 200px auto;
`

const Headcont = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 40px;
`

const Imgcrypto = styled.img`
  width: 300px;
  margin: auto;
`

function App() {

const [data, setData] = useState([])

const navbar = useRef(null)
const coins = useRef(null)
const values = useRef(null)


useEffect(() => {
  const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0'
    },
    headers: {
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      'X-RapidAPI-Key': `${import.meta.env.VITE_APP_CRYP}`
    }
  };
  
  const apiRequest = async () => { 
    try {
      const response = await axios(options)
      setData(response.data.data.coins)
    } catch(error) {
      console.error(error);
    };
  }
  apiRequest()
  }, [])



  return (
    <>
      <Navbar navbar={navbar} coins={coins} values={values} />

      <Container>
        <Headcont>
          <h1>Conoce todo del mundo CRYPTO<br/>---&gt;</h1>
          <Imgcrypto src='https://www.pngmart.com/files/17/Digital-Currency-PNG-Photo.png' alt='logo cryptapp' />
        </Headcont>

        <Select data={data} />
        
        <List data={data} coins={coins} />

        <ListValues data={data} values={values} />

        <Footer navbar={navbar} coins={coins} values={values} />
      </Container>
    </>
  )
}

export default App
