"use client"
import Member from "@/components/Member";
import members from "@data/members";
import { memberRoles } from "@/types/member";

const Members: React.FC = () => {
    return (
        <div className="max-w-screen-xl w-full m-auto flex flex-col gap-12 items-center">
            <h2>Members</h2>
            {
                memberRoles.map((role) => {
                    const matched = Object.values(members).filter((member) => member.role === role)
                    if (matched.length === 0) return null
                    return <div key={role} className="mt-20 w-full flex flex-col items-center sm:items-start gap-0">
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