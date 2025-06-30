import React from 'react';

const Header = ({ category, title }) => (
  <div className="mb-10 bg-white/20 dark:bg-[#23272f]/40 border border-white/30 backdrop-blur-xl shadow rounded-2xl p-6">
    <p className="text-lg text-gray-400">{category}</p>
    <p className="text-3xl font-extrabold tracking-tight text-slate-900">
      {title}
    </p>
  </div>
);

export default Header;
