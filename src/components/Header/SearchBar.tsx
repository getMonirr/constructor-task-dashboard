import Image from 'next/image';
import React from 'react';
import search from '@/assets/headers/search.svg';
import arrow from '@/assets/headers/rightArrow.svg';

const SearchBar = () => {
    return (
        <div className='relative'>
            <Image src={search.src} alt='search' width={30} height={30} className='absolute left-4 top-[10px]'/>
        <input type="text" placeholder="Search Products, Orders and Clients" className="input rounded-full w-[430px] py-[10px] pl-16 px-[20px] placeholder:text-consGrayBlue80 placeholder:font-bold placeholder:text-xs"/>
        <Image src={arrow.src} alt='search' width={30} height={30} className='absolute right-4 top-2'/>
        </div>
    );
};

export default SearchBar;