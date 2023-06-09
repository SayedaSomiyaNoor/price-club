import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const[open,setOpen]=useState(false);
    const routes=[
        {id:1, name:'Home', path:'/home'},
        {id:2, name:'Products', path:'/home'},
        {id:3, name:'Orders', path:'/Orders'},
        {id:4, name:'Contact', path:'/Contact'},
        {id:5, name:'About', path:'/About'},
    ]
    return( 
        <div>
            <nav className= 'bg-purple-200 w-full'>
                <div onClick={() => setOpen(!open)} class="h-6 w-6 md:hidden">
                {
                    open? <XMarkIcon/> : <Bars3Icon />

                }
                </div>
                
                <ul className={`bg-purple-200 w-full md:flex justify-center absolute md:static duration-500 ease-in ${open ? 'top-6' : 'top-[-120px]'}`} >
                    {
                        routes.map(route => <Link key={route.id} route={route}></Link>)
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;