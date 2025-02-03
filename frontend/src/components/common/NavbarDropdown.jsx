import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ClickOutside from '../ClickOutside';

export default function NavbarDropdown ({ 
  type = 'messages',
  userInfo = null,
  items = [],
  icon,
  title,
  showNotification = false,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(showNotification);

  const renderTriggerButton = () => {
    if (type === 'user') {
      return (
        <Link
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-4"
          to="#"
        >
          <span className="hidden text-right lg:block">
            <span className="block text-sm font-medium text-black dark:text-white">
              {userInfo?.name}
            </span>
            <span className="block text-xs">{userInfo?.role}</span>
          </span>

          <span className="h-12 w-12 rounded-full">
            <img src={userInfo?.image} alt="User" />
          </span>

          <svg
            className="hidden fill-current sm:block"
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
              fill=""
            />
          </svg>
        </Link>
      );
    }

    return (
      <Link
        onClick={() => {
          setNotifying(false);
          setDropdownOpen(!dropdownOpen);
        }}
        className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
        to="#"
      >
        {notifying && (
          <span className="absolute -top-0.5 -right-0.5 z-1 h-2 w-2 rounded-full bg-meta-1">
            <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75"></span>
          </span>
        )}
        {icon}
      </Link>
    );
  };

  const renderContent = () => {
    if (!dropdownOpen) return null;

    const baseClasses = "absolute mt-2.5 flex flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark";
    
    if (type === 'user') {
      return (
        <div className={`right-0 mt-4 w-62.5 ${baseClasses}`}>
          <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
            {items.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
                >
                  {item.icon}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <button className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
            <svg
              className="fill-current"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5375 0.618744H11.6531C10.7594 0.618744 10.0031 1.37499 10.0031 2.26874V4.64062C10.0031 5.05312 10.3469 5.39687 10.7594 5.39687C11.1719 5.39687 11.55 5.05312 11.55 4.64062V2.23437C11.55 2.16562 11.5844 2.13124 11.6531 2.13124H15.5375C16.3625 2.13124 17.0156 2.78437 17.0156 3.60937V18.3562C17.0156 19.1812 16.3625 19.8344 15.5375 19.8344H11.6531C11.5844 19.8344 11.55 19.8 11.55 19.7312V17.3594C11.55 16.9469 11.2062 16.6031 10.7594 16.6031C10.3125 16.6031 10.0031 16.9469 10.0031 17.3594V19.7312C10.0031 20.625 10.7594 21.3812 11.6531 21.3812H15.5375C17.2219 21.3812 18.5625 20.0062 18.5625 18.3562V3.64374C18.5625 1.95937 17.1875 0.618744 15.5375 0.618744Z"
                fill=""
              />
              <path
                d="M6.05001 11.7563H12.2031C12.6156 11.7563 12.9594 11.4125 12.9594 11C12.9594 10.5875 12.6156 10.2438 12.2031 10.2438H6.08439L8.21564 8.07813C8.52501 7.76875 8.52501 7.2875 8.21564 6.97812C7.90626 6.66875 7.42501 6.66875 7.11564 6.97812L3.67814 10.4844C3.36876 10.7938 3.36876 11.275 3.67814 11.5844L7.11564 15.0906C7.25314 15.2281 7.45939 15.3312 7.66564 15.3312C7.87189 15.3312 8.04376 15.2625 8.21564 15.125C8.52501 14.8156 8.52501 14.3344 8.21564 14.025L6.05001 11.7563Z"
                fill=""
              />
            </svg>
            Log Out
          </button>
        </div>
      );
    }

    const dropdownClasses = `-right-16 sm:right-0 sm:w-80 w-75 h-90 ${baseClasses}`;
    
    return (
      <div className={dropdownClasses}>
        <div className="px-4.5 py-3">
          <h5 className="text-sm font-medium text-bodydark2">{title}</h5>
        </div>
        <ul className="flex h-auto flex-col overflow-y-auto">
          {items.map((item, index) => (
            <li key={index}>
              <Link
                className="flex gap-4.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                to={item.path || '#'}
              >
                {item.image && (
                  <div className="h-12.5 w-12.5 rounded-full">
                    <img src={item.image} alt="User" />
                  </div>
                )}
                <div>
                  {item.title && (
                    <h6 className="text-sm font-medium text-black dark:text-white">
                      {item.title}
                    </h6>
                  )}
                  <p className="text-sm">{item.message}</p>
                  <p className="text-xs">{item.time}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      {renderTriggerButton()}
      {renderContent()}
    </ClickOutside>
  );
};