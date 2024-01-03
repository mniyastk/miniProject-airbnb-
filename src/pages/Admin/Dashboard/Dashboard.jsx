import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Dashboard = () => {
  return (
    <div className="w-full h-full ">
      <div className="w-full h-1/2 flex justify-center items-center">
        <Line
          data={{
            labels: ["A", "B", "C", "D", "E", "F", "G"],
            datasets: [
              {
                label: "Users",
                data: [20, 35, 100, 200, 300, 400, 500, 700].map(
                  (item) => item * 20
                ),
              }, 
              { label: "Hosts", data: [50, 100, 120] },
            ],
          }}
        />
      </div>
      <div className="w-full h-1/2 flex ">
        <div className="w-1/2 h-full flex justify-center items-center">
          <Bar
            data={{
              labels: ["A", "B", "C"],
              datasets: [
                { label: "Properties", data: [500, 659, 829] },
                { label: "Pending verification", data: [482, 328, 656] },
              ],
            }}
          />
        </div>
        <div className="w-1/2 h-full flex justify-center items-start">
          <Doughnut
            data={{
              labels: ["A", "B", "C"],
              datasets: [
                { label: "Revenue", data: [200, 300, 400] },
                { label: "Loss", data: [50, 100, 120] },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
