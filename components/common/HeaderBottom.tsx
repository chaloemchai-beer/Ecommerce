import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

// Define the shape of a menu item
interface MenuItem {
  name: string;
}

interface HeaderBottomProps {
  menus: MenuItem[];
}

const HeaderBottom = ({ menus }: HeaderBottomProps) => {
  return (
    <div
      className="w-full h-10 bg-gray-900 text-sm text-white px-4 flex items-center"
    >
      <p
        className="flex items-center gap-1 h-8 px-2 border border-transparent
        hover:border-white cursor-pointer duration-300"
      >
        <MenuOutlinedIcon />
        All
      </p>
      {menus.map((menu) => (
        <p
          key={menu.name}
          className="hidden md:inline-flex items-center gap-1 h-8 px-2 border border-transparent
          hover:border-white cursor-pointer duration-300"
        >
          {menu.name}
        </p>
      ))}
    </div>
  );
};

export default HeaderBottom;
