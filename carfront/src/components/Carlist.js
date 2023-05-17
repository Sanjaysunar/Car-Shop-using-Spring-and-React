import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../constants";
import { DataGrid } from "@mui/x-data-grid";

function Carlist() {
    const [cars, setCars] = useState([]);
    
    useEffect(() => {
        fetch(SERVER_URL + "api/cars")
        .then(response => response.json())
        .then(data => setCars(data._embedded.cars))
        .catch(err => console.error(err));
    }, []);

    const columns = [
        {field: 'brand', headerName: 'Brand', width: 200},
        {field: 'model', headerName: 'Model', width: 200},
        {field: 'color', headerName: 'Color', width: 200},
        {field: 'year', headerName: 'Year', width: 150},
        {field: 'price', headerName: 'Price', width: 150}
    ];

    return(
        <div style={{ height: 500, width: '100%' }}>
            <DataGrid
                rows={cars}
                columns={columns}
                getRowId={row => row._links.self.href}/>
                </div>
            );
}

export default Carlist;