import { useState } from 'react'
import { FaAlignJustify } from 'react-icons/fa'
import styled from 'styled-components'

const Nav = styled.nav`
    background-image: linear-gradient(to right, #434343 0%, black 100%);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
`
const Navcont = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    width: 80%;
    margin: 0 auto;
    height: 100%;
`
const Navul = styled.ul`
    display: none;

    @media (min-width: 768px) {  
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        width: 30%;
    }
`
const Nava = styled.a`
    font-weight: bold;
    cursor: pointer;
    
    &:hover {
        color: #ffc107;
    }
 `
 const Navmenu = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        display: none;
    }
`


const Navbar = ({navbar, coins, values}) => {

    const [open, setOpen] = useState(false)

    const toggleMenu = () => {
        setOpen(!open)
    }

    const handleScroll = (item) => {
        item.current.scrollIntoView()
    }

  return (
    <Nav ref={navbar}>
        <Navcont>
            <div>
                <a href="#">Cryptapp</a>
            </div>
            <Navmenu>
                <FaAlignJustify 
                    className='menu-icon'
                    onClick={toggleMenu}
                />
                <div className={ open ? 'drop' : 'hide' }>
                    <li>
                        <Nava onClick={ () => handleScroll(navbar) }>Home</Nava>
                    </li>
                    <li>
                        <Nava onClick={ () => handleScroll(coins)}>Coins</Nava>
                    </li>
                    <li>
                        <Nava onClick={ () => handleScroll(values)}>Values</Nava>
                    </li>
                </div>
            </Navmenu>
            <Navul>
                <li>
                    <Nava href="#">Home</Nava>
                </li>
                <li>
                    <Nava onClick={ () => handleScroll(coins)}>Coins</Nava>
                </li>
                <li>
                    <Nava onClick={ () => handleScroll(values)}>Values</Nava>
                </li>
            </Navul>
        </Navcont>
    </Nav>
  )
}

export default Navbar