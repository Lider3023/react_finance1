import React, { type FC } from "react";
import MainLayout from "../layout/MainLayout/MainLayout";
import {
  alert,
  arrow_card2,
  arrow_down,
  bargraph,
  car,
  card_receive,
  card_send,
  China,
  cloud,
  console,
  diagram,
  Euro,
  eye,
  fi,
  figma,
  girl,
  linegraph,
  master_card,
  money,
  Rupiah,
  starbucks,
} from "../utils/img";
import DashboardLayout from "../layout/DashboardLayout";

const DashboardOverview: FC = () => {
  return (
    <DashboardLayout>
     
      <div className="dashboard_cards">
            <div className="dashboard_cards_card_1">
              <div className="dashboard_cards_card_1_header">
                <h3 className="dashboard_cards_card_1_title">
                  Total Balance
                  <img src={alert} alt="" />
                </h3>
                <p className="dashboard_cards_card_1_master">
                  <img src={master_card} alt="" />
                  <select>
                    <option selected>**** 7189</option>
                  </select>
                </p>
              </div>
              <h2 className="dashboard_cards_card_1_money">
                $12,456,315 <img src={eye} alt="" />
              </h2>
              <div className="dashboard_cards_card_1_btns">
                <button className="btn">
                  <img src={card_send} alt="" />
                  Transfer
                </button>
                <button className="btn">
                  <img src={card_receive} alt="" />
                  Receive
                </button>
              </div>
            </div>
            <div className="dashboard_cards_card_2">
              <div className="dashboard_cards_card_2_header">
                <h3 className="dashboard_cards_card_2_title">
                  My Pocked Plans
                  <img src={alert} alt="" />
                </h3>
                <p className="dashboard_cards_card_2_see">
                  See more
                  <img src={arrow_card2} alt="" />
                </p>
              </div>
              <div className="dashboard_cards_card_2_list">
                <div className="item">
                  <img src={car} alt="" />
                  <div className="item_info">
                    <h4>New Car</h4>
                    <span>$5.000,00</span>
                  </div>
                </div>
                <div className="item">
                  <img src={console} alt="" />
                  <div className="item_info">
                    <h4>New Console</h4>
                    <span>$5.000,00</span>
                  </div>
                </div>
                <div className="item">
                  <img src={money} alt="" />
                  <div className="item_info">
                    <h4>Savings </h4>
                    <span>$5.000,00</span>
                  </div>
                </div>
                <div className="item">
                  <img src={girl} alt="" />
                  <div className="item_info">
                    <h4>New Car</h4>
                    <span>$5.000,00</span>
                  </div>
                </div>
              </div>
              <p className="dashboard_cards_card_2_more">
                Load more
                <img src={arrow_down} alt="" />
              </p>
            </div>
            <div className="dashboard_cards_card_3">
              <div className="dashboard_cards_card_3_header">
                <h3 className="dashboard_cards_card_3_title">
                  Expense Catergory
                  <img src={alert} alt="" />
                </h3>
                <select className="dashboard_cards_card_3_select">
                  <option selected>Monthly</option>
                </select>
              </div>
              <div className="dashboard_cards_card_3_info">
                <img
                  src={diagram}
                  alt=""
                  className="dashboard_cards_card_3_image"
                />
                <div className="dashboard_cards_card_3_list">
                  <div className="item">
                    <div className="item_info">
                      <svg
                        width="12"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="6" cy="6.5" r="6" fill="#31B099" />
                      </svg>
                      <span>Subscribed (40.1%)</span>
                    </div>
                    <p>$500.000</p>
                  </div>
                  <div className="item">
                    <div className="item_info">
                      <svg
                        width="12"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="6" cy="6.5" r="6" fill="#E7854D" />
                      </svg>
                      <span>Taxs (25%)</span>
                    </div>
                    <p>$1000.000</p>
                  </div>
                  <div className="item">
                    <div className="item_info">
                      <svg
                        width="12"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="6" cy="6.5" r="6" fill="#C65468" />
                      </svg>
                      <span>Taxs (6.1%)</span>
                    </div>
                    <p>$345.000</p>
                  </div>
                  <div className="item">
                    <div className="item_info">
                      <svg
                        width="12"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="6" cy="6.5" r="6" fill="#4D81E7" />
                      </svg>
                      <span>Others (19.2%)</span>
                    </div>
                    <p>$234.098</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard_cards_card_4">
              <h3 className="dashboard_cards_card_4_title">
                Income Analysis
                <img src={alert} alt="" />
              </h3>
              <h2 className="dashboard_cards_card_4_money">$8,527,224</h2>
              <div className="dashboard_cards_card_4_info">
                <span className="dashboard_cards_card_4_percent">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.4317 8.96514L10.3208 4.81926L6.17488 5.93014"
                      stroke="#31B099"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.07082 12.1807L10.2783 4.89307"
                      stroke="#31B099"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  +3.1%
                </span>
                <p>VS This Month</p>
              </div>
              <div className="dashboard_cards_card_4_graph">
                <select>
                  <option selected>Monthly</option>
                </select>
                <img
                  src={bargraph}
                  alt=""
                  className="dashboard_cards_card_4_graph_image"
                />
              </div>
            </div>
            <div className="dashboard_cards_card_5">
              <h3 className="dashboard_cards_card_5_title">
                Expense Analysis
                <img src={alert} alt="" />
              </h3>
              <h2 className="dashboard_cards_card_5_money">$2,056,123</h2>
              <div className="dashboard_cards_card_5_info">
                <span className="dashboard_cards_card_5_percent">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.90902 11.382L11.1848 11.756L11.5589 7.48023"
                      stroke="#C65468"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.7218 5.24465L11.1309 11.6909"
                      stroke="#C65468"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  -2.1%
                </span>
                <p>VS This Month</p>
              </div>
              <div className="dashboard_cards_card_5_graph">
                <select>
                  <option selected>Monthly</option>
                </select>
                <img
                  src={linegraph}
                  alt=""
                  className="dashboard_cards_card_5_graph_image"
                />
              </div>
            </div>
            <div className="dashboard_cards_card_6">
              <div className="dashboard_cards_card_6_header">
                <h3 className="dashboard_cards_card_6_title">
                  Recent Activity
                  <img src={alert} alt="" />
                </h3>
                <p className="dashboard_cards_card_6_see">
                  See more
                  <img src={arrow_card2} alt="" />
                </p>
              </div>
              <div className="dashboard_cards_card_6_list">
                <div className="item">
                  <img src={figma} alt="" />
                  <div className="item_info">
                    <div className="item_info_top">
                      <p>Figma Pro</p>
                      <p>-$23.21</p>
                    </div>
                    <div className="item_info_bottom">
                      <span>Subscriptions</span>
                      <span>10/02/22 - 15.34</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src={cloud} alt="" />
                  <div className="item_info">
                    <div className="item_info_top">
                      <p>Adobe Collection</p>
                      <p>-$50.21</p>
                    </div>
                    <div className="item_info_bottom">
                      <span>Subscriptions</span>
                      <span>10/02/22 - 15.34</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src={fi} alt="" />
                  <div className="item_info">
                    <div className="item_info_top">
                      <p>Fiver Inter</p>
                      <p>+$100.00</p>
                    </div>
                    <div className="item_info_bottom">
                      <span>Receive</span>
                      <span>10/02/22 - 15.34</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <img src={starbucks} alt="" />
                  <div className="item_info">
                    <div className="item_info_top">
                      <p>Starbucks</p>
                      <p>-$50.00</p>
                    </div>
                    <div className="item_info_bottom">
                      <span>Transfer</span>
                      <span>10/02/22 - 15.34</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard_cards_card_7">
              <div className="dashboard_cards_card_7_header">
                <h3 className="dashboard_cards_card_7_title">
                  Currency
                  <img src={alert} alt="" />
                </h3>
                <div className="dashboard_cards_card_7_currency">
                  <p>1</p>
                  <select>
                    <option selected>USD</option>
                  </select>
                </div>
              </div>
              <div className="dashboard_cards_card_7_list">
                <div className="item">
                  <div className="item_info_left">
                    <img src={Rupiah} alt="" />
                    <p>Rupiah</p>
                  </div>
                  <div className="item_info_right">
                    <p>15425,15</p>
                    <span>IDR</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item_info_left">
                    <img src={Euro} alt="" />
                    <p>Euro</p>
                  </div>
                  <div className="item_info_right">
                    <p>0,95</p>
                    <span>EUR</span>
                  </div>
                </div>
                <div className="item">
                  <div className="item_info_left">
                    <img src={China} alt="" />
                    <p>Chinese Yuan</p>
                  </div>
                  <div className="item_info_right">
                    <p>7,06</p>
                    <span>CNY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </DashboardLayout>
  );
};

export default DashboardOverview;
