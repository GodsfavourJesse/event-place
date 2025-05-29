import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';

export default function BookingDateSelector({ value, onChange }) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
            label="Select a date"
            value={value}
            onChange={onChange}
            minDate={dayjs()} // This starts from the current day
            textField={(params) => <TextField {...params} fullWidth />}
        />
        </LocalizationProvider>
    );
}
