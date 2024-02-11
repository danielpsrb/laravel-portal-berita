import React from 'react'
import { Link, Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';

export default function Homepage(props) {
    console.log('data = ', props.news)
    return (
        <div className='min-h-screen bg-slate-500 text-white text-2xl'>
            <Head title={props.title} />   
            <Navbar />         
            <div>
                {props.news ? props.news.map((data, i) => {
                    return (
                        <div key={i} className='p-4 m-2 bg-white text-black shadow-md rounded-md'>
                            <p className='text-2xl'>{data.title}</p>
                            <p>{data.description}</p>
                            <i className='text-sm'>{data.category}</i>
                            <i className='text-sm'>{data.author}</i>
                        </div>
                    )
                }) : <p>Saat ini belum ada Berita Tersedia</p>}
            </div>
        </div>
    )
}
