import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from '@heroicons/react/24/solid'

export default function Home() {
  return (
    <div className="text-center flex flex-col items-center">
      <Image src="/home-hero-img.png"
        width={300}
        height={400}
        alt="รูป hero"
        className="w-full absolute z-[-1]"
      />
      <div className="flex flex-col items-center absolute bottom-5" >
        <h1 className="text-3xl font-bold">Task Management &<br /> To-Do List</h1>
        <p className="max-w-[300px] text-gray-500 text-sm mt-4">
          This productive tool is designed to help
          you better manage your task
          project-wise conveniently!
        </p>
        <Link href="/dashboard" className="mt-6 bg-violet-600 text-white px-4 py-2 rounded-xl min-w-[80vw]">
          <button className="text-center relative w-full">
            <span>Let’s Start</span>
            <ArrowRightIcon className="w-5 h-full absolute right-0 top-0" />
          </button>
        </Link>

      </div>
    </div>
  )
}