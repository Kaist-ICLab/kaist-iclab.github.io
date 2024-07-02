"use client"
import Member, { MemberProp, MemberRole } from "@/components/Member";
import { H3 } from "@/components/Typography";
import members from "@/data/members";

export default function Home() {
    const positions = [
        "Director",
        "Post Doctoral Researcher",
        "Ph.D. Student",
        "M.S. Student",
        "Alumni"
    ]
    return (
        <div className="m-auto w-full lg:max-w-screen-lg flex flex-col items-center px-4 py-12 gap-y-32">
            {
                positions.map((role) => {
                    const matched = Object.values(members).filter((member) => member.role === role)
                    if (matched.length === 0) return null
                    return <div key={role} className="w-full flex flex-col items-center sm:items-start gap-0">
                        <H3>{role}</H3>
                        <div className="w-full">
                            {matched.map((member) => <Member key={member.name} {...member} />)}
                        </div>
                    </div>
                })
            }
        </div>
    );
}