import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import tcdclogo from '../portal/images/tcdc.png';
import '../portal/tcdc/tcdc.css';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-white-100">
            <div>
                {/* <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link> */}
                <div className='disp'><img src={tcdclogo} className='logo'></img></div>

            </div>
            <div className='head'>TCDC AJIRA MANAGEMENT SYSTEM</div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bgColor shadow-md overflow-hidden sm:rounded-lg ">
                {children}
            </div>
        </div>
    );
}
