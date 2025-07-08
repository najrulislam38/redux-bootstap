import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  deleteTask,
  toggleCompletedState,
} from "@/redux/features/task/taskSlice";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import type { ITask } from "@/types";
import { IconTrash } from "@tabler/icons-react";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);

  const assignedUser = users.find((user) => user.id === task.assignedTo);
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex justify-between gap-6">
      <a href="#">
        <div className="flex gap-3 items-center">
          <div
            className={cn("size-3 rounded-full", {
              "bg-green-500": task.priority === "Low",
              "bg-yellow-500": task.priority === "Medium",
              "bg-red-500": task.priority === "High",
            })}
          ></div>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {task.title}
          </h5>
        </div>
        <p>Assigned by {assignedUser ? assignedUser.name : "No one"}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {task?.description}
        </p>
      </a>

      <div className="flex flex-col gap-2">
        <Button onClick={() => dispatch(deleteTask(task.id))}>
          <IconTrash />
        </Button>
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => dispatch(toggleCompletedState(task.id))}
        />
      </div>
    </div>
  );
};

export default TaskCard;
