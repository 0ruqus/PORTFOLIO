import Link from "next/link"
import { Menu } from 'lucide-react'

import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <nav className="hidden md:flex items-center space-x-8">
            <Link className="text-gray-600 hover:text-gray-900" href="#">
              work
            </Link>
            <Link className="text-gray-600 hover:text-gray-900" href="#">
              process
            </Link>
            <Link className="text-gray-600 hover:text-gray-900" href="#">
              coaching
            </Link>
            <Link className="text-gray-600 hover:text-gray-900" href="#">
              bio / contact
            </Link>
          </nav>
          <Button variant="ghost" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-[#ff0099] rounded" />
            <span className="font-bold text-[#ff0099]">DAN Z. PHILLIPS</span>
          </div>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <span>menu</span>
            <span>—</span>
            <span className="bg-black text-white px-2 py-1">Selected Works</span>
            <span className="bg-gray-200 px-2 py-1">Portfolio</span>
          </div>
          <h1 className="text-5xl font-bold text-[#ff0099] mb-1">Selected Works</h1>
          <p className="text-xl text-gray-600 leading-[0.875]">
            Exemplifying the effort and creativity of the teams I had the privilege to lead.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-12">
          <div className="w-[700px] p-5 space-y-2">
            <div className="text-[#656565] font-extrabold text-[28px] mb-8 relative pl-6">
              <span className="absolute -top-3 left-0 text-2xl">+</span>APP: STUDIO
            </div>
            <div className="w-full h-[470px] bg-gray-200" />
            <h2 className="text-[#ff0099] text-[24px] font-bold mt-2">CONTACT FLOW TOOL</h2>
            <div className="text-gray-500 text-sm font-bold leading-[1] mb-2">DESIGN DIRECTION</div>
            <p className="text-gray-600 leading-[1.2] text-[12px] font-normal mt-10">
              Messenger Rooms are joinable group video calls that make it easy to spend quality time with friends, loved
              ones and people who share your interests. You can create a room right from Messenger or Facebook, and invite
              anyone to join, even if they don't have a Facebook account.
            </p>
          </div>

          <div className="w-[700px] p-5 space-y-2">
            <div className="text-[#656565] font-extrabold text-[28px] mb-8 relative pl-6">
              <span className="absolute -top-3 left-0 text-2xl">+</span>APP: AGENT
            </div>
            <div className="w-full h-[470px] bg-gray-200" />
            <h2 className="text-[#ff0099] text-[24px] font-bold mt-2">OMNICHANNEL AGENT SOFTWARE</h2>
            <p className="text-gray-600 leading-[1.2] text-[12px] font-normal">
              Highlight progress, gather feedback, and identify design issues early. Showcasing work at any stage—pinned to
              walls, layered on desks, stuck to windows, and spread across floors—fosters collaboration, ongoing dialogue,
              and inspiration.
            </p>
          </div>

          <div className="w-[700px] p-5 space-y-2">
            <div className="text-[#656565] font-extrabold text-[28px] mb-8 relative pl-6">
              <span className="absolute -top-3 left-0 text-2xl">+</span>APP: SUPERVISOR
            </div>
            <div className="w-full h-[470px] bg-gray-200" />
            <h2 className="text-[#ff0099] text-[24px] font-bold mt-2">AI TOOL INFORMED</h2>
            <p className="text-gray-600 leading-[1.2] text-[12px] font-normal">
              Highlight progress, gather feedback, and identify design issues early. Showcasing work at any stage—pinned to
              walls, layered on desks, stuck to windows, and spread across floors—fosters collaboration, ongoing dialogue,
              and inspiration.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}