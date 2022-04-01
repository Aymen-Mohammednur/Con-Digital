import React, { useEffect } from 'react'
import { Table, TableBody, TableContainer, TableHead, TableRow, Button, Paper, Box, Stack } from '@mui/material'
import { useSelector, useDispatch } from "react-redux";
import { loadStaffs, deleteStaff } from '../state/actions';
import { RootState } from '../state/reducers/index';
import { useNavigate } from 'react-router-dom'
import { StyledTableCell, StyledTableRow } from "./RowStyle"

interface staff {
    id: number
    fullName: string
    email: string
    age: number
}

function Home() {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    // const { staffs } = useSelector(state => state.data)
    const { staffs } = useSelector((state: RootState) => state.data)
    useEffect(() => {
        dispatch(loadStaffs())
    }, []);

    const handleDelete = (id: number) => {
        if (window.confirm("Are you sure you want to delete this staff?")) {
            dispatch(deleteStaff(id))
        }
    };

    return (
        <div>
            <Box
                sx={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    '& > *': {
                        m: 11,
                    },
                }}
            > <Button onClick={() => navigate('/add-staff')} variant='contained' color='primary'>Add Staff</Button></Box>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 900 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Full Name</StyledTableCell>
                            <StyledTableCell align="center">Email</StyledTableCell>
                            <StyledTableCell align="center">Age</StyledTableCell>
                            <StyledTableCell align="center">Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {staffs && staffs.map((staff: staff) => (
                            <StyledTableRow key={staff.id}>
                                <StyledTableCell component="th" scope="row">
                                    {staff.fullName}
                                </StyledTableCell>
                                <StyledTableCell align="center">{staff.email}</StyledTableCell>
                                <StyledTableCell align="center">{staff.age}</StyledTableCell>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        '& > *': {
                                            m: 1,
                                        },
                                    }}
                                >
                                    <Stack spacing={2} direction="row">
                                        <Button onClick={() => navigate(`/edit-staff/${staff.id}`)} variant="outlined" color="primary">Edit</Button>
                                        <Button onClick={() => handleDelete(staff.id)} variant="contained" color="error">Delete</Button>
                                    </Stack>
                                </Box>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Home