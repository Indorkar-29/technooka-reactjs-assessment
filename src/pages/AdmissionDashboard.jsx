import { useEffect, useMemo, useState } from "react";
import { fetchAdmissionAnalytics } from "../api/analytics";
import StatCard from "../components/StatCard";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const AdmissionDashboard = () => {
  const [data, setData] = useState(null);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    setLoading(true);
    const res = await fetchAdmissionAnalytics(from, to);
    setData(res);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const filteredTrends = useMemo(() => {
    if (!data?.trends) return [];

    return data.trends.filter(
      (d) =>
        (!from || d.date >= from) &&
        (!to || d.date <= to)
    );
  }, [data, from, to]);

  return (
    <div className="min-h-screen bg-university-light p-6">

      {/* HEADER */}
      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-800">
          Admission Analytics Dashboard
        </h1>

        <button
          onClick={loadData}
          className="bg-university-primary text-white px-5 py-2 rounded-lg shadow"
        >
          Refresh Data
        </button>
      </div>

      {/* STAT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {data && (
          <>
            <StatCard
              title="Total Applicants"
              value={data.totalApplicants}
            />
            <StatCard
              title="Verified Applicants"
              value={data.verifiedApplicants}
            />
            <StatCard
              title="Rejected Applicants"
              value={data.rejectedApplicants}
            />
          </>
        )}
      </div>

      {/* BAR CHART */}
      <div className="bg-white rounded-xl2 shadow-soft p-6 mb-6">
        <h2 className="font-semibold text-lg mb-4">
          Applications per Program
        </h2>

        {data?.applicationsPerProgram?.length ? (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data.applicationsPerProgram}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="program" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-gray-400">No data available</p>
        )}
      </div>

      {/* DATE FILTER */}
      <div className="bg-white rounded-xl2 shadow-soft p-6 mb-6 flex flex-wrap gap-4">
        <div>
          <label className="text-sm text-gray-500">From</label>
          <input
            type="date"
            className="border rounded p-2 block"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm text-gray-500">To</label>
          <input
            type="date"
            className="border rounded p-2 block"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>
      </div>

      {/* LINE CHART */}
      <div className="bg-white rounded-xl2 shadow-soft p-6">
        <h2 className="font-semibold text-lg mb-4">
          Application Trends
        </h2>

        {filteredTrends.length ? (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={filteredTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="applications"
                stroke="#16a34a"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-gray-400">No data available</p>
        )}
      </div>
    </div>
  );
};

export default AdmissionDashboard;
