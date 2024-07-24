const Logo: React.FC = () => {
    return (
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <svg className="h-10 text-blue-700" viewBox="0 0 40 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.1908 5.80126H37.071C38.6881 5.80126 39.9952 4.5 39.9952 2.90063C39.9952 1.30126 38.6834 0 37.071 0H32.1908C25.1974 0 19.511 5.64038 19.511 12.5773V17.418C19.511 19.9164 20.2695 22.235 21.5432 24.194H12.6798C11.6017 24.194 10.7287 23.3233 10.7287 22.2587V14.9054C13.5814 13.7555 15.6088 10.9826 15.6088 7.74131C15.6088 3.47318 12.1073 0 7.80441 0C3.50149 0 0 3.47318 0 7.74131C0 10.9826 2.02266 13.7555 4.88014 14.9054V22.2587C4.88014 26.5268 8.38163 30 12.6846 30H37.0757C38.6929 30 40 28.6987 40 27.0994C40 25.5 38.6881 24.1987 37.0757 24.1987H32.1956C28.4317 24.1987 25.3643 21.1561 25.3643 17.4227V12.582C25.3643 8.84859 28.4317 5.806 32.1956 5.806L32.1908 5.80126ZM7.79964 9.67666C6.72153 9.67666 5.84854 8.80598 5.84854 7.74131C5.84854 6.67665 6.7263 5.806 7.79964 5.806C8.87299 5.806 9.75075 6.67665 9.75075 7.74131C9.75075 8.80598 8.87299 9.67666 7.79964 9.67666Z" fill="currentColor"/>
            </svg>
            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-10" alt="Flowbite Logo" /> */}
            <div className="flex flex-col items-start">
                <span className="text-lg tracking-tight leading-5 font-semibold whitespace-nowrap dark:text-white">
                    Interactive Computing
                    <br/>
                    Laboratory
                </span>
            </div>
        </a>
    )
}

export default Logo