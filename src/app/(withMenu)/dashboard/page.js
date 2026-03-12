import Image from "next/image"
import TaskGroupCard from "@/components/TaskGroupCard"
import { SwatchIcon, CodeBracketIcon, MegaphoneIcon, WrenchScrewdriverIcon, BellIcon } from "@heroicons/react/24/outline"

export default function Dashboard() {

    //Mock fetched data
    const res = [
        {
            title: "Design System",
            taskCount: 24,
            percentage: 80,
            color: "255, 107, 107",
            icon: SwatchIcon
        },
        {
            title: "Web Development",
            taskCount: 45,
            percentage: 60,
            color: "72, 219, 251",
            icon: CodeBracketIcon
        },
        {
            title: "Marketing",
            taskCount: 12,
            percentage: 30,
            color: "255, 159, 67",
            icon: MegaphoneIcon
        },
        {
            title: "Maintenance",
            taskCount: 8,
            percentage: 100,
            color: "29, 209, 161",
            icon: WrenchScrewdriverIcon
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
                    <BellIcon className="w-6 h-6" />
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