// styles
import "./styles.css"

import { menuItems, sidebarMenu } from "./utils"

function Layout() {
  return (
    <>
      <div className="layout-container">
        <header className="header-container">
          <ul className="menu-list">
            {menuItems.map((item) => {
              return (
                <>
                  <li className="menuItem">
                    <a href="#" className="link">
                      {item.menu}
                    </a>
                  </li>
                </>
              )
            })}
          </ul>
        </header>
        <div className="sidebar-container">
          <ul className="sidebar-content">
            {sidebarMenu.map((menuItem) => {
              return (
                <>
                  <li className="sidebar-menu-item">
                    <a href={menuItem.menuLink}>{menuItem.menuName}</a>
                  </li>
                </>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
export default Layout