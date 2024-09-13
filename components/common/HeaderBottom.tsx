import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const HeaderBottom = ({ menus }: any) => {
  return (
    <div
      className="w-full h-10 bg-gray-900 text-sm text-white px-4 flex
    items-center"
    >
      <p
        className="flex items-center gap-1 h-8 px-2 border border-transparent
        hover:border-white cursor-pointer duration-300 "
      >
        <MenuOutlinedIcon />
        All
      </p>
      {menus.map((menu: any) => (
        <p
          key={menu.name}
          className="hidden md:inline-flex flex items-center gap-1 h-8 px-2 border border-transparent
 hover:border-white cursor-pointer duration-300"
        >
          {menu.name}
        </p>
      ))}
    </div>
  );
};

export default HeaderBottom;
