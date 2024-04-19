import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function Dashboard(props) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = () => {
        const NewsData = { title, description, category };
        Inertia.post('/news', NewsData);
    }

    console.log('auth last: ', props)

    return (
        <AuthenticatedLayout
            user={props.auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 text-gray-900">
                        <input type="text" placeholder="Title" className="m-2 input input-bordered input-primary w-full" onChange={(title) => setTitle(title.target.value)} />
                        <input type="text" placeholder="Description" className="m-2 input input-bordered input-primary w-full" onChange={(description) => setDescription(description.target.value)}  />
                        <input type="text" placeholder="Category" className="m-2 input input-bordered input-primary w-full" onChange={(category) => setCategory(category.target.value)}  />
                        <button className="btn btn-primary m-2" onClick={() => handleSubmit()}>Submit</button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
