import { AddTaskModel } from "@/components/module/AddTaskModel";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  /*selectFilter ,*/ selectTasks,
  updateFilter,
} from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const Tasks = () => {
  const tasks = useAppSelector(selectTasks);
  // const filter = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();

  // console.log(tasks);
  // console.log(filter);

  return (
    <div className=" mx-auto max-w-7xl px-5 mt-20">
      <div>
        <div className="mr-auto">
          <h1>Tasks </h1>
          <AddTaskModel />
        </div>
        <Tabs defaultValue="All" className="w-[400px] ml-auto">
          <TabsList>
            <TabsTrigger
              value="All"
              onClick={() => dispatch(updateFilter("All"))}
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="High"
              onClick={() => dispatch(updateFilter("High"))}
            >
              High
            </TabsTrigger>
            <TabsTrigger
              value="Medium"
              onClick={() => dispatch(updateFilter("Medium"))}
            >
              Medium
            </TabsTrigger>
            <TabsTrigger
              value="Low"
              onClick={() => dispatch(updateFilter("Low"))}
            >
              Low
            </TabsTrigger>
          </TabsList>
          {/* <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent> */}
        </Tabs>
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
