import { AddTaskModel } from "@/components/module/AddTaskModel";
import TaskCard from "@/components/module/tasks/TaskCard";
import { selectFilter, selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hooks";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);
  const filter = useAppSelector(selectFilter);

  console.log(tasks);
  console.log(filter);

  return (
    <div className=" mx-auto max-w-7xl px-5 mt-20">
      <div>
        <h1>Tasks </h1>
        <AddTaskModel />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {tasks?.map((task) => (
          <TaskCard key={task?.id} task={task}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
