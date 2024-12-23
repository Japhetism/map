import { ILayout } from "../../interface";
import SideMenu from "../sidemenu";

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="flex">
      <SideMenu />
      <div className="flex-1 p-4">
        {children}
      </div>
    </div>
  )
}

export default Layout;