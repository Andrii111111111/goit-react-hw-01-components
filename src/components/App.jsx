
import { TaskOne } from "./TaskOne/Profile";
import { TaskTwo } from "./TaskTwo/Statistics";
import { TaskThree } from "./TaskThree/FriendList";
import { TaskFour } from "./TaskFour/TransactionHistory";


export const App = () => {
  return (
    <div>
      <TaskOne />
      <TaskTwo />
      <TaskThree />
      <TaskFour/>
    </div>
  );
};
