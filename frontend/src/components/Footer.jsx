import React from 'react'

export default function Footer() {
  return (
    <>
    

<footer className="bg-white  shadow dark:bg-gray-900 ">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="https://www.business2community.com/wp-content/uploads/2015/03/Identity-Question-Mark5.jpg5.jpg" 
                className="h-16 w-16 rounded-full" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap phone:text-sm dark:text-white">Portfolio.com</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center 
        dark:text-gray-400">© 2023 
        <a href="https://flowbite.com/" className="hover:underline"> Portfolio™</a>. All Rights Reserved.</span>
    </div>
</footer>


      
    </>
  )
}
