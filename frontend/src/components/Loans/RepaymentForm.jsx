import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../services/api";
import {
  FiCalendar,
  FiCreditCard,
  FiSave,
  FiArrowLeft,
  FiDollarSign,
  FiUser,
} from "react-icons/fi";

const RepaymentForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const groupId = localStorage.getItem("selectedGroupId");

  const [loan, setLoan] = useState(null);
  const [formData, setFormData] = useState({
    loan_id: id,
    amount_paid: "",
    payment_date: new Date().toISOString().split("T")[0],
    payment_method: "cash",
  });
  const [loading, setLoading] = useState(false);

  const toNumber = (v) => (isNaN(Number(v)) ? 0 : Number(v));

  useEffect(() => {
    const fetchLoan = async () => {
      try {
        const res = await api.get(`/loans/${groupId}/${id}`);
        setLoan(res.data);
      } catch {
        toast.error("Loan not found");
        navigate("/app/loans");
      }
    };
    if (groupId && id) {
      fetchLoan();
    }
  }, [groupId, id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const amount = parseFloat(formData.amount_paid);
    const totalAmount = toNumber(loan?.total_amount);
    const totalPaid = toNumber(loan?.total_paid);
    const remaining = totalAmount - totalPaid;

    if (!amount || amount <= 0) {
      return toast.error("Enter a valid amount");
    }
    if (amount > remaining) {
      return toast.error(
        `Amount exceeds remaining balance (K${remaining.toFixed(2)})`,
      );
    }
    setLoading(true);
    try {
      await api.post("/loans/repayment", {
        ...formData,
        groupId,
      });
      toast.success("Repayment recorded successfully");
      navigate("/app/loans");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to record payment");
    } finally {
      setLoading(false);
    }
  };

  if (!loan) {
    return (
      <div style={styles.centered}>
        <div style={styles.spinner} />
      </div>
    );
  }

  const totalAmount = toNumber(loan.total_amount);
  const totalPaid = toNumber(loan.total_paid);
  const remaining = totalAmount - totalPaid;

  return (
    <div style={styles.page}>
      {/* Hero header with back button and title */}
      <div style={styles.heroHeader}>
        <div style={styles.circle1} />
        <div style={styles.circle2} />
        <div style={styles.headerRow}>
          <button onClick={() => navigate("/app/loans")} style={styles.backBtn}>
            <FiArrowLeft size={16} color="#A7F3D0" />
          </button>
          <h1 style={styles.pageHeading}>Make Loan Repayment</h1>
        </div>
      </div>

      {/* Floating hero card showing loan amount due */}
      <div style={styles.heroCardWrap}>
        <div style={styles.heroCard}>
          <div style={{ flex: 1 }}>
            <p style={styles.heroLabel}>LOAN REPAYMENT AMOUNT</p>
            <p style={styles.heroAmount}>
              K{remaining.toLocaleString("en", { minimumFractionDigits: 2 })}
            </p>
          </div>
        </div>
      </div>

      {/* Form body */}
      <div style={styles.body}>
        <div style={styles.card}>
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: 10 }}
          >
            {/* Loan info summary (like in request form summary) */}
            <div style={styles.loanSummary}>
              <div style={styles.summaryRow}>
                <span style={styles.summaryLabel}>Member</span>
                <span style={styles.summaryVal}>{loan.fullname}</span>
              </div>
              <div style={styles.summaryRow}>
                <span style={styles.summaryLabel}>Original Principal</span>
                <span style={styles.summaryVal}>
                  K{toNumber(loan.amount).toFixed(2)}
                </span>
              </div>
              <div style={styles.summaryRow}>
                <span style={styles.summaryLabel}>Interest Rate</span>
                <span style={styles.summaryVal}>
                  {toNumber(loan.interest_rate)}%
                </span>
              </div>
              <div style={styles.summaryRow}>
                <span style={styles.summaryLabel}>Total Due</span>
                <span style={styles.summaryVal}>K{totalAmount.toFixed(2)}</span>
              </div>
              <div style={styles.summaryRow}>
                <span style={styles.summaryLabel}>Already Paid</span>
                <span style={styles.summaryVal}>K{totalPaid.toFixed(2)}</span>
              </div>
              <div style={styles.summaryRow}>
                <span style={styles.summaryLabel}>Due Date</span>
                <span style={styles.summaryVal}>
                  {new Date(loan.due_date).toLocaleDateString()}
                </span>
              </div>
              <div
                style={{
                  ...styles.summaryRow,
                  borderTop: "1px solid #D1FAE5",
                  marginTop: 4,
                  paddingTop: 10,
                }}
              >
                <span
                  style={{ fontSize: 14, fontWeight: 700, color: "#065F46" }}
                >
                  Remaining Balance
                </span>
                <span
                  style={{
                    fontSize: 18,
                    fontWeight: 800,
                    color: "#059669",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  K{remaining.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Amount field */}
            <div style={styles.fieldGroup}>
              <label style={styles.fieldLabel}>Amount to Pay</label>
              <div style={styles.inputWrap}>
                <span
                  style={{
                    paddingLeft: 12,
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#9CA3AF",
                  }}
                >
                  K
                </span>
                <input
                  type="number"
                  step="0.01"
                  style={styles.input}
                  placeholder="0.00"
                  value={formData.amount_paid}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      amount_paid: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>

            {/* Payment method */}
            <div style={styles.fieldGroup}>
              <label style={styles.fieldLabel}>Payment Method</label>
              <div style={styles.inputWrap}>
                <FiCreditCard
                  style={{ paddingLeft: 10, color: "#9CA3AF" }}
                  size={14}
                />
                <select
                  style={styles.input}
                  value={formData.payment_method}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      payment_method: e.target.value,
                    })
                  }
                >
                  <option value="cash">Cash</option>
                  <option value="mobile_money">Mobile Money</option>
                  <option value="bank">Bank Transfer</option>
                </select>
              </div>
            </div>

            {/* Payment date */}
            <div style={styles.fieldGroup}>
              <label style={styles.fieldLabel}>Payment Date</label>
              <div style={styles.inputWrap}>
                <FiCalendar
                  style={{ paddingLeft: 10, color: "#9CA3AF" }}
                  size={14}
                />
                <input
                  type="date"
                  style={styles.input}
                  value={formData.payment_date}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      payment_date: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>

            {/* Buttons */}
            <div style={styles.ctaBar}>
              <button
                type="button"
                style={styles.cancelBtn}
                onClick={() => navigate("/app/loans")}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                style={{
                  ...styles.submitBtn,
                  opacity: loading ? 0.5 : 1,
                }}
              >
                {loading ? "Recording..." : "Make Payment"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// ─── Styles ──────────────────────────────────────────────────────────────
const styles = {
  page: {
    display: "flex",
    flexDirection: "column",
    background: "#F8F9FB",
    minHeight: "100vh",
  },
  centered: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#F8F9FB",
  },
  spinner: {
    width: 28,
    height: 28,
    borderRadius: "50%",
    border: "3px solid #E5E7EB",
    borderTopColor: "#059669",
    animation: "spin 0.7s linear infinite",
  },

  heroHeader: {
    background: "#064E3B",
    borderRadius: "0 0 2rem 2rem",
    padding: "1.5rem 1.5rem 3.75rem",
    position: "relative",
    overflow: "hidden",
  },
  circle1: {
    position: "absolute",
    top: -40,
    right: -40,
    width: 180,
    height: 180,
    background: "rgba(255,255,255,0.05)",
    borderRadius: "50%",
  },
  circle2: {
    position: "absolute",
    bottom: -60,
    left: "30%",
    width: 240,
    height: 240,
    background: "rgba(255,255,255,0.04)",
    borderRadius: "50%",
  },
  headerRow: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    position: "relative",
    zIndex: 1,
  },
  pageHeading: {
    fontSize: 18,
    fontWeight: 600,
    color: "#fff",
    margin: 0,
    letterSpacing: "-0.3px",
  },
  backBtn: {
    background: "rgba(255,255,255,0.12)",
    border: "none",
    borderRadius: 10,
    width: 36,
    height: 36,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "background 0.2s",
  },

  heroCardWrap: {
    padding: "0 1rem",
    marginTop: "-1.75rem",
    position: "relative",
    zIndex: 2,
  },
  heroCard: {
    background: "#fff",
    border: "0.5px solid #E5E7EB",
    borderRadius: 16,
    padding: "1.25rem 1.5rem",
    boxShadow: "0 4px 20px rgba(0,0,0,0.10)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heroLabel: {
    fontSize: 11,
    color: "#6B7280",
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    margin: 0,
  },
  heroAmount: {
    fontSize: 34,
    fontWeight: 700,
    color: "#EA580C", // Orange
    margin: "4px 0 2px",
    lineHeight: 1,
    fontVariantNumeric: "tabular-nums",
  },
  heroSub: {
    fontSize: 11,
    color: "#9CA3AF",
    margin: 0,
  },
  heroIconWrap: {
    background: "#D1FAE5",
    borderRadius: "50%",
    width: 50,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  body: { padding: "16px" },
  card: {
    background: "#fff",
    borderRadius: 16,
    padding: 16,
    boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
  },

  loanSummary: {
    background: "#ECFDF5",
    border: "1.5px solid #A7F3D0",
    borderRadius: 14,
    padding: "14px 16px",
    marginBottom: 16,
  },
  summaryRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "4px 0",
  },
  summaryLabel: { fontSize: 13, color: "#047857" },
  summaryVal: {
    fontSize: 14,
    fontWeight: 600,
    color: "#065F46",
    fontVariantNumeric: "tabular-nums",
  },

  fieldGroup: { display: "flex", flexDirection: "column", gap: 5 },
  fieldLabel: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.08em",
    color: "#6B7280",
    textTransform: "uppercase",
    paddingLeft: 2,
  },
  inputWrap: {
    display: "flex",
    alignItems: "center",
    background: "#fff",
    borderRadius: 12,
    border: "1.5px solid #E5E7EB",
    overflow: "hidden",
  },
  input: {
    flex: 1,
    border: "none",
    outline: "none",
    padding: "12px 12px 12px 8px",
    fontSize: 14,
    color: "#1F2937",
    background: "transparent",
    width: "100%",
    fontVariantNumeric: "tabular-nums",
  },
  payFullBtn: {
    background: "none",
    border: "none",
    color: "#D97706",
    fontSize: 12,
    fontWeight: 600,
    cursor: "pointer",
    textAlign: "left",
    paddingLeft: 2,
    marginTop: 4,
  },

  ctaBar: { display: "flex", gap: 10, marginTop: 6 },
  cancelBtn: {
    flex: 1,
    background: "#fff",
    border: "1.5px solid #E5E7EB",
    borderRadius: 12,
    padding: "13px",
    fontSize: 14,
    fontWeight: 600,
    color: "#6B7280",
    cursor: "pointer",
  },
  submitBtn: {
    flex: 2,
    background: "#059669",
    border: "none",
    borderRadius: 12,
    padding: "13px",
    fontSize: 14,
    fontWeight: 700,
    color: "#fff",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default RepaymentForm;
