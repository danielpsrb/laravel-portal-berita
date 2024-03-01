import React from 'react'
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import NewsList from '@/Components/Homepage/NewsList';
import Pagination from '@/Components/Homepage/Pagination';

export default function Homepage(props) {
    console.log('props: ', props)
    return (
        <div className='min-h-screen bg-slate-500 text-white text-2xl'>
            <Head title={props.title} />   
            <Navbar />         
            <div className='flex justify-center items-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch gap-4 p-4'>
                <NewsList news={props.news.data} />
            </div>
            <div className='flex items-center justify-center'>
                <Pagination />
            </div>
        </div>
    )
}
