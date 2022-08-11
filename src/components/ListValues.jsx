import styled from 'styled-components'
import { formatPrice } from '../helpers'

const TableCont = styled.table`
    width: 100%;
    margin: 200px auto;
`

const TableRow = styled.tr`
    font-size: 20px;
    text-align: center;
    border-bottom: 1px solid #ccc;
`

const TableHead = styled.th`
    font-size: 20px;
    text-align: center;
    border-bottom: 1px solid #ccc;
    padding: 5px 10px;
`

const TableData = styled.td`
    font-size: 20px;
    text-align: center;
    border: 1px solid #ccc;
    padding: 10px 15px;
    background-color: #dfdfc42b;
`

const Ulimg = styled.img`
    width: 30px;
    text-align: center;
`


const ListValues = ({data, values}) => {


  return (
    <TableCont ref={values}>
        <thead >
            <TableRow>
                <TableHead></TableHead>
                <TableHead>Symbol</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Market Cap</TableHead>
            </TableRow>
        </thead>
        <tbody>
            {data.map(item => (
                <TableRow key={item.uuid}>
                    <TableData><Ulimg src={item.iconUrl} alt={item.name} /></TableData>
                    <TableData>{item.symbol}</TableData>
                    <TableData>{item.name}</TableData>
                    <TableData>{formatPrice.format(item.price)}</TableData>
                    <TableData>{formatPrice.format(item.marketCap)}</TableData>
                </TableRow>
            ))}
        </tbody>

    </TableCont>
  )
}

export default ListValues