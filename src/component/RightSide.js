import React from 'react';
import { MdOutlineCircleNotifications } from 'react-icons/md';
import { TiMessages } from 'react-icons/ti';
import { RiSettings4Line } from 'react-icons/ri';

const RightSide = () => {
    return (
        <aside class="w-64 mt-10" aria-label="Sidebar">
            <div class="overflow-y-auto py-4 px-3  rounded ">
                <ul class="space-y-10">
                    <li>
                        <div class="avatar flex justify-center">
                            <div class="w-8 rounded">
                                <img src="https://api.lorem.space/image/face?hash=92048" alt='' />
                            </div>
                        </div>
                    </li>
                    <MdOutlineCircleNotifications className='mx-auto text-2xl' />
                    <li>
                        <TiMessages className='mx-auto text-2xl' />
                    </li>
                    <li>
                        <RiSettings4Line className='mx-auto text-2xl' />
                    </li>

                </ul>
            </div>
        </aside>
    );
};

export default RightSide;