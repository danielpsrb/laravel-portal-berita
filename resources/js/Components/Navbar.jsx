import React from 'react'
import { Link } from '@inertiajs/react'

const Navbar = ({ user }) => {
    console.log('isUser?', user)
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl text-black">FakeNews</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://cdn-icons-png.flaticon.com/128/1144/1144811.png" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        {!user ?
                        <>
                            <li className='text-black'><Link href={route('login')} as="button">Login</Link></li>
                            <li className='text-black'><Link href={route('register')} as="button">Register</Link></li>
                        </>
                        : 
                        <>
                            <li className='text-black'>
                                <Link href={route('dashboard')} as="button" className="justify-between">
                                    Dashboard
                                    <span className="badge">New</span>
                                </Link>
                            </li>
                            <li className='text-black'><Link>Settings</Link></li>
                            <li className='text-black'><Link href={route('logout')} method='POST' as="button">Logout</Link></li>
                        </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar