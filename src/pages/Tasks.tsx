import { AddTaskModel } from "@/components/module/AddTaskModel";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTaskQuery } from "@/redux/api/baseApi";
import type { ITask } from "@/types";

const Tasks = () => {
  const { data, isLoading, isError } = useGetTaskQuery(undefined, {
    pollingInterval: 30000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  console.log({ data, isLoading, isError });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className=" mx-auto max-w-7xl px-5 mt-20">
      <div>
        <div className="mr-auto">
          <h1>Tasks </h1>
          <AddTaskModel />
        </div>
        <Tabs defaultValue="All" className="w-[400px] ml-auto">
          <TabsList>
            <TabsTrigger value="All">All</TabsTrigger>
            <TabsTrigger value="High">High</TabsTrigger>
            <TabsTrigger value="Medium">Medium</TabsTrigger>
            <TabsTrigger value="Low">Low</TabsTrigger>
          </TabsList>
          {/* <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent> */}
        </Tabs>
      </div>
      <div className=" grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {!isLoading &&
          data.tasks?.map((task: ITask) => (
            <TaskCard key={task.id} task={task}></TaskCard>
          ))}
      </div>
    </div>
  );
};

export default Tasks;
