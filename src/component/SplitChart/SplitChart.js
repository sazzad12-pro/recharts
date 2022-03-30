import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const SplitChart = () => {
  const [phones, setPhone] = useState([]);
  useEffect(() => {
    axios
      .get(`https://openapi.programming-hero.com/api/phones?search=iphone`)
      .then((data) => {
        const loadData = data.data.data;
        const phoneData = loadData.map((phone) => {
          const parts = phone.slug.split("-");
          const ph = {
            name: parts[0],
            value: parseInt(parts[1]),
          };
          return ph;
        });
        setPhone(phoneData);
      });
  }, []);
  return (
    <BarChart width={400} height={400} data={phones}>
      <Bar dataKey="name" fill="#8884d8" />
      <Bar dataKey="value" fill="#8884d8" />
      <XAxis></XAxis>
      <YAxis></YAxis>
      <Tooltip></Tooltip>
    </BarChart>
  );
};

export default SplitChart;
