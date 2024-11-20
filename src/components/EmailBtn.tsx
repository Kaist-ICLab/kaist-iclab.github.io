"use client"
import { Icon } from "@iconify/react";

const EmailBtn: React.FC<{
    email: string;
}> = ({ email }) => {
    const onClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        const toast = event.currentTarget.lastChild as HTMLElement
        await navigator.clipboard.writeText(email)
        toast?.classList.remove("hidden")
        setTimeout(() => {
            toast?.classList.add("hidden")
        }, 1000)
    }

    const SuccessToast = () => (
        <div className="z-10 flex items-center w-full max-w-xs p-2 mb-4 text-gray-700 bg-green-50 rounded-lg shadow" role="alert">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg">
                <Icon icon="mdi:check-bold" className="w-5 h-5" />
                <span className="sr-only">Check icon</span>
            </div>
            <div className="ms-3 text-sm font-normal">Email Copied!</div>

        </div>
    )

    return <button onClick={(event) => { onClick(event) }} className="relative group">
        <Icon icon="mdi:email" className="w-7 h-7 hover:text-blue-600 text-gray-400" />
        <span className="sr-only">email</span>
        <div className="absolute top-0 left-6 w-44 z-50 hidden">
            <SuccessToast />
        </div>
    </button>
}

export default EmailBtn;