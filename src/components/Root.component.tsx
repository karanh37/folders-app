import React from 'react'
import { Folder } from '../model/Folder';
import Directory from './Directory.component';
import { Button, Grid } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

interface Props {
    items: Folder[]
}

const Root = (props: Props) => {
    const navigate = useNavigate()
    const location = useLocation()

    const handleClick = (item: Folder) => {
        console.log(location)
        const path = location.pathname.slice(1)
        navigate(`${path}/${item.name}`)
    }

    return (
        <Grid container spacing={2}>
            {
                props.items.map((item, i) =>
                <Grid onClick={()=>handleClick(item)} item md={2} sm={3} key={i}>
                    <Directory {...item} />
                </Grid>)
            }
            {props.items.length === 0 && <Grid item>
                <div>
                No item in this folder</div>
                <Button variant="contained" onClick={() => navigate(-1)}>Go Back</Button></Grid>}
        </Grid>
    )
}

export default Root
