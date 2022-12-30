import React from 'react'
import TableHead from '../TableHead/TableHead';
import TableRow from '../TableRow/TableRow';
const Table = ({ theadData, tbodyData, customClass }) => {
    return (
        <table className={customClass}>
            <thead>
                <tr>
                    {theadData.map((h,index) => {
                        return <TableHead key={index} item={h} />;
                    })}
                </tr>
            </thead>
            <tbody>
                {tbodyData.map((item) => {
                    return <TableRow key={item.id} data={item.items} />;
                })}
            </tbody>
        </table>
    )
}

export default Table