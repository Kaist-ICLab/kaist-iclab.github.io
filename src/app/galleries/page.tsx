import galleries from "@data/galleries"
import Image from "next/image"

const Galleries: React.FC = () => {
    return (<div className=" pt-8 pb-16 lg:pt-16 lg:pb-24 not-format mx-auto max-w-screen-xl">
        <div className="flex flex-wrap">
            {Array.from({ length: 4 }).map((_, idx) => (
                <div key={idx} className="flex flex-col w-full lg:max-w-1/2 px-2">
                    {galleries.filter((_, i) => i % 2 === idx).map((gallery, jdx) => (
                        <div key={jdx} className="mt-2">
                            <Image
                                    className="rounded-lg w-full"
                                    width = {400}
                                    height={400}
                                    src={"/" + gallery.path}
                                    alt={gallery.name}
                                    objectFit="contain"
                                />
                            <p className="text-center text-sm mb-1">{gallery.name}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    </div>)
}
export default Galleries;