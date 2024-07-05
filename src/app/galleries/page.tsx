"use client"
import galleries from "@/data/galleries"

const Galleries: React.FC = () => {

    return (<div className="not-format mx-auto max-w-screen-xl">
        <div className="flex flex-wrap">
            {Array.from({ length: 4 }).map((_, idx) => (
                <div key={idx} className="flex flex-col w-full lg:max-w-1/2 px-2">
                    {galleries.filter((_, i) => i % 2 === idx).map((gallery, jdx) => (
                        <div key={jdx} className="mt-2">
                            <img className="h-auto w-full rounded-lg" src={gallery.path} alt={gallery.name} />
                            <p className="text-center text-sm mb-1">{gallery.name}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    </div>)
}
export default Galleries;