import galleries from "@data/galleries"
import Image from "next/image"

const GalleryImage: React.FC<{ path: string, name: string }> = ({ path, name }) => (
    <div className="mt-2">
        <Image
            className="rounded-lg w-full object-contain"
            width={400}
            height={400}
            src={path}
            alt={name}
            loading="lazy"
        />
        <p className="text-center text-sm mb-1">{name}</p>
    </div>
)

const Galleries: React.FC = () => (
    <div className="w-full not-format pt-12 m-auto max-w-screen-xl flex flex-wrap">
        {Array.from({ length: 2 }).map((_, idx) => (
            <div key={idx} className="flex flex-col w-full lg:max-w-1/2 px-2">
                {galleries.filter((_, i) => i % 2 === idx).map((gallery, jdx) => (
                    <GalleryImage key={jdx} path={gallery.path} name={gallery.name} />
                ))}
            </div>
        ))
        }
    </div>
)

export default Galleries;