import React from 'react';

function Header() {
  return (
    <div className="col-span-12 drop-shadow-md">
      <header>
        <nav className="bg-white border-gray-200 px-2 lg:px-1 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-5 max-w-screen-xl">
            <a href="/" className="flex items-center">
              <span className="self-center text-3xl font-extrabold  whitespace-nowrap text-blue-500">
                Online store
              </span>
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
