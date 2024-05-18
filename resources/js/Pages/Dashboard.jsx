import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Form from '../portal/tcdc/Form';
import Header from '@/portal/tcdc/Header';
import Dashbord from '@/portal/tcdc/Dashbord';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight"><Header /></h2>}
        >
            {/* <Head title="Dashboard" /> */}

            <div className="">{<Dashbord />}</div>
            {/* <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">{<Home />}</div>
                    </div>
                </div>
            </div> */}
        </AuthenticatedLayout>
    );
}
