"use client";

import React from "react";
import { useSession, useUser } from "@clerk/nextjs";
import { data } from "autoprefixer";

const Dashboard = () => {
  const user = useUser();
  const { session } = useSession();

  if (!session) return <div>Loading...</div>;
  return (
    <div>
      <div>

        <Image src={`${user?.user?.imageUrl}`}></Image>
      </div>
    </div>
  );
};

export default Dashboard;
