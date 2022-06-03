import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile p-10">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center bg-base-100 ">

                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <div className='top-0 relative h-screen mr-auto'>
                    <div className='flex'>
                        <p className='py-5 text-2xl text-primary font-bold border-b-2 w-[50vw] flex justify-between'>
                            <span>Virtual/Hybrid Center</span>
                            <AiOutlineClose className='text-2xl' />
                        </p>
                    </div>
                </div>
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-fit pr-5 bg-base-100 text-base-content ">
                    <li className='border-b-2 pb-5'>Event Content</li>
                    <li><a>Basics</a></li>
                    <li><a>Branding</a></li>
                    <li><a>Agenda</a></li>
                    <li><a>Virtual/Hybrid Center</a></li>
                    <li><a>Speaker Center</a></li>
                    <li><a>Sponsor Center</a></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;