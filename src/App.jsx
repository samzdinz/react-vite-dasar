import React from 'react';
import NavBar from './components/NavBar';
import Router from './components/Router';

export default function App() {
    return (
        <>
            <NavBar />
            <main className='min-h-screen pt-8'>
                <Router />
            </main>
        </>
    );
}
