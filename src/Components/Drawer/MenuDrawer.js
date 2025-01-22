// import React from 'react'
// import { Link, NavLink } from 'react-router-dom';
// import logoimg from "../../assets/logoimg.png"
// import { IoClose } from 'react-icons/io5';
// import MainDrawer from './MainDrawer';
// import {  BsCollectionPlay } from 'react-icons/bs';
// import { HiOutlineUserGroup } from 'react-icons/hi';
// import { BiPhoneCall } from 'react-icons/bi';

// function MenuDrawer({ drawerOpen, toggleDrawer}) {
//     const Links =[
//        {
//         name: "Movies",
//         Link: "/movies",
//         icon:BsCollectionPlay
//        },
//        {
//         name: "About Us",
//         Link: "/about-us",
//         icon:HiOutlineUserGroup
//        },
//        {
//         name: "Contact Us",
//         Link: "/contact-us",
//         icon:BiPhoneCall
//        },
//  ];

//  const active = "bg-dry text-subMain";
//  const hover = "hover:text-white hover:bg-dry";
//  const inActive =
//    "rounded sm:gap-10 font-medium text-sm transitions flex gap-6 items-center sm:px-8 px-4 py-4 items-center";

//  const Hover = ({ isActive }) =>
//    isActive ? `${active} ${inActive}` : `${inActive} ${hover}`;
//   return (
//     <MainDrawer drawerOpen={drawerOpen} closeDrawer={toggleDrawer}>
//         <div className='flex flex-col w-full h-full justify-between items-center bg-main text-white rounded'>
//             <div className='w-full flex-btn h-16 px-6 py-4 bg-dry'>
//                <Link onClick={toggleDrawer} to="/" >
//                <img
//                 src={logoimg.png}
//                 alt='logo'
//                 className='w-28 h-28 object-contain'
//                 />
//                </Link>
//                <button
//                onClick={toggleDrawer}
//                type='button'
//                className='transitions w-10 h-10 flex-colo text-base text-subMain bg-white rounded-full hover:bg-subMain'
//                >
//                 <IoClose/>

//                </button>
//             </div>
//             {/* menu drawer */}
//             <div className='w-full overflow-y-scroll flex-grow max-height-full'>
//                 {Link.map((link, index) => (
//                     <NavLink to={link.link} key={index} onClick={toggleDrawer} className={Hover}>
//                         <link.icon className="text-lg"/> {link.name}
//                     </NavLink>
//                 ))}
//             </div>
//         </div>
//     </MainDrawer>
//   )
// }

// export default MenuDrawer;