import React from 'react'
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
interface ColumnType {
  header: string
  accessor: string
}
interface TableData {
  [key: string]: string | React.ReactNode
}
interface TableType {
  columns: Array<ColumnType>
  data: Array<TableData>
  variant?: string
}

const BasicTable: React.FC<TableType> = ({ data, columns, variant }) => {
  return (
    <TableContainer>
      <Table variant={variant || 'simple'} size='sm'>
        <Thead>
          <Tr>
            {columns.map((item: ColumnType) => (
              <Th key={item.header}>{item.header}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => (
            <Tr key={Number(item.id)} >
              {columns.map((column) => (
                <Td key={column.header}>{item[column.accessor]}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default BasicTable
