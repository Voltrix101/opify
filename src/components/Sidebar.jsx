import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <div className="fixed top-0 left-0 h-full w-72 z-40 bg-white/20 dark:bg-[#23272f]/40 shadow-2xl rounded-r-3xl backdrop-blur-xl border border-white/30 animate-sidebar-in transition-all duration-300 flex flex-col">
          <div className="flex justify-between items-center px-6 py-6 border-b border-gray-200 dark:border-gray-700">
            <Link to="/" onClick={handleCloseSideBar} className="flex items-center gap-3 text-2xl font-extrabold tracking-tight dark:text-white text-slate-900 bg-white/60 dark:bg-[#23272f]/60 px-4 py-2 rounded-xl shadow hover:shadow-lg transition-all duration-200">
              <SiShopware className="text-3xl" /> <span>Opify</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className="text-2xl rounded-full p-3 hover:bg-light-gray transition-colors duration-200"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-8 flex-1 overflow-y-auto px-4">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase tracking-widest text-xs font-semibold">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      background: isActive ? currentColor + '22' : '',
                      boxShadow: isActive ? `0 0 0 2px ${currentColor}` : '',
                    })}
                    className={({ isActive }) =>
                      `flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 transition-all duration-200 ${
                        isActive
                          ? 'text-white shadow-lg scale-105 border-l-4 border-white/80 dark:border-black/40'
                          : 'text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-black hover:bg-light-gray/70 hover:scale-105'
                      }`
                    }
                  >
                    {link.icon}
                    <span className="capitalize font-medium tracking-wide">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
          <style>{`
            @keyframes sidebar-in {
              from { transform: translateX(-100%); opacity: 0; }
              to { transform: translateX(0); opacity: 1; }
            }
            .animate-sidebar-in {
              animation: sidebar-in 0.5s cubic-bezier(0.4,0,0.2,1);
            }
          `}</style>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
