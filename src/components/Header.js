import React from 'react'

const Header = () => {
    return (
        <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10">
            <div className="flex justify-between w-8/12 mx-auto">
                <div className="text-2xl font-semibold font-mono">
                    Art Gallery
                </div>
                <div className="font-mono text-lg">
                    <a className="mr-12 hover:text-yellow-400 hover:underline">Art</a>
                    <a className="mr-12 hover:text-yellow-400 hover:underline">Design</a>
                    <a className="mr-12 hover:text-yellow-400 hover:underline">Print</a>
                    <a className="mr-12 hover:text-yellow-400 hover:underline">Discover</a>
                    <a className="mr-12 hover:text-yellow-400 hover:underline">Collections</a>
                    <a className="hover:text-yellow-400 hover:underline">Art Consultancy</a>
                </div>
            </div>
        </div>
    )
}

export default Header
