'use client'
import { useState, useEffect } from 'react';

const TopButton = () => {
    const [showButton, setShowButton] = useState(false);

    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
        if (window.scrollY > 100) { // 스크롤이 100px 이상일 때 버튼 표시
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        // 스크롤 이벤트 리스너 등록
        window.addEventListener('scroll', handleScroll);

        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if(!showButton) return <></>

    return (
        <button
            onClick={scrollToTop}
            className={[
                'z-50 fixed bottom-5 right-5',
                'bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
                'font-medium rounded-full text-sm p-4 text-center inline-flex items-center',
                'hidden xl:block'
            ].join(' ')}
        >
            <svg className="w-5 h-5  text-white -rotate-90" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
        </button>
    );
};

export default TopButton;
