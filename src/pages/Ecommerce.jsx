import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <>
      <div className="mt-24">
        <div className="flex flex-wrap lg:flex-nowrap justify-center ">
          <div className="h-44 w-full lg:w-80 p-0 m-3 rounded-3xl overflow-hidden shadow-2xl animate-card-in transition-all duration-300 bg-white/20 dark:bg-[#23272f]/40 border border-white/30 backdrop-blur-xl flex flex-col justify-between p-8 pt-9">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-gray-700 dark:text-gray-200">Earnings</p>
                <p className="text-2xl font-extrabold text-gray-900 dark:text-white">$63,448.78</p>
              </div>
              <button
                type="button"
                style={{ backgroundColor: currentColor }}
                className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full p-4 shadow-lg border-2 border-white/30 backdrop-blur-md"
              >
                <BsCurrencyDollar />
              </button>
            </div>
            <div className="mt-6">
              <Button
                color="white"
                bgColor={currentColor}
                text="Download"
                borderRadius="10px"
              />
            </div>
          </div>
          <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
            {earningData.map((item) => (
              <div key={item.title} className="bg-white/20 dark:bg-[#23272f]/40 h-44 dark:text-gray-200 md:w-56  p-4 pt-9 rounded-2xl shadow-2xl border border-white/30 backdrop-blur-xl animate-card-in transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <button
                  type="button"
                  style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                  className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl shadow"
                >
                  {item.icon}
                </button>
                <p className="mt-3">
                  <span className="text-lg font-semibold">{item.amount}</span>
                  <span className={`text-sm text-${item.pcColor} ml-2`}>
                    {item.percentage}
                  </span>
                </p>
                <p className="text-sm text-gray-400  mt-1">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-10 flex-wrap justify-center">
          <div className="bg-white/20 dark:bg-[#23272f]/40 dark:text-gray-200 m-3 p-4 rounded-3xl md:w-780 shadow-2xl border border-white/30 backdrop-blur-xl animate-card-in transition-all duration-300">
            <div className="flex justify-between">
              <p className="font-semibold text-xl">Revenue Updates</p>
              <div className="flex items-center gap-4">
                <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                  <span>
                    <GoPrimitiveDot />
                  </span>
                  <span>Expense</span>
                </p>
                <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                  <span>
                    <GoPrimitiveDot />
                  </span>
                  <span>Budget</span>
                </p>
              </div>
            </div>
            <div className="mt-10 flex gap-10 flex-wrap justify-center">
              <div className=" border-r-1 border-color m-4 pr-10">
                <div>
                  <p>
                    <span className="text-3xl font-semibold">$93,438</span>
                    <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                      23%
                    </span>
                  </p>
                  <p className="text-gray-500 mt-1">Budget</p>
                </div>
                <div className="mt-8">
                  <p className="text-3xl font-semibold">$48,487</p>
                  <p className="text-gray-500 mt-1">Expense</p>
                </div>
                <div className="mt-5">
                  <SparkLine currentColor={currentColor} id="line-sparkLine" type="Line" height="80px" width="250px" data={SparklineAreaData} color={currentColor} />
                </div>
                <div className="mt-10">
                  <Button
                    color="white"
                    bgColor={currentColor}
                    text="Download Report"
                    borderRadius="10px"
                  />
                </div>
              </div>
              <div>
                <Stacked currentMode={currentMode} width="320px" height="360px" />
              </div>
            </div>
          </div>
          <div>
            <div
              className="rounded-3xl md:w-400 p-4 m-3 shadow-2xl border border-white/30 backdrop-blur-xl animate-card-in transition-all duration-300"
              style={{ backgroundColor: currentColor + 'cc' }}
            >
              <div className="flex justify-between items-center ">
                <p className="font-semibold text-white text-2xl">Earnings</p>
                <div>
                  <p className="text-2xl text-white font-semibold mt-8">$63,448.78</p>
                  <p className="text-gray-200">Monthly revenue</p>
                </div>
              </div>
              <div className="mt-4">
                <SparkLine currentColor={currentColor} id="column-sparkLine" height="100px" type="Column" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
              </div>
            </div>
            <div className="bg-white/20 dark:bg-[#23272f]/40 dark:text-gray-200 rounded-3xl md:w-400 p-8 m-3 flex justify-center items-center gap-10 shadow-2xl border border-white/30 backdrop-blur-xl animate-card-in transition-all duration-300">
              <div>
                <p className="text-2xl font-semibold ">$43,246</p>
                <p className="text-gray-400">Yearly sales</p>
              </div>
              <div className="w-40">
                <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="160px" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-10 m-4 flex-wrap justify-center">
          <div className="bg-white/20 dark:bg-[#23272f]/40 dark:text-gray-200 p-6 rounded-3xl shadow-2xl border border-white/30 backdrop-blur-xl animate-card-in transition-all duration-300">
            <div className="flex justify-between items-center gap-2">
              <p className="text-xl font-semibold">Recent Transactions</p>
              <DropDown currentMode={currentMode} />
            </div>
            <div className="mt-10 w-72 md:w-400">
              {recentTransactions.map((item) => (
                <div key={item.title} className="flex justify-between mt-4 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl p-2 transition-all duration-200">
                  <div className="flex gap-4">
                    <button
                      type="button"
                      style={{
                        color: item.iconColor,
                        backgroundColor: item.iconBg,
                      }}
                      className="text-2xl rounded-lg p-4 hover:drop-shadow-xl shadow"
                    >
                      {item.icon}
                    </button>
                    <div>
                      <p className="text-md font-semibold">{item.title}</p>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                  <p className={`text-${item.pcColor}`}>{item.amount}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-5 border-t-1 border-color">
              <div className="mt-3">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Add"
                  borderRadius="10px"
                />
              </div>
              <p className="text-gray-400 text-sm">36 Recent Transactions</p>
            </div>
          </div>
          <div className="bg-white/20 dark:bg-[#23272f]/40 dark:text-gray-200 p-6 rounded-3xl w-96 md:w-760 shadow-2xl border border-white/30 backdrop-blur-xl animate-card-in transition-all duration-300">
            <div className="flex justify-between items-center gap-2 mb-10">
              <p className="text-xl font-semibold">Sales Overview</p>
              <DropDown currentMode={currentMode} />
            </div>
            <div className="md:w-full overflow-auto">
              <LineChart />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center">
          <div className="md:w-400 bg-white/20 dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
            <div className="flex justify-between">
              <p className="text-xl font-semibold">Weekly Stats</p>
              <button type="button" className="text-xl font-semibold text-gray-500">
                <IoIosMore />
              </button>
            </div>

            <div className="mt-10 ">
              {weeklyStats.map((item) => (
                <div key={item.title} className="flex justify-between mt-4 w-full">
                  <div className="flex gap-4">
                    <button
                      type="button"
                      style={{ background: item.iconBg }}
                      className="text-2xl hover:drop-shadow-xl text-white rounded-full p-3"
                    >
                      {item.icon}
                    </button>
                    <div>
                      <p className="text-md font-semibold">{item.title}</p>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>

                  <p className={`text-${item.pcColor}`}>{item.amount}</p>
                </div>
              ))}
              <div className="mt-4">
                <SparkLine currentColor={currentColor} id="area-sparkLine" height="160px" type="Area" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
              </div>
            </div>

          </div>
          <div className="w-400 bg-white/20 dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
            <div className="flex justify-between">
              <p className="text-xl font-semibold">MedicalPro Branding</p>
              <button type="button" className="text-xl font-semibold text-gray-400">
                <IoIosMore />
              </button>
            </div>
            <p className="text-xs cursor-pointer hover:drop-shadow-xl font-semibold rounded-lg w-24 bg-orange-400 py-0.5 px-2 text-gray-200 mt-10">
              16 APR, 2021
            </p>

            <div className="flex gap-4 border-b-1 border-color mt-6">
              {medicalproBranding.data.map((item) => (
                <div key={item.title} className="border-r-1 border-color pr-4 pb-2">
                  <p className="text-xs text-gray-400">{item.title}</p>
                  <p className="text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="border-b-1 border-color pb-4 mt-2">
              <p className="text-md font-semibold mb-2">Teams</p>

              <div className="flex gap-4">
                {medicalproBranding.teams.map((item) => (
                  <p
                    key={item.name}
                    style={{ background: item.color }}
                    className="cursor-pointer hover:drop-shadow-xl text-white py-0.5 px-3 rounded-lg text-xs"
                  >
                    {item.name}
                  </p>
                ))}
              </div>
            </div>
            <div className="mt-2">
              <p className="text-md font-semibold mb-2">Leaders</p>
              <div className="flex gap-4">
                {medicalproBranding.leaders.map((item, index) => (
                  <img key={index} className="rounded-full w-8 h-8" src={item.image} alt="" />
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center mt-5 border-t-1 border-color">
              <div className="mt-3">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Add"
                  borderRadius="10px"
                />
              </div>

              <p className="text-gray-400 text-sm">36 Recent Transactions</p>
            </div>
          </div>
          <div className="w-400 bg-white/20 dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
            <div className="flex justify-between">
              <p className="text-xl font-semibold">Daily Activities</p>
              <button type="button" className="text-xl font-semibold text-gray-500">
                <IoIosMore />
              </button>
            </div>
            <div className="mt-10">
              <img
                className="md:w-96 h-50 "
                src={product9}
                alt=""
              />
              <div className="mt-8">
                <p className="font-semibold text-lg">React 18 coming soon!</p>
                <p className="text-gray-400 ">By Johnathan Doe</p>
                <p className="mt-8 text-sm text-gray-400">
                  This will be the small description for the news you have shown
                  here. There could be some great info.
                </p>
                <div className="mt-3">
                  <Button
                    color="white"
                    bgColor={currentColor}
                    text="Read More"
                    borderRadius="10px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes card-in {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-card-in {
          animation: card-in 0.7s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </>
  );
};

export default Ecommerce;
