"use client";

// import React from "react";

// type USERROLETYPE = "landlord" | "tenant" | "agent";

// export const USERROLE: USERROLETYPE = "tenant";

// utils/roleStorage.ts

// Save role to localStorage
export const setRole = (role: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("userRole", role);
  }
};

// Get role from localStorage
export const getRole = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("userRole");
  }
  return "tenant";
};

// Remove role from localStorage
export const removeRole = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("userRole");
  }
};
