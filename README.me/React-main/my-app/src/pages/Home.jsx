import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar,} from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Статистик",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Эрэгтэй хүмүүс",
      data: labels.map(() => Math.round(Math.random() * 70)),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Эмэгтэй хүсүүс",
      data: labels.map(() => Math.round(Math.random() * 70)),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Хүүхэд",
      data: labels.map(() => Math.round(Math.random() * 70)),
      backgroundColor: "rgba(53, 162, 0, 0.5)",
    },
  ],
};

export const pieData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function Home() {
  return (
    <div className="container-sm body-container">
      <div className="row">
        <div className="col-12">
          <Bar options={options} data={data} />;
        </div>
        
      </div>
    </div>
  );
}
