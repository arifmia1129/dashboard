import React from 'react';
import { SiCircle } from 'react-icons/si';
import { MdOutlineEventNote } from 'react-icons/md';
import { RiTeamFill } from 'react-icons/ri';
import { DiGoogleAnalytics } from 'react-icons/di';
import { BsFileEarmarkSpreadsheet } from 'react-icons/bs';

const LeftSide = () => {
    return (
        <aside class="w-64 h-screen mt-10" aria-label="Sidebar">
            <div class="overflow-y-auto py-4 px-3 rounded ">
                <ul class="space-y-10 text-center text-primary">
                    <li>

                        <SiCircle className="text-2xl mx-auto" />
                    </li>

                    <li >
                        <MdOutlineEventNote className="text-2xl mx-auto" />
                        <p>Event</p>

                    </li>
                    <li>
                        <RiTeamFill className="text-2xl mx-auto" />
                        <p>Team</p>
                    </li>
                    <li>
                        <DiGoogleAnalytics className="text-2xl mx-auto" />
                        <p>Analytics</p>
                    </li>
                    <li>
                        <BsFileEarmarkSpreadsheet className="text-2xl mx-auto" />
                        <p>Result</p>
                    </li>

                </ul>
            </div>
        </aside >
    );
};

export default LeftSide;