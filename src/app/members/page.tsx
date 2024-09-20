import Member from "@/components/Member";
import members from "@data/members";
import { memberRoles } from "@/types/member";

const Members: React.FC = () => {
    return (
        <div className="max-w-screen-xl w-full m-auto flex flex-col items-center md:items-start">
            <h2>Members</h2>
            <div className="pt-8 flex flex-col gap-4">
                {
                    memberRoles.map((role) => {
                        const matched = Object.values(members).filter((member) => member.role === role)
                        if (matched.length === 0) return null
                        return <div key={role} className="w-full flex flex-col items-center md:items-start mb-20" >
                            <h3>{role ==="Professor"? "Director": role}</h3>
                            <div className={"pt-4 flex flex-col w-full " + (role === "Alumni"? "pt-0 gap-4":"gap-12")}>
                                {matched.map((member) => <Member key={member.name} {...member} />)}
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default Members;