"use client"
import Member, { MemberRole } from "@/components/Member";
import members from "@/data/members";

const Members: React.FC = () => {
    const positions: MemberRole[] = [
        "Professor",
        "Post Doctoral Researcher",
        "Ph.D. Student",
        "M.S. Student",
        "Alumni"
    ]
    return (
        <div className="max-w-screen-xl w-full m-auto flex flex-col gap-32">
            {
                positions.map((role) => {
                    const matched = Object.values(members).filter((member) => member.role === role)
                    if (matched.length === 0) return null
                    return <div key={role} className="w-full flex flex-col items-center sm:items-start gap-0">
                        <h3>{role}</h3>
                        <div className="w-full">
                            {matched.map((member) => <Member key={member.name} {...member} />)}
                        </div>
                    </div>
                })
            }
        </div>
    );
}

export default Members;