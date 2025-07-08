import { AddUserModel } from "@/components/module/AddUserModel";
import UserCard from "@/components/module/users/UserCard";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hooks";

const Users = () => {
  const users = useAppSelector(selectUsers);
  return (
    <div className=" mx-auto max-w-7xl px-5 mt-20">
      <div className="mb-8">
        <h3 className="text-3xl font-medium mr-auto">Users</h3>

        <div className="ml-auto">
          <AddUserModel />
        </div>
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
        {users?.map((user) => (
          <UserCard key={user.id} user={user}></UserCard>
        ))}
      </div>
    </div>
  );
};

export default Users;
