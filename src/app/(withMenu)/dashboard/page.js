import Image from "next/image"
import TaskGroupCard from "@/components/TaskGroupCard"

export default function Dashboard() {

    //fetch data
    const res = [
        {
            title: "Design System",
            taskCount: 24,
            percentage: 80,
            color: "255, 107, 107",
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />


        },
        {
            title: "Web Development",
            taskCount: 45,
            percentage: 60,
            color: "72, 219, 251",
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        },
        {
            title: "Marketing",
            taskCount: 12,
            percentage: 30,
            color: "255, 159, 67",
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38 4.87 4.87 0 0 1-5-4.86 6 6 0 0 1 7.39-5.84 8 8 0 0 0 5.84-5.82 8 8 0 0 1-2.39 9.14z" />
        },
        {
            title: "Maintenance",
            taskCount: 8,
            percentage: 100,
            color: "29, 209, 161",
            icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        }
    ]



    return (
        <div className="p-4">
            {/* PROFILE BAR */}
            <div className="flex flex-row justify-between">
                <div className="flex flex-row items-center gap-3">
                    <Image src="/profile-mock.png" width="48" height="48" alt="profile" />
                    <div>
                        <div className="text-sm">Hello!</div>
                        <div className="font-bold">Livia Vaccaro</div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>
                </div>
            </div>
            {/* TASK GROUP */}
            <h2 className="text-2xl font-bold mt-6">Task Groups</h2>

            {res.map((r) =>
                <TaskGroupCard
                    key={`item-${r.title}`}
                    title={r.title}
                    taskCount={r.taskCount}
                    percentage={r.percentage}
                    icon={r.icon}
                    color={r.color}
                />)
            }


        </div>
    )
}