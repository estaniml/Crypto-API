import styled from 'styled-components'


const Container = styled.div`
    width: 100%;
    margin: 200px auto;
`
const Ulcont = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding-left: 0;
`

const Ulli = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 20px auto;
    gap: 20px;
`

const Ulimg = styled.img`
    width: 100px;
    text-align: center;
    cursor: pointer;
`

const Ula = styled.a`
    text-align: center;
`

const List = ({data, coins}) => {


  return (
    <Container ref={coins} >
        <Ulcont>
            {data.map(item => (
                <Ulli key={item.uuid}>
                    <Ulimg src={item.iconUrl} alt={item.name} />
                    <Ula href={item.coinrankingUrl}>{item.name}</Ula>
                </Ulli>
            ))}
        </Ulcont>
    </Container>
  )
}

export default List