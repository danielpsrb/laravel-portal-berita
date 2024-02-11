import React from 'react'
import { Link, Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import NewsList from '@/Components/Homepage/NewsList';

export default function Homepage(props) {
    console.log('data = ', props.news)
    return (
        <div className='min-h-screen bg-slate-500 text-white text-2xl'>
            <Head title={props.title} />   
            <Navbar />         
            <NewsList news={props.news} />
        </div>
    )
}
