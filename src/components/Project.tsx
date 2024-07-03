"use client"

interface ProjectProp {
    slug?: string,
    title: string,
    image?: string,
    content?: string,
    [key: string]: any
}

const Project: React.FC<ProjectProp> = () => {
    return (
        <div className="gap-8 mx-auto max-w-screen-xl flex flex-col lg:flex-row">
            <img className="object-contain lg:w-2/5 lg:h-full rounded-lg shadow" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/fundraising-1.png" alt="" />
            <div>
                <div>
                    <h3 className="text-lg font-bold leading-5 text-gray-900 dark:text-white lg:mt-3">
                    Data-Driven Digital Therapeutics (DTx) Analytics Platform Research
                    </h3>
                    <div className="mt-3 p-0.1">
                        <a href="#" key="key" className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                            digital therapeutics
                        </a>
                    </div>
                    <p className="text-base font-normal text-gray-500 eCx_6PNzncAD5yo7Qcic mt-3 line-clamp-3">
                    Digital therapeutics (DTx), unlike traditional treatments such as pills, uses software installed in smartphones or wearable devices as software as a medical device (SaMD) to cure diseases and improve health conditions, which is a major departure from existing wellness products (e.g., Fitbits). As with traditional therapeutics, DTx also requires clinical validation of efficacy through systematic c...
                    </p>                    
                </div>
                
                <div className="text-base font-medium leading-6 mt-3">
                    <a className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400" aria-label="Read more: &quot;Release of Tailwind Nextjs Starter Blog v2.0&quot;" href="/blog/release-of-tailwind-nextjs-starter-blog-v2.0">
                        Read more →
                    </a>
                </div>
            </div>
        </div>
    )
}

export type { ProjectProp };
export default Project