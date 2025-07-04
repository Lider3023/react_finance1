import React, { type FC } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import Working from "../components/Animation/Working";

const DashboardStatistics: FC = () => {
  return (
    <>
      <DashboardLayout>
        <div className="dashboard_statics">
            <Working/>
        </div>
      </DashboardLayout>
    </>
  );
};

export default DashboardStatistics;
