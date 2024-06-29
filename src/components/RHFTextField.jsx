import React from 'react'
import { TextField } from '@mui/material'
import { Controller } from 'react-hook-form'

const RHFTextField = ({ control, type, name, label }) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <TextField
                    fullWidth
                    type={type}
                    value={field.value}
                    onChange={field.onChange}
                    error={!!error}
                    id="standard-error-helper-text"
                    label={label}
                    helperText={!!error && (error.message || 'Something went wrong')}
                    variant="standard"
                />
            )}
        />
    )
}

export default RHFTextField