import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IMenuItem } from '../../interface';
import { bottomMenus, menus } from '../../fixtures/sidemenu';
import { LogoSVG } from '../../assets/icons/logo';
import { ArrowupSVG } from '../../assets/icons/arrowup';
import { ArrowdownSVG } from '../../assets/icons/arrowdown';
import UserImage from '../../assets/images/user.png';
import { isActive } from '../../utils/helper';
import { SignoutSVG } from '../../assets/icons/signout';
import { HamburgerSVG } from '../../assets/icons/hamburger';
import { CloseSVG } from '../../assets/icons/close';

const SideMenu: React.FC = () => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  const toggleSubMenu = (title: string) => {
    setOpenSubMenu(openSubMenu === title ? null : title);
  };

  const activeIconColor = "#175CFF";
  const defaultIconColor = "#667185"; 

  const renderMenuItems = (items: IMenuItem[]) => {
    return items.map((item) => {
      const itemIsActive = isActive(location.pathname, item.path, item.subMenu);

      return (
        <div key={item.title}>
          <div
            className={`text-[#344054] p-4 cursor-pointer hover:bg-[#E3EAFB] flex items-center justify-between 
              ${itemIsActive ? 'bg-[#E3EAFB]' : ''}`}
            onClick={() => item.subMenu ? toggleSubMenu(item.title) : null}
          >
            <div className="flex items-center space-x-4">
              {item.icon && (
                <item.icon color={itemIsActive ? activeIconColor : defaultIconColor} />
              )}

              {item.path ? (
                <Link to={item.path} className="w-full block">
                  <span>{item.title}</span>
                </Link>
              ) : (
                <span>{item.title}</span>
              )}
            </div>

            {item.subMenu && (
              <span onClick={(e) => e.stopPropagation()}>
                {openSubMenu === item.title ? <ArrowupSVG /> : <ArrowdownSVG />}
              </span>
            )}
          </div>

          {item.subMenu && openSubMenu === item.title && (
            <div className="pl-4">
              {renderMenuItems(item.subMenu)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <>
      {!isMenuOpen && (
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden p-2 mb-6 z-50"
        >
          <HamburgerSVG />
        </button>
      )}

      <div className={`w-[272px] bg-[#F7F9FC] h-screen text-white p-5 flex flex-col justify-between 
        ${isMenuOpen ? 'block' : 'hidden'} md:block fixed md:relative z-40`}>
        
        {isMenuOpen && (
          <button 
            onClick={() => setIsMenuOpen(false)} 
            className="fixed md:hidden mb-5"
          >
            <CloseSVG />
          </button>
        )}

        <div>
          <div className="p-4 mb-5 mt-5 md:mt-0">
            <LogoSVG />
          </div>
          <div>{renderMenuItems(menus)}</div>
        </div>

        <div>
          <div className="mt-auto pb-10">
            {renderMenuItems(bottomMenus)}
            <div className="flex flex-row items-center justify-center space-x-2 p-4">
              <div>
                <img src={UserImage} alt="user-image" width={40} height={40} />
              </div>
              <div className="flex flex-col mb-auto">
                <p className="text-[#101928] text-sm font-bold">Mark Benson</p>
                <p className="text-[#475367] text-sm font-normal max-w-[132px] truncate">
                  markbenson@coremed.com
                </p>
              </div>
              <button>
                <SignoutSVG />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
