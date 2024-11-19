import React, { createContext, useState } from "react";

export const DashboardContext = createContext();

const DashboardProvider = ({ children }) => {
  const [dashboardData, setDashboardData] = useState({
    notifications: [],
    tasks: [],
  });

  const updateNotifications = (notifications) => {
    setDashboardData((prev) => ({ ...prev, notifications }));
  };

  const updateTasks = (tasks) => {
    setDashboardData((prev) => ({ ...prev, tasks }));
  };

  return (
    <DashboardContext.Provider
      value={{ dashboardData, updateNotifications, updateTasks }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
