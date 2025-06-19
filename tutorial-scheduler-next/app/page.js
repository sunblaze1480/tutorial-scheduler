"use client"

import TutorialsList from "./components/TutorialsList";
import TutorialsForm from "./components/TutorialsForm";
import { Analytics } from "@vercel/analytics/next";


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8 p-6">
      <div className="absolute top-4 left-4 rounded-full flex items-center gap-2 bg-white p-2 shadow-sm border border-gray-200">        
        <span className="text-xs text-gray-500">Theme:</span>
        <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-gray-300 hover:border-primary transition-all">
          <input type='color' className='absolute inset-0 h-full w-full cursor-pointer opacity-100' value="#0052de" onChange={(e) => document.documentElement.style.setProperty("--bg-color", e.target.value)}></input>
        </div>
      </div>
      <header className="text-center pb-8">
          <div className="inline-block p-2 rounded-lg">
            <img src='/logo.png' alt="Logo" className="h-20" />
          </div>
      </header>
      <div className="space-y-10 flex flex-col md:flex-row gap-6">
        
        <div className="w-full md:w-1/3">
          <TutorialsForm />
        </div>
        <div className="w-full md:w-2/3">
          <TutorialsList />
        </div>
      </div>

      <footer className="text-center text-xs text-gray-500 pt-4 mt-8 border-t border-gray-200">
            <p>© {new Date().getFullYear()} Tutorial Scheduler. All rights reserved.</p>
      </footer>
      <Analytics/>
    </div>
  );
}
