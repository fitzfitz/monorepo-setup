import { Button } from "@fitzzz/core";
import React from "react";

export default function Home() {
  return (
    <div>
      <h1>NextJS 13 Yo!</h1>
      <Button variant={"default"}>default</Button>
      <Button variant={"primary"}>primary</Button>
      <Button variant={"secondary"}>secondary</Button>
      <Button variant={"info"}>info</Button>
      <Button rounded variant={"success"}>
        successss
      </Button>
      <Button variant={"warning"}>warning</Button>
      <Button variant={"error"}>error</Button>
    </div>
  );
}
