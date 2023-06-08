import * as React from "react"
import { Link } from "gatsby"
import clsx from "clsx"

function Header ({ siteTitle }) {
  let [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <nav className={clsx(' bg-white',
     
        'sticky top-0 z-50 flex flex-wrap items-center justify-between bg-white px-4 shadow-md shadow-slate-100/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8',
        isScrolled
          ? 'dark:bg-slate-100/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-100/75'
          : 'dark:bg-transparent'
      )
    }>
    <div class="w-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="flex h-16 justify-between ">
          <div class="flex justify-self-start">
          <div class="flex flex-shrink-0 items-center">

              {/* <svg viewBox="0 0 640 512" width="66px" height="66px" class="fill-slate-300"><path d="M632 32L531.9 32c5.875-6.125 10.25-13.62 11.1-22.37C544.9 4.632 540.1 0 535.1 0h-120c-70.75 0-127.1 57.25-127.1 128c-63.88 0-104.2-36.76-127.7-90.26C156.1 30.22 146.7 30.03 143.2 37.46C133.5 58.03 128 80.81 128 105.1c0 66.1 51 133.1 128 147.8L256 256c-76.88 0-133.8-49.62-152.6-109C97.75 151.2 92.63 155.9 88 161.1L88 160C39.5 160 0 199.5 0 248v56c0 8.875 7.125 16 16 16L32 320c8.875 0 16-7.125 16-16l.0018-56c0-13.25 6.878-24.38 16.75-31.62c-.125 2.5-.7524 5-.7524 7.625c0 27.62 11.85 52.48 30.47 69.98l-25.74 68.89c-4.496 12.04-5.216 25.15-2.095 37.62l21.77 87.28C91.97 502 104.8 512 119.5 512h32.98c20.81 0 36.09-19.55 31.05-39.74l-21.26-85.39l23.78-63.61l102.1 22.34L288.1 480c0 17.67 14.33 32 32 32h32c17.6 0 32-14.4 32-32V318.2C403.7 297.1 416.1 270.5 416.1 240c0-.25-.105-.3828-.105-.6328V136.9L431.1 144l18.89 37.72c7.455 14.91 25.07 21.6 40.52 15.36l32.53-13.07c12.12-4.893 20.1-16.67 20.1-29.74l-.0246-70.98l92.44-36.66C643 42.26 639.9 32 632 32zM480 96c-8.875 0-16-7.125-16-16S471.1 64 479.1 64c8.875 0 16 7.125 16 16S488.9 96 480 96z" /></svg> */}
            {/* <img class="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
            <img class="hidden h-8 w-auto lg:block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"> */}
          </div>
          <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
            {/* <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" --> */}
            <a href="#" class="border-indigo-500 text-gray-900 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium" aria-current="page">Projects</a>
            <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">About</a>
            <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">Contact</a>
            <a href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium">Instagram</a>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:items-center">
          {/* <button type="button" class="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span class="sr-only">View notifications</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
          </button> */}

          {/* <!-- Profile dropdown --> */}
          <div class="relative ml-3">
            <div>
              <button type="button" class="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              </button>
            </div>

            {/* <!--
              Dropdown menu, show/hide based on menu state.

              Entering: "transition ease-out duration-200"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            --> */}
            {/* <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"> */}
              {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
              {/* <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
            </div> */}
          </div>
        </div>
        <div class="-mr-2 flex items-center sm:hidden">
          {/* <!-- Mobile menu button --> */}
          <button type="button" class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
            <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
            <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    {/* <!-- Mobile menu, show/hide based on menu state. --> */}
    <div class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 pb-3 pt-2">
        {/* <!-- Current: "border-indigo-500 bg-indigo-50 text-indigo-700", Default: "border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800" --> */}
        <a href="#" class="border-indigo-500 bg-indigo-50 text-indigo-700 block border-l-4 py-2 pl-3 pr-4 text-base font-medium" aria-current="page">Dashboard</a>
        <a href="#" class="border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 block border-l-4 py-2 pl-3 pr-4 text-base font-medium">Team</a>
        <a href="#" class="border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 block border-l-4 py-2 pl-3 pr-4 text-base font-medium">Projects</a>
        <a href="#" class="border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 block border-l-4 py-2 pl-3 pr-4 text-base font-medium">Calendar</a>
      </div>
      <div class="border-t border-gray-200 pb-3 pt-4">
        <div class="flex items-center px-4">
          <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-gray-800">Leo Mascotte</div>
            <div class="text-sm font-medium text-gray-500">lmascotte@me.com</div>
          </div>
          <button type="button" class="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span class="sr-only">View notifications</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
          </button>
        </div>
        <div class="mt-3 space-y-1">
          <a href="#" class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800">Your Profile</a>
          <a href="#" class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800">Settings</a>
          <a href="#" class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800">Sign out</a>
        </div>
      </div>
    </div>
  </nav>);
}

export default Header
