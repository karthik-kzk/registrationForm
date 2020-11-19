
import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';





function TableHeader(props) {
    return (
        <div class="grid-container">
                <div class="table">
             <TableContainer component={Paper}>
                <Table  aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell >Email Id </TableCell>
                        <TableCell >Name</TableCell>
                        <TableCell >Avatar</TableCell>
                        <TableCell >Phone No</TableCell>
                        <TableCell >Address</TableCell>
                        <TableCell >Country</TableCell>
                        <TableCell >State</TableCell>
                        <TableCell >City</TableCell>
                        <TableCell align="left">Action</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {props.rows}
                    </TableBody>
                </Table>
             </TableContainer>
        </div>
        </div>
    )
}

export default TableHeader;
