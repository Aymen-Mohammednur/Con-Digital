import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addStaff } from '../state/actions';

const AddStaff: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState("");

    const [input, setInput] = useState({
        fullName: "",
        email: "",
        age: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleAdd = () => {

        if (!input.fullName || !input.age || !input.email) {
            // alert("Please insert all inputs.")
            setError("Please insert all inputs")
        } else {
            dispatch(addStaff(input))
            navigate('/')
            setError("")
            setInput({
                fullName: "",
                email: "",
                age: "",
            })
        }
    };

    return (
        <div style={{ marginTop: '100px' }}>
            <h2>Add Staff</h2>
            {error && <h3 style={{ color: 'red' }}>{error}</h3>}
            <Box
                style={{ marginTop: '20px' }}
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '45ch' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleAdd}
            >
                <TextField name='fullName' value={input.fullName} onChange={handleChange} type="text" id="standard-basic" label="Full Name" variant="standard" />
                <br />
                <TextField name='email' onChange={handleChange} value={input.email} type="email" id="standard-basic" label="Email" variant="standard" />
                <br />
                <TextField name='age' onChange={handleChange} value={input.age} type="number" id="standard-basic" label="Age" variant="standard" />
                <br /> <br />
                <Button onClick={handleAdd} variant='contained' color='primary'>Add Staff</Button> <br />
            </Box>

            <Button onClick={() => navigate('/')} variant='contained' color='secondary'>Cancel</Button>
        </div>
    )
}

export default AddStaff