"use client"

// Change from
// https://flowbite.com/docs/components/tabs/

interface TabProps {
    tabs: string[];
    selectedTab: string;
    changeTab: (tab: string) => void;
}
const Tab: React.FC<TabProps> = ({ tabs, selectedTab, changeTab }) => {
    const activeTheme = "inline-block w-full p-4 text-white bg-blue-600"
    const inactiveTheme = "inline-block w-full p-4 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
    return (
        <div className="not-format w-full max-w-screen-xl mt-4">
            <div className="sm:hidden">
                <label className="sr-only">Select Publication Type</label>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {
                        tabs.map((tab) => (
                            <option key={tab} value={tab}>{tab}</option>
                        ))
                    }
                </select>
            </div>
            <ul className="hidden text-sm font-medium text-center text-gray-500 shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                {
                    tabs.map((tab) => (
                        <li key={tab} className="w-full focus-within:z-10">
                            <button className={selectedTab === tab ? activeTheme : inactiveTheme} onClick={() => changeTab(tab)}>{tab}</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Tab