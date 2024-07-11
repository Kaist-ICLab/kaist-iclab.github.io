"use client"
import Logo from "./Logo"
import HCIKAIST from "@/icons/HCI@KAIST.svg";
import KAISTSOC from "@/icons/KAIST SoC.svg";


const Footer: React.FC = () => {
    return (
        <footer className="bg-white rounded-lg dark:bg-gray-900 border m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 flex-wrap">
                    <Logo />
                    <div className="flex flex-wrap flex-row justify-center items-center gap-6">
                        <KAISTSOC height="40" />
                        <HCIKAIST height="40" />
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="text-gray-500 text-sm dark:text-gray-400">Directed by Uichin Lee</div>
                <div className="text-gray-500 text-sm dark:text-gray-400">N1 721, KAIST 291 Daehak-ro, Yuseong-gu, Daejeon 34141, Repulbic of Korea</div>
                <span className="block text-sm text-gray-500 dark:text-gray-400">© 2024 Interactive Computing Lab. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer