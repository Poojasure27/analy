import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../../../public/assets/images/logo.png";
import collapsedLogo from "../../../public/assets/images/image.png";
import HomeSimpleDoor from "../../../public/home.svg";
import styles from '../navbar_analytics/navbar.module.css';

interface MenuItem {
  title: string;
  mapNo: number;
  icon: React.ComponentType<React.ComponentProps<'svg'>>;
}

interface BottomMenuItem {
  title: string;
  link: string;
  icon: React.ComponentType<React.ComponentProps<'svg'>>;
}

const topMenuItems: MenuItem[] = [
  { title: 'Main Map', mapNo: 0, icon: HomeSimpleDoor },
  { title: 'Sales Heatmap', mapNo: 1, icon: HomeSimpleDoor },
  { title: 'Market Penetration Heatmap', mapNo: 2, icon: HomeSimpleDoor },
];

const bottomMenuItems: BottomMenuItem[] = [
  { title: 'Home', link: '/', icon: HomeSimpleDoor },
];

const Navbar: React.FC<{ handleMapChange: (mapNumber: number) => void }> = ({ handleMapChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderMenuItems = (items: MenuItem[]) => {
    return items.map((item, index) => (
      <li key={index} className={styles.menuItem}>
        <div className={styles.menuLink}>
          <item.icon className={`${styles.menuIcon} large`} />
          <button className="resetButton" style={{ background: 'none', border: 'none', outline: 'none', boxShadow: 'none' }} onClick={() => handleMapChange(item.mapNo)}>
            <span className={`${styles.menuText} ${isOpen ? styles.visible : styles.hidden}`}>{item.title}</span>
          </button>
        </div>
      </li>
    ));
  };

  const renderBottomMenuItems = (items: BottomMenuItem[]) => {
    return items.map((item, index) => (
      <li key={index} className={styles.menuItem}>
        <Link href={item.link} className={styles.menuLink}>
          <item.icon className={`${styles.menuIcon} large`} />
          <span className={`${styles.menuText} ${isOpen ? styles.visible : styles.hidden}`}>{item.title}</span>
        </Link>
      </li>
    ));
  };

  return (
    <div
      className={`${styles.sidebarContainer} ${isOpen ? styles.expanded : styles.collapsed}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className={styles.sidebar}>
        <div className={styles.logoContainer}>
          <Image src={logo} alt="Logo" className={`${styles.logo} ${isOpen ? styles.open : styles.hidden}`} />
          <Image src={collapsedLogo} alt="Collapsed Logo" className={`${styles.collapsedLogo} ${isOpen ? styles.hidden : styles.open}`} />
        </div>
        <div className={styles.borderNav}></div>
        <ul className={styles.menu}>
          {renderMenuItems(topMenuItems)}
        </ul>
        <ul className={styles.menuBottom}>
          <div className={styles.borderNav}></div>
          {renderBottomMenuItems(bottomMenuItems)}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
