import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import jsonData from "./data.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = jsonData.map((d) => d.day); //  ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: jsonData.map((d) => d.amount),
      backgroundColor: "hsl(10, 79%, 65%)",
    },
  ],
};

export default function App() {
  return <Bar options={options} data={data} />;
}
