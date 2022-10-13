import React, { Suspense } from 'react'
import Dashboard from '../components/Dashboard.component'
import { Route, Routes } from "react-router-dom";
import { CircularProgress } from '@mui/material';

interface Props {

}

const AppRouter = (props: Props) => {
    return (
        <Suspense fallback={<CircularProgress color="primary" />}>
            <Routes>
                <Route
                    path="/"
                    element={<Dashboard />}
                />
                <Route
                    path="/*"
                    element={<Dashboard />}
                />
            </Routes>
        </Suspense>
    )
}

export default AppRouter
