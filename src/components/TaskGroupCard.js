export default function TaskGroupCard({ title = "-", taskCount = 0, percentage, color = "0,0,255", icon: Icon }) {



    return (
        <div className="shadow-xl flex flex-row justify-between items-center p-4 rounded-2xl my-4 border border-gray-100">
            <div className="flex flex-row gap-2">
                <div className={`rounded-xl w-12 h-12 flex items-center justify-center`} style={{ backgroundColor: `rgba(${color},0.2)` }}>
                    {Icon ? (
                        <Icon className="w-6 h-6" style={{ color: `rgba(${color},1)`, strokeWidth: 1.5 }} />
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={`rgba(${color},1)`} className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                        </svg>
                    )}
                </div>
                <div>
                    <h3>{title}</h3>
                    <div className="text-sm text-gray-500">{taskCount > 0 ? `${taskCount} tasks` : 'No tasks'} </div>
                </div>
            </div>
            <div>{percentage ? `${percentage}%` : ''}</div>
        </div>
    )
}