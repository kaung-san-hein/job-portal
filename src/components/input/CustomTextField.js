import React from 'react'
import TextField from '@mui/material/TextField'

const CustomTextField = ({ label, value, onChange, ...props }) => {
    return (

        <TextField
            type='text'
            label={label}
            color="info"
            size="small"
            margin="normal"
            fullWidth
            value={value}
            onChange={onChange}
            sx={{
                fieldset: { borderColor: "var(--primary-color)" },
            }}
            {...props}
        />
    )
}

export default CustomTextField