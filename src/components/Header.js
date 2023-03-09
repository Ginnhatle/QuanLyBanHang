import React, {useContext} from 'react';
import {SidebarContext} from "../contexts/SidebarContext";
import {BsBag} from "@react-icons/all-files/bs/BsBag";

const Header = () => {
    const {isOpen, setIsOpen} = useContext(SidebarContext)
    return (
        <header className={'bg-pink-200'}>
            <div>Header</div>
            <div className='cursor-pointer flex relative'
                 onClick={()=>setIsOpen(!isOpen)}>
                <BsBag className={'text-2xl'}></BsBag>
            </div>
        </header>
    );
};

export default Header;
