import React from 'react'

const TableHead = ({item}) => {
    return (
        <td title={item}>
            {item}
        </td>
    );
}

export default TableHead