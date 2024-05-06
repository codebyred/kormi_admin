import { menuItems } from "@/lib/constants"
import Link from "next/link"

export const Sidebar = ()=>{

    return (
    <aside className="lg:w-[240px] sticky">
        <ul className={`list-none`}>
            {menuItems.map((item) => (
            <li key={item.title}>
                <Link href={item.path}>{item.title}</Link>
            </li>
            ))}
        </ul>
    </aside>
    )

}