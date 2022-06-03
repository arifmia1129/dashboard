import React from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { FiSmartphone } from 'react-icons/fi';
import { AiOutlineDesktop } from 'react-icons/ai';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center mt-5'>
            <div className='text-2xl font-bold flex justify-start items-center ml-5'>
                <BiMenuAltLeft />
                <h3>Admin Dashboard</h3>
            </div>
            <div className='flex items-center border w-36 px-2 rounded-xl'>
                <div>
                    <p>Preview on:</p>
                </div>
                <div className='flex justify-start ml-2'>
                    <FiSmartphone className='mr-1' />
                    <AiOutlineDesktop />
                </div>

            </div>
        </div>
    );
};

export default Navbar;