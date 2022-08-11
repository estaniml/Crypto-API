import styled from 'styled-components'

const Foot = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-bottom: 20px;

    div {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 30px;
        place-content: center;
    }
    ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        height: 100%;
    }
    img {
        width: 100px;
        text-align: center;
    }
`

const Footer = ({coins, values}) => {
    
    const handleScroll = (item) => {
        item.current.scrollIntoView()
    }

  return (
    <Foot>
        <div>
            <h1>Cryptapp</h1>
            <img  src='https://www.pngmart.com/files/17/Digital-Currency-PNG-Photo.png' alt='logo cryptapp' />
        </div>
        <div>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a onClick={ () => handleScroll(coins)}>Coins</a>
            </li>
            <li>
                <a onClick={ () => handleScroll(values)}>Values</a>
            </li>
        </div>
    </Foot>
  )
}

export default Footer