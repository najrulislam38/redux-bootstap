import { IconAccessible } from "@tabler/icons-react";

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto py-3 flex items-center justify-between">
      <div className="flex gap-2 items-center text-2xl">
        <span>
          <IconAccessible />
        </span>
        <h3 className="font-semibold">Todo App</h3>
      </div>
    </div>
  );
};

export default Navbar;
