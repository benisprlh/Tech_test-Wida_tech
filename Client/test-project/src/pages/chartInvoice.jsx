import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
} from "recharts";
import BaseUrl from "../helper/baseurl";

export const ChartInvoice = () => {
  const [data, setData] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [chartType, setChartType] = useState("daily");

  const fetch = async () => {
    try {
      const { data } = await axios.get(BaseUrl + "invoice-all");

      const newData = data.map((el) => {
        return {
          date: el.dateOfInvoice,
          totalPrice: el?.SoldProducts[0]?.totalPrice,
        };
      });

      setInvoices(newData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    if (invoices.length === 0) return;

    const latestInvoiceDate = new Date(
      Math.max(...invoices.map((invoice) => new Date(invoice.date)))
    );


    const lastDate = new Date(
      latestInvoiceDate.getFullYear(),
      latestInvoiceDate.getMonth(),
      latestInvoiceDate.getDate()
    );

    const dailyData = processData(invoices, "day", lastDate);
    const weeklyData = processData(invoices, "week", lastDate);
    const monthlyData = processData(invoices, "month", lastDate);

    setData({
      daily: dailyData,
      weekly: weeklyData,
      monthly: monthlyData,
    });
  }, [invoices]);

  const processData = (invoices, interval, lastDate) => {
    const intervalMap = {
      day: 1,
      week: 7,
      month: 30,
    };

    const intervalDays = intervalMap[interval];
    const startDate = new Date(lastDate);
    startDate.setDate(startDate.getDate() - intervalDays + 1);

    const revenueData = [];

    for (let i = 0; i < intervalDays; i++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);

      const revenue = invoices.reduce((total, invoice) => {
        const invoiceDate = new Date(invoice.date);
        if (
          invoiceDate.toLocaleDateString() === date.toLocaleDateString()
        ) {
          return total + invoice.totalPrice;
        }
        return total;
      }, 0);

      revenueData.push({
        date: date.toLocaleDateString(),
        revenue: revenue,
      });
    }

    return revenueData;
  };

  const handleChartTypeChange = (event) => {
    setChartType(event.target.value);
  };

  return (
    <section className="m-3">
      <h3>Revenue Trend {chartType}</h3>
      <div className="w-25">
        <select
          value={chartType}
          className="form-select"
          onChange={handleChartTypeChange}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <LineChart
        width={800}
        height={400}
        data={data[chartType]}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
        <Brush dataKey="date" height={30} />
      </LineChart>
    </section>
  );
};
