import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import axios from "axios";
import TabNav from "./components/TabNav";
import AppRouter from "./components/AppRouter";


export default function App() {
  
  return (
    <main>
      <Header />
      <TabNav />
      <AppRouter />
    </main>
  );
}
