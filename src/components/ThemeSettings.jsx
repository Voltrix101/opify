import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { themeColors } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } = useStateContext();

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0 z-50">
      <div className="float-right h-screen dark:text-gray-200 bg-white/20 dark:bg-[#2a2d34]/40 w-96 rounded-l-2xl shadow-2xl backdrop-blur-xl border border-white/30 animate-slide-in transition-all duration-300">
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <p className="font-bold text-2xl tracking-tight">Settings</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            style={{ color: 'rgb(153, 171, 180)', borderRadius: '50%' }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray transition-colors duration-200"
            aria-label="Close settings"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex flex-col gap-6 p-6">
          <div>
            <p className="font-semibold text-xl mb-2">Theme Option</p>
            <div className="flex gap-6">
              <label className="flex items-center cursor-pointer gap-2">
                <input
                  type="radio"
                  id="light"
                  name="theme"
                  value="Light"
                  className="accent-sky-500 w-5 h-5"
                  onChange={setMode}
                  checked={currentMode === 'Light'}
                />
                <span className="text-md">Light</span>
              </label>
              <label className="flex items-center cursor-pointer gap-2">
                <input
                  type="radio"
                  id="dark"
                  name="theme"
                  value="Dark"
                  className="accent-gray-800 w-5 h-5"
                  onChange={setMode}
                  checked={currentMode === 'Dark'}
                />
                <span className="text-md">Dark</span>
              </label>
            </div>
          </div>
          <div>
            <p className="font-semibold text-xl mb-2">Theme Colors</p>
            <div className="flex flex-wrap gap-4">
              {themeColors.map((item, index) => (
                <TooltipComponent key={index} content={item.name} position="TopCenter">
                  <button
                    type="button"
                    className={`h-10 w-10 rounded-full border-4 transition-all duration-200 shadow-md hover:scale-110 focus:outline-none ${item.color === currentColor ? 'border-black dark:border-white scale-110' : 'border-transparent'}`}
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck className={`text-2xl text-white drop-shadow-lg ${item.color === currentColor ? 'block' : 'hidden'}`} />
                  </button>
                </TooltipComponent>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">Selected:</span>
              <span
                className="inline-block w-6 h-6 rounded-full border border-gray-300 dark:border-gray-600 shadow"
                style={{ backgroundColor: currentColor }}
              />
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes slide-in {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in {
          animation: slide-in 0.4s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </div>
  );
};

export default ThemeSettings;
