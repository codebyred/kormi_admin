import { getWorkerList, getUserList } from "./workers/actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { User, Worker } from "@/lib/types";


export default async function Dashboard() {

  const workerList: Worker[] = await getWorkerList();
  const userList: User[] = await getUserList();

  return (
    <div className="grid grid-flow-col min-h-screen p-14 border-2 border-red-600">
      <Card className="w-[15rem] h-[10rem]">
        <CardHeader>
          <CardTitle>Total Worker</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <p>{workerList.length}</p>
        </CardContent>
        <CardFooter>
        </CardFooter>
      </Card>

      <Card className="w-[15rem] h-[10rem]">
        <CardHeader>
          <CardTitle>Total User</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <p>{userList.length}</p>
        </CardContent>
        <CardFooter>
        </CardFooter>
      </Card>

    </div>
  );
}