import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getSingleStaff, updateStaff } from '../state/actions';
import { RootState } from '../state/reducers/index';

const EditStaff: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams()
    const [error, setError] = useState("");
    const { staff } = useSelector((state: RootState) => state.data)

    const [input, setInput] = useState({
        fullName: "",
        email: "",
        age: ""
    });

    useEffect(() => {
        dispatch(getSingleStaff(Number(id)))
    }, []);

    useEffect(() => {
        if (staff) {
            setInput({ ...staff })
        }
    }, [staff]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleEdit = () => {
        if (!input.fullName || !input.age || !input.email) {
            // alert("Please insert all inputs.")
            setError("Please insert all inputs")
        } else {
            dispatch(updateStaff(input, Number(id)))
            navigate('/')
            setError("")
        }
    };

    return (
        <div style={{ marginTop: '100px' }}>
            <h2>Update Staff</h2>
            {error && <h3 style={{ color: 'red' }}>{error}</h3>}
            <Box
                style={{ marginTop: '20px' }}
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '45ch' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleEdit}
            >
                <TextField name='fullName' value={input.fullName || ""} onChange={handleChange} type="text" id="standard-basic" label="Full Name" variant="standard" />
                <br />
                <TextField name='email' onChange={handleChange} value={input.email || ""} type="email" id="standard-basic" label="Email" variant="standard" />
                <br />
                <TextField name='age' onChange={handleChange} value={input.age || ""} type="number" id="standard-basic" label="Age" variant="standard" />
                <br /> <br />
                <Button onClick={handleEdit} variant='contained' color='primary'>Update</Button> <br />
            </Box>

            <Button onClick={() => navigate('/')} variant='contained' color='secondary'>Cancel</Button>
        </div>
    )
}

export default EditStaff