import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiDollarSign,
  FiTrendingUp,
  FiActivity,
  FiClock,
  FiCheckCircle,
  FiAlertTriangle,
  FiPieChart,
  FiPercent,
  FiUsers,
} from "react-icons/fi";
import api from "../../services/api";
import toast from "react-hot-toast";

const GroupHeader = () => (
  <div
    style={{
      background: "#064E3B",
      borderRadius: "0 0 2rem 2rem",
      padding: "1.5rem 1.5rem 3.75rem",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: -40,
        right: -40,
        width: 180,
        height: 180,
        background: "rgba(255,255,255,0.05)",
        borderRadius: "50%",
      }}
    />
    <div
      style={{
        position: "absolute",
        bottom: -60,
        left: "30%",
        width: 240,
        height: 240,
        background: "rgba(255,255,255,0.04)",
        borderRadius: "50%",
      }}
    />
  </div>
);

const HeroCard = ({ label, amount, sub, icon: Icon, color = "#065F46" }) => (
  <div
    style={{
      padding: "0 1rem",
      marginTop: "-1.75rem",
      position: "relative",
      zIndex: 2,
    }}
  >
    <div
      style={{
        background: "#fff",
        border: "0.5px solid #E5E7EB",
        borderRadius: 16,
        padding: "1.25rem 1.5rem",
        boxShadow: "0 4px 20px rgba(0,0,0,0.10)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <p
          style={{
            fontSize: 11,
            color: "#6B7280",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            margin: 0,
          }}
        >
          {label}
        </p>
        <p
          style={{
            fontSize: 34,
            fontWeight: 700,
            color: color,
            margin: "4px 0 2px",
            lineHeight: 1,
          }}
        >
          {amount}
        </p>
        <p style={{ fontSize: 11, color: "#9CA3AF", margin: 0 }}>{sub}</p>
      </div>
      <div
        style={{
          background: "#D1FAE5",
          borderRadius: "50%",
          width: 50,
          height: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon color="#065F46" size={22} />
      </div>
    </div>
  </div>
);

const ShareOut = () => {
  const groupId = localStorage.getItem("selectedGroupId");
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState({
    totalSavings: 0,
    ownershipPct: 0,
    outstandingLoan: 0,
    profitEarned: 0,
    expectedShareOut: 0,
    paymentStatus: "No cycle",
    cycleName: null,
    paidDate: null,
  });
  const [activities, setActivities] = useState([]);

  const toNumber = (val) => (isNaN(Number(val)) ? 0 : Number(val));
  const formatMoney = (v) => `K${v.toFixed(2)}`;
  const formatPercent = (v) => `${v.toFixed(2)}%`;

  const loadData = useCallback(async () => {
    if (!groupId) return;
    setLoading(true);
    try {
      const [summaryRes, activitiesRes] = await Promise.all([
        api.get(`/share-out/member/summary/${groupId}`),
        api.get(`/share-out/member/activities/${groupId}`),
      ]);
      setSummary(summaryRes.data);
      setActivities(activitiesRes.data);
    } catch (error) {
      toast.error("Failed to load share-out data");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [groupId]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <GroupHeader />
      <HeroCard
        label="Expected Share-Out"
        amount={formatMoney(summary.expectedShareOut)}
        sub={
          summary.cycleName ? `Cycle: ${summary.cycleName}` : "No active cycle"
        }
        icon={FiPieChart}
      />

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-3 mt-4 px-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <p className="text-gray-500 text-xs uppercase tracking-wide">
            My Savings
          </p>
          <p className="text-xl font-bold text-emerald-700 mt-1">
            {formatMoney(summary.totalSavings)}
          </p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <p className="text-gray-500 text-xs uppercase tracking-wide">
            Ownership
          </p>
          <p className="text-xl font-bold text-emerald-700 mt-1">
            {formatPercent(summary.ownershipPct)}
          </p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <p className="text-gray-500 text-xs uppercase tracking-wide">
            Profit Earned
          </p>
          <p className="text-xl font-bold text-amber-600 mt-1">
            {formatMoney(summary.profitEarned)}
          </p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <p className="text-gray-500 text-xs uppercase tracking-wide">
            Outstanding Loan
          </p>
          <p className="text-xl font-bold text-red-600 mt-1">
            {formatMoney(summary.outstandingLoan)}
          </p>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-xl mx-4 mt-4 mb-6 p-5 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 border-b border-gray-100 pb-3 mb-3">
          <FiActivity className="text-amber-500" size={18} />
          <h2 className="text-lg font-semibold text-gray-700">
            Recent Activities
          </h2>
        </div>
        {activities.length === 0 ? (
          <p className="text-gray-400 text-center py-6 text-sm">
            No activities yet
          </p>
        ) : (
          <div className="space-y-3">
            {activities.map((act) => (
              <div
                key={act.id}
                className="flex justify-between items-center border-b border-gray-100 pb-2 last:border-0"
              >
                <div>
                  <p className="font-medium text-gray-800">{act.activity}</p>
                  <p className="text-xs text-gray-400">{act.name}</p>
                </div>
                <p className="text-xs text-gray-400">
                  {new Date(act.updated_at).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShareOut;
