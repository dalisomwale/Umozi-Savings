import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FiUsers,
  FiDollarSign,
  FiBookOpen,
  FiTrendingUp,
  FiShield,
  FiGlobe,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCheck,
  FiX,
  FiAlertTriangle,
  FiPieChart,
} from "react-icons/fi";
import landpagePhoto from "../assets/landpagephoto.jpeg";

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: FiUsers,
      title: "Member Management",
      description:
        "Easily manage group members, track their profiles, savings, and loan history.",
    },
    {
      icon: FiDollarSign,
      title: "Savings Tracking",
      description:
        "Record and monitor member savings with detailed reports and history.",
    },
    {
      icon: FiBookOpen,
      title: "Loan Management",
      description:
        "Request, approve, and manage loans with interest calculations and repayment tracking.",
    },
    {
      icon: FiTrendingUp,
      title: "Financial Reports",
      description:
        "Generate insightful reports on group funds, active loans, and member contributions.",
    },
    {
      icon: FiAlertTriangle,
      title: "Fines Management",
      description:
        "Issue fines for rule violations, track payments, and maintain fine history.",
    },
    {
      icon: FiPieChart,
      title: "Share-Out Management",
      description:
        "Automatically calculate member share-outs based on savings, interest, and fines.",
    },
  ];

  // ─── Pricing Plans ─────────────────────────────────────────────────────
  const plans = [
    {
      id: "basic",
      name: "Basic Plan",
      price: "K75",
      period: "/month",
      badge: "For Small Groups",
      memberLimit: "Up to 20 members",
      features: [
        "Savings Management",
        "Loan Management",
        "Fine Management",
        "Share-Out Management",
        "Member Dashboard",
        "Admin Dashboard",
        "Basic Reports & Statistics",
      ],
      excluded: [
        "Activity Tracking",
        "Member Management Tools",
        "Role Management",
        "Advanced Reports",
        "PDF/Excel Export",
        "Multiple Admins",
      ],
      cta: "Start Basic Plan",
      popular: false,
    },
    {
      id: "standard",
      name: "Standard Plan",
      price: "K150",
      period: "/month",
      badge: "Most Popular",
      memberLimit: "Up to 50 members",
      features: [
        "Everything in Basic Plan",
        "Activity Tracking",
        "Member Management",
        "Role Management (Admin, Treasurer, Secretary, Member)",
        "Advanced Reports",
        "PDF Export",
        "Excel Export",
        "Multiple Admin Support",
      ],
      excluded: [],
      cta: "Choose Standard",
      popular: true,
    },
    {
      id: "premium",
      name: "Premium Plan",
      price: "K300",
      period: "/month",
      badge: "Unlimited Members",
      memberLimit: "Unlimited Members",
      features: [
        "Everything in Standard Plan",
        "Unlimited Members",
        "Priority Support",
        "Advanced Analytics",
        "Enhanced Audit Logs",
        "Early Access to New Features",
      ],
      excluded: [],
      cta: "Go Premium",
      popular: false,
    },
  ];

  // ─── FAQ Data ──────────────────────────────────────────────────────────
  const faqs = [
    {
      q: "What happens if I exceed member limit?",
      a: "You can easily upgrade to a higher plan at any time. If you exceed your limit, we'll notify you and give you a grace period to upgrade before any restrictions apply.",
    },
    {
      q: "Can I upgrade or downgrade plans anytime?",
      a: "Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades will apply from your next billing cycle.",
    },
    {
      q: "Is my data secure?",
      a: "Absolutely. We use industry‑standard encryption and secure authentication to protect your data. Your information is never shared with third parties.",
    },
    {
      q: "Can village banks use this without internet?",
      a: "Umozi Savings is designed for online access, but we're developing offline‑first features. For now, you'll need an internet connection to sync data, but you can view cached data offline.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section with Background Image */}
      <div
        className="relative bg-cover bg-center bg-no-repeat text-white min-h-[70vh] md:min-h-[80vh] flex items-center"
        style={{ backgroundImage: `url(${landpagePhoto})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/90 via-emerald-800/80 to-emerald-700/60"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-sm border border-white/10">
                <svg
                  width={64}
                  height={64}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-amber-400"
                >
                  <path
                    d="M4 9.5L12 4L20 9.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <rect
                    x="6"
                    y="9.5"
                    width="12"
                    height="12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <line
                    x1="9"
                    y1="12"
                    x2="9"
                    y2="21.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <line
                    x1="12"
                    y1="12"
                    x2="12"
                    y2="21.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <line
                    x1="15"
                    y1="12"
                    x2="15"
                    y2="21.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
              Umozi Savings
              <span className="block text-emerald-200 text-2xl md:text-3xl mt-2 drop-shadow-md">
                A Village Banking System
              </span>
            </h1>
            <p className="text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto mb-8 drop-shadow-md">
              Designed for village banking groups to manage savings, loans,
              repayments, fines, share‑outs and reports easily and
              transparently.
            </p>
            <div className="flex flex-row flex-wrap gap-4 justify-center">
              <button
                onClick={() => navigate("/login")}
                className="border border-amber-400 hover:border-amber-300 hover:bg-amber-500/10 text-white px-8 py-3 rounded-lg font-semibold transition shadow-lg"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Features Section ──────────────────────────────────────────── */}
      <div className="py-20 md:py-28 bg-gradient-to-b from-white to-emerald-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight">
              Our Features
            </h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
              Everything you need to run your village banking group efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col items-start"
                >
                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/70 p-4 rounded-xl mb-5 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="text-emerald-700" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── Pricing Section ───────────────────────────────────────────── */}
      <div className="py-16 md:py-24 bg-gradient-to-b from-white to-emerald-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Monthly Plans
            </h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Choose the plan that fits your group size and needs. Upgrade or
              downgrade anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col ${
                  plan.popular
                    ? "ring-2 ring-amber-400 scale-105 md:scale-105 hover:scale-105"
                    : "hover:scale-[1.02]"
                }`}
              >
                {plan.badge && (
                  <span
                    className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-2 self-start ${
                      plan.popular
                        ? "bg-amber-500 text-white"
                        : "bg-emerald-100 text-emerald-800"
                    }`}
                  >
                    {plan.badge}
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-800">{plan.name}</h3>
                <div className="mt-2 flex items-baseline">
                  <span className="text-3xl font-extrabold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="ml-1 text-gray-500">{plan.period}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{plan.memberLimit}</p>

                <ul className="mt-4 space-y-2 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <FiCheck className="text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {plan.excluded &&
                    plan.excluded.map((excl, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-400"
                      >
                        <FiX className="text-gray-400 mt-0.5 flex-shrink-0" />
                        <span>{excl}</span>
                      </li>
                    ))}
                </ul>

                <button
                  onClick={() => navigate("/register")}
                  className={`mt-6 w-full py-2 px-4 rounded-lg font-semibold transition ${
                    plan.popular
                      ? "bg-amber-500 hover:bg-amber-600 text-white"
                      : "bg-emerald-600 hover:bg-emerald-700 text-white"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── FAQ Section ────────────────────────────────────────────────── */}
      <div className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-600 mt-4">
              Quick answers to common questions about Umozi Savings.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start gap-4">
                  <span className="text-amber-500 font-bold text-lg mt-0.5 select-none">
                    Q.
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {faq.q}
                    </h3>
                    <p className="mt-2 text-gray-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 md:py-24 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              Ready to Get Started?
            </h2>
            <p className="text-gray-700 mb-6">
              Create an account, join a group or create your own and start
              managing savings, loans, fines, share‑outs and reports with ease.
            </p>
            <div className="flex flex-row gap-3 justify-center">
              <button
                onClick={() => navigate("/login")}
                className="bg-emerald-600/80 backdrop-blur-sm hover:bg-emerald-600 text-white px-5 py-2 rounded-lg font-semibold transition"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="bg-amber-500/80 backdrop-blur-sm hover:bg-amber-500 text-white px-5 py-2 rounded-lg font-semibold transition"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-emerald-900 text-emerald-200 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="bg-white/10 p-1.5 rounded-lg">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-amber-400"
                >
                  <path
                    d="M4 9.5L12 4L20 9.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <rect
                    x="6"
                    y="9.5"
                    width="12"
                    height="12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <line
                    x1="9"
                    y1="12"
                    x2="9"
                    y2="21.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <line
                    x1="12"
                    y1="12"
                    x2="12"
                    y2="21.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <line
                    x1="15"
                    y1="12"
                    x2="15"
                    y2="21.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
              </div>
              <span className="font-semibold">Umozi Savings</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-center">
              <div className="flex items-center gap-2">
                <FiMail className="text-amber-400" size={14} />
                <span>info@umozisavings.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FiPhone className="text-amber-400" size={14} />
                <span>+260 772 387 373</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMapPin className="text-amber-400" size={14} />
                <span>Lusaka, Zambia</span>
              </div>
            </div>
          </div>
          <div className="text-center text-xs text-emerald-300/70 mt-6 pt-4 border-t border-emerald-800">
            &copy; 2026 Umozi Savings – A Village Banking System. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
