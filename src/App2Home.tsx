import CounterButton from "shellApp/CounterButton";
import { GroupuiButton } from "@group-ui/group-ui-react";
import { defineCustomElements } from '@group-ui/group-ui-react/node_modules/@group-ui/group-ui/dist/components';

void defineCustomElements();

export default function App2Home() {
  return (
    <div className="app2 p-5 bg-blue-500">
      <h1>App2 Home</h1>

      <h1>CounterButton from app 2</h1>

      <GroupuiButton onClick={() => console.log("Clicked")}>
        GroupuiButton from app 2!
      </GroupuiButton>

      <h1>CounterButton from shell Home</h1>
      <CounterButton></CounterButton>
    </div>
  );
}
