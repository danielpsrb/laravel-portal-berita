import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 text-gray-900">
                        <input type="text" placeholder="Title" className="m-2 input input-bordered input-primary w-full" />
                        <input type="text" placeholder="Description" className="m-2 input input-bordered input-primary w-full" />
                        <input type="text" placeholder="Category" className="m-2 input input-bordered input-primary w-full" />
                        <button className="btn btn-primary m-2">Submit</button>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
