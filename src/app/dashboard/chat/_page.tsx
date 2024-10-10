"use client";

import React from "react";
import Friends from "./sidebar";

export default function Chat() {
  return (
    <div className="flex h-full items-stretch">
      <div className="lg:hidden">
        <Friends />
      </div>
      <div className="hidden max-h-[calc(100vh)] grow items-center justify-center bg-grey-100 lg:flex">
        No chat selected
      </div>
    </div>
  );
}
