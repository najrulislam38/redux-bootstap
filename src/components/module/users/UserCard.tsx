import { Button } from "@/components/ui/button";
import { removeUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import type { IUser } from "@/types";
import { IconTrash } from "@tabler/icons-react";

interface IProps {
  user: IUser;
}

const UserCard = ({ user }: IProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className=" p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex justify-between gap-6">
      <a href="#">
        <div className="flex gap-3 items-center">
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {user.name}
          </h5>
        </div>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {user.email}
        </p>
      </a>

      <div className="flex flex-col gap-2">
        <Button
          onClick={() => dispatch(removeUser(user?.id))}
          className="bg-green-500 text-black "
        >
          <IconTrash />
        </Button>
      </div>
    </div>
  );
};

export default UserCard;
