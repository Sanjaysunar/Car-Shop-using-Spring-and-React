import React, { useState} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

function AddCar(props) {
    const [open, setOpen] = useState(false);
    const [car, setCar] = useState({
        brand: '',
        model: '',
        color: '',
        year: '',
        fuel: '',
        price: ''
    });

    //Open the modal form
    const handleClickOpen = () => {
        setOpen(true);
    };

    //Close the modal form
    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setCar({...car, [event.target.name] :
            event.target.value});
    }

    // Save car and close modal form
    const handleSave = () => {
        props.addCar(car);
        handleClose();
    }

    return(
        <div>
            <Button  variant="contained" 
                onClick={handleClickOpen}>New Car</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Car</DialogTitle>
                <DialogContent>
                    <input placeholder='Brand' name='brand'
                    value={car.brand} onChange={handleChange}/><br/>
                    <input placeholder='Model' name='model'
                    value={car.model} onChange={handleChange}/><br/>
                    <input placeholder='Color' name='color'
                    value={car.color} onChange={handleChange}/><br/>
                    <input placeholder='Year' name='year'
                    value={car.year} onChange={handleChange}/><br/> 
                    <input placeholder='Price' name='price'
                    value={car.price} onChange={handleChange}/><br/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AddCar;