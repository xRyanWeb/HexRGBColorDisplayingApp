"use client";
import "./app.css";
import * as React from "react";
import { Header } from "./Components/Header";
import Button from "./Components/Buttons";
import { Input } from "./Components/Inputs";

export default function Page() {
  return (
    <React.Fragment>
      <div className="container">
        <body className="bg-blue-900">
          <Header />
          <div>
            <Input />
            <Button title="Set Color" />
          </div>
        </body>
      </div>
    </React.Fragment>
  );
}
