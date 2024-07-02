const Logo: React.FC = () => {
    return (
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-10" alt="Flowbite Logo" />
            <div className="flex flex-col items-start">
                <span className="text-lg tracking-tight leading-5 font-semibold whitespace-nowrap dark:text-white">Interactive Computing</span>
                <span className="text-lg tracking-tight leading-5 font-semibold whitespace-nowrap dark:text-white">Laboratory</span>
            </div>
        </a>
    )
}

export default Logo