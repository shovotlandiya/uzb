import classNames from "classnames";
import cn from "classnames";

const MobileMenu = ({ className }) => {
  return (
    <div
      className={cn(
        {
          ["flex md:hidden flex-col max-w-[85%] w-full bg-gray-50 fixed top-0 left-0 min-h-screen transition-transform ease-in-out duration-300"]: true,
        },
        className
      )}
    >
      <div className="w-full">Header</div>
      <div className="w-full grow">Menu</div>
      <div className="w-full">Languag</div>
    </div>
  );
};

export default MobileMenu;
