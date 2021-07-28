import React, { ReactElement } from 'react';

import { FaBolt, FaGithub, FaTimes } from 'react-icons/fa';

const FloatingActionButton = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    React.useEffect(() => {
        setIcon(
            isOpen ?
                <FaTimes
                    size={15}
                    color={`red`}
                />
                :
                <FaBolt
                    size={15}
                />
        )
    }, [isOpen]);

    const [icon, setIcon] = React.useState(
        <FaBolt
            size={15}
        />
    );

    const links: Array<[string, string, ReactElement]> = [
        ['GitHub', 'https://github.com/Sonar-Programming-Language', <FaGithub size={18} color={'darkgreen'} />],
    ];

    const contentLinkItem = (title: string, link: string, icon: React.ReactElement) => <div className={`mt-1 flex flex-row`}>{icon}<a className={`no-underline flex flex-row items-center`} href={link} target={`_blank`}><span className={`ml-2 xxs:text-lg sm:text-sm xss:text-yellow-600 sm:text-black font-bold hover:text-yellow-600`}>{title}</span></a></div>

    return (
        <div className={`absolute bottom-4 right-2`}>
            <div
                className={`absolute ${!isOpen && 'hidden'} z-10 xxs:bottom-14 sm:bottom-12 xxs:bg-gray-300 sm:bg-gray-200 xxs:right-2 sm:right-1 xxs:border-2 sm:border xxs:p-3 sm:p-2 xxs:rounded-md sm:rounded-none xss:border-gray-500 sm:border-gray-400`}
                style={{ minWidth: 200 }}>
                {
                    links.map(link => contentLinkItem(link[0], link[1], link[2]))
                }
            </div>
            <button
                className={`btn-no-outline rounded-full xxs:px-3 xxs:py-3 hover:bg-gray-300 sm:px-2 sm:py-2 bg-white border-2 border-black`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {icon}
            </button>
        </div>
    );
}

export default FloatingActionButton;