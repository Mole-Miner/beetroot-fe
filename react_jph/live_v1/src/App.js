import React from 'react';
import { Outlet, Link } from "react-router-dom";

export default function App() {
    return (
        <>
            <nav>
                <Link to=''>Users</Link>
                <Link to='posts'>Posts</Link>
                <Link to='comments'>Comments</Link>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    );
}
