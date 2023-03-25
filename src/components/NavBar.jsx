import React from 'react';
import Case from '../components/Case';
import NavLink from '../components/NavLink';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className='bg-blue-600 py-2'>
            <Case>
                <div className='flex items-center'>
                    <Link
                        className='mr-2 text-sm font-semibold uppercase text-white'
                        to='/'
                    >
                        React Starter
                    </Link>
                    <NavLink href='/'>Home</NavLink>
                    <NavLink href='/about'>About</NavLink>
                    <NavLink href='/gallery'>Gallery</NavLink>
                </div>
            </Case>
        </div>
    );
}
