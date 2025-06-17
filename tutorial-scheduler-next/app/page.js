import TutorialsList from "./components/TutorialsList";
import TutorialsForm from "./components/TutorialsForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8 p-6">
      <header className="text-center pb-8">
          <div className="inline-block p-2 bg-indigo-600 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Tutorial Scheduler</h1>
          <p className="mt-2 text-sm text-gray-600">Track and manage your learning journey</p>
      </header>
      <div className=" space-y-10 flex flex-row">

        <div className="w-1/3">
          <TutorialsForm />
        </div>
        <div className="w-2/3">
          <TutorialsList />
        </div>
      </div>

      <footer className="text-center text-xs text-gray-500 pt-4 mt-8 border-t border-gray-200">
            <p>© {new Date().getFullYear()} Tutorial Scheduler. All rights reserved.</p>
      </footer>
    </div>
  );
}
