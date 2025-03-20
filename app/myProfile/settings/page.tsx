"use client";

import Container from "@/components/container/container";
import TitlePage from "@/components/titlePage/titlePage";
import { Button } from "@/components/ui/button";
import { SquareUserRoundIcon, UserPen } from "lucide-react";
import React, { useState } from "react";
import EditInfo from "./editInfo";
import ManageAccount from "./manageAccount";

const Page = () => {
  const [selectedTab, setSelectedTab] = useState("editInfo");

  const menuSettings = [
    {
      icon: UserPen,
      label: "Edit Information",
      key: "editInfo",
      component: <EditInfo />,
    },
    {
      icon: SquareUserRoundIcon,
      label: "Manage Account",
      key: "manageAcc",
      component: <ManageAccount />,
    },
  ];

  return (
    <Container>
      <TitlePage title="Account Settings" hasBack />
      <div className="flex gap-4 flex-col lg:flex-row my-10">
        {/* Sidebar Menu */}
        <div className="w-52 space-y-6">
          {menuSettings.map((item) => (
            <Button
              key={item.key}
              variant="link"
              size="sm"
              className={`cursor-pointer flex items-center gap-2 ${
                selectedTab === item.key ? "text-gray-300 font-bold" : "text-gray-400"
              }`}
              onClick={() => setSelectedTab(item.key)}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Button>
          ))}
        </div>

        {/* Render Selected Component */}
        <div className="w-full p-4">
          {menuSettings.find((item) => item.key === selectedTab)?.component}
        </div>
      </div>
    </Container>
  );
};

export default Page;
