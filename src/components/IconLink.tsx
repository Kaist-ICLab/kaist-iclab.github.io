
import { Icon } from '@iconify/react';
import Link from "@/components/Link";

const meta: { [key: string]: any } = {
    "github": {
        "name": "mdi:github",
        "alt": "Github",
    },
    "google_scholar": {
        "name": "academicons:google-scholar",
        "alt": "Google Scholar",
    },
    "homepage": {
        "name": "ic:baseline-home",
        "alt": "Homepage",
    }
}

export const metas = Object.keys(meta);

const IconLink: React.FC<{
    name: string;
    href: string;
}> = ({ name, href }) => {
    const icon = meta[name] ?? { name: "mdi:unknown", alt: "unknown" };
    return <Link href={href} className='relative group'>
        <span className="sr-only">{icon.alt}</span>
        <Icon icon={icon.name} className="w-8 h-8 hover:text-blue-600 text-gray-400" />
        <div className="text-nowrap absolute bg-gray-900 text-white p-2 rounded-lg transition-opacity duration-300 z-50 text-xs invisible group-hover:visible">
            {icon.alt}
        </div>
    </Link>
}




export default IconLink;