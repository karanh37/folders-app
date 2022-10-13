import { Box, AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

interface Props {

}

const AppBarPanel = (props: Props) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        File explorer
                    </Typography>
                    {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default AppBarPanel
