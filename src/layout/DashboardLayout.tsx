import React, { Children, type FC, type ReactNode } from 'react'
import MainLayout from './MainLayout/MainLayout'
import { NavLink } from 'react-router-dom'
import { arrowRight, calendar } from '../utils/img'
import {motion} from 'framer-motion'
interface IProp{
    children: ReactNode
}
const DashboardLayout:FC<IProp> = ({children}) => {
  return (
<>
<MainLayout>
     <div className="dashboard">
        <div className="container">
          <div className="dashboard_header">
            <h1 className="dashboard_header_title">
              Welcome back, Rainer Yaeger 👏🏻
            </h1>
            <div className="dashboard_header_path">
              <span className="dashboard_header_path_first">Dashboard</span>
              <img src={arrowRight} alt="" />
              <span className="dashboard_header_path_second">Overview</span>
            </div>
            <div className="dashboard_info">
              <ul className="dashboard_info_list">
                <li>
                  <NavLink to="/dashboard/overview" className="link">
                    Overview
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/transaction" className="link">
                    Transaction
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/statistics" className="link">
                    Statistics
                  </NavLink>
                </li>
              </ul>
              <p className="dashboard_info_date">
                <img src={calendar} alt="" className="calendar" />
                Oct 22,2022
              </p>
            </div>
          </div>
          <motion.div className="dashboard_content"
          initial={{opacity:0, x:-20}}
          animate={{opacity:1, x:0}}
          exit={{opacity:0, x:-20}}
          transition={{duration: 0.3}}
          >
            {children}
          </motion.div>
        </div>
      </div>
</MainLayout>

</>

)
}

export default DashboardLayout