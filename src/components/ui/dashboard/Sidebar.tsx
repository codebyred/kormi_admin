import { menuItems } from "@/lib/constants"
import Link from "next/link"

export const Sidebar = ()=>{

    return (
    <aside className="lg:w-[240px] sticky bg-slate-50">
        <ul className={`list-none`}>
            {menuItems.map((item) => (
            <li key={item.title} className="mt-2 mb-2 hover:bg-slate-100 p-2">
                <Link className="block" href={item.path}>{item.title}</Link>
            </li>
            ))}
        </ul>
    </aside>
    )

}