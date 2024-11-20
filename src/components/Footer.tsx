"use client"
import Logo from "./Logo"
import HCIKAIST from "@/icons/HCI@KAIST.svg";
import KAISTSOC from "@/icons/KAIST SoC.svg";


const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 flex-wrap">
                    <Logo />
                    <div className="flex flex-wrap flex-row justify-center items-center gap-6">
                        <div className="p-3 rounded-sm">
                            <KAISTSOC height="40" />
                        </div>
                        <div className="p-3 rounded-sm">
                            <HCIKAIST height="40" />
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="text-gray-500 text-sm">Directed by Uichin Lee</div>
                <div className="text-gray-500 text-sm">N1 721, KAIST 291 Daehak-ro, Yuseong-gu, Daejeon 34141, Repulbic of Korea</div>
                <span className="block text-sm text-gray-500">© 2024 Interactive Computing Lab. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer