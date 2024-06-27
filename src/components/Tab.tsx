interface TabProps {
    tabs: string[];
    selectedTab: string;
    changeTab: (tab: string) => void;
  }
  const Tab: React.FC<TabProps> = ({ tabs, selectedTab, changeTab }) => {
    const activeTheme = "grow inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
    const inactiveTheme = "grow inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
    return <div className="w-full">
      <div className="sm:hidden">
        <label className="sr-only">Select publication Type</label>
        <select id="tabs" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          {tabs.map((tab) => (<option>{tab}</option>))}
        </select>
      </div>
      <div className="hidden sm:flex text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          {tabs.map((tab) => (
            <li key={tab} className="flex grow me-2">
              <div onClick={() => changeTab(tab)} className={selectedTab === tab ? activeTheme : inactiveTheme}>{tab}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  }
  