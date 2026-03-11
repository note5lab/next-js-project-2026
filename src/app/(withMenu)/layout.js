import Link from "next/link"
export default function WithMenuLayout({ children }) {
    return (
        <>
            {children}
            <div className="fixed w-full bg-black bottom-0 text-white flex gap-4 justify-center p-8">
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/task">Task</Link>
            </div>
        </>
    )
}