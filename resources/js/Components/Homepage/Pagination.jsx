import React from 'react'
import { Link } from '@inertiajs/react';

const Pagination = ({ meta }) => {

    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const curent = meta.current_page;

    return (
        <div>
            <div className="join">
                {prev && <Link href={prev} className="btn btn-outline">«</Link>}
                <button className="btn btn-outline">{curent}</button>
                {next && <Link href={next} className="btn btn-outline">»</Link>}
            </div>
        </div>
    )
}

export default Pagination