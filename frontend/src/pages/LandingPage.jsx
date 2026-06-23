import React, { useState, useRef } from "react";
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
  FiPlay,
  FiUserPlus,
  FiUsers as FiGroup,
  FiDollarSign as FiMoney,
  FiFileText,
  FiUserCheck,
  FiUser,
  FiCalendar,
  FiClock,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import landpagePhoto from "../assets/landpagephoto.jpeg";
import adminVideo from "../assets/getstartedadmin.webm";
import memberVideo from "../assets/getstartedmember.webm";

// ─── Feature Images ─────────────────────────────────────────────────────
import membersImg from "../assets/members.png";
import savingsImg from "../assets/savings.png";
import loansImg from "../assets/loans.png";
import finesImg from "../assets/fines.png";
import shareOutImg from "../assets/share-out.png";
import reportsImg from "../assets/reports.png";

const LandingPage = () => {
  const navigate = useNavigate();
  const adminVideoRef = useRef(null);
  const memberVideoRef = useRef(null);
  const [adminPlaying, setAdminPlaying] = useState(false);
  const [memberPlaying, setMemberPlaying] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  // ─── Scroll to CTA ──────────────────────────────────────────────────
  const scrollToCTA = () => {
    const ctaElement = document.getElementById("cta-section");
    if (ctaElement) {
      ctaElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // ─── Features with actual images ─────────────────────────────────────
  const features = [
    {
      title: "Member Management",
      description:
        "Easily manage group members, track their profiles, savings, and loan history.",
      image: membersImg,
    },
    {
      title: "Savings Tracking",
      description:
        "Record and monitor member savings with detailed reports and history.",
      image: savingsImg,
    },
    {
      title: "Loan Management",
      description:
        "Request, approve, and manage loans with interest calculations and repayment tracking.",
      image: loansImg,
    },
    {
      title: "Fines Management",
      description:
        "Issue fines for rule violations, track payments, and maintain fine history.",
      image: finesImg,
    },
    {
      title: "Share-Out Management",
      description:
        "Automatically calculate member share-outs based on savings, interest, and fines.",
      image: shareOutImg,
    },
    {
      title: "Financial Reports",
      description:
        "Generate insightful reports on group funds, active loans, and member contributions.",
      image: reportsImg,
    },
  ];

  // ─── Admin Steps ──────────────────────────────────────────────────────
  const adminSteps = [
    {
      icon: FiUserPlus,
      title: "Create Account",
      desc: "Sign up as an admin in seconds.",
    },
    {
      icon: FiGroup,
      title: "Create a Group",
      desc: "Start your village banking group.",
    },
    {
      icon: FiUsers,
      title: "Add Members",
      desc: "Invite by email or share the group code so they join.",
    },
    {
      icon: FiCalendar,
      title: "Create & Activate a Cycle",
      desc: "Set the cycle dates and open it for savings and loans.",
    },
    {
      icon: FiClock,
      title: "Set Rules",
      desc: "Define fines, meeting dates, and contribution rules.",
    },
  ];

  // ─── Member Steps ──────────────────────────────────────────────────────
  const memberSteps = [
    {
      icon: FiUserPlus,
      title: "Create Account",
      desc: "Sign up as a member in seconds.",
    },
    {
      icon: FiGroup,
      title: "Join a Group",
      desc: "Use a join code to become a member.",
    },
    {
      icon: FiDollarSign,
      title: "Save Money",
      desc: "Record your savings regularly.",
    },
    {
      icon: FiBookOpen,
      title: "Request a Loan",
      desc: "Apply for a loan when you need funds.",
    },
    {
      icon: FiPieChart,
      title: "Receive Share-Out",
      desc: "Get your share of group profits.",
    },
  ];

  // ─── Video Handlers ──────────────────────────────────────────────────
  const handleAdminMouseEnter = () => {
    if (adminVideoRef.current) {
      adminVideoRef.current.play();
      setAdminPlaying(true);
    }
  };
  const handleAdminMouseLeave = () => {
    if (adminVideoRef.current) {
      adminVideoRef.current.pause();
      setAdminPlaying(false);
    }
  };
  const toggleAdminPlay = () => {
    if (adminVideoRef.current) {
      if (adminPlaying) {
        adminVideoRef.current.pause();
        setAdminPlaying(false);
      } else {
        adminVideoRef.current.play();
        setAdminPlaying(true);
      }
    }
  };

  const handleMemberMouseEnter = () => {
    if (memberVideoRef.current) {
      memberVideoRef.current.play();
      setMemberPlaying(true);
    }
  };
  const handleMemberMouseLeave = () => {
    if (memberVideoRef.current) {
      memberVideoRef.current.pause();
      setMemberPlaying(false);
    }
  };
  const toggleMemberPlay = () => {
    if (memberVideoRef.current) {
      if (memberPlaying) {
        memberVideoRef.current.pause();
        setMemberPlaying(false);
      } else {
        memberVideoRef.current.play();
        setMemberPlaying(true);
      }
    }
  };

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
        "Savings Management",
        "Loan Management",
        "Fine Management",
        "Share-Out Management",
        "Member Dashboard",
        "Admin Dashboard",
        "Activity Tracking",
        "Member Management",
        "Role Management (Admin, Treasurer, Secretary)",
        "Advanced Reports",
        "PDF/Excel Export",
      ],
      excluded: [],
      cta: "Choose Standard",
      popular: true,
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

  // ─── FAQ Accordion Handlers ──────────────────────────────────────────
  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section */}
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
              repayments, fines, and share‑outs easily and transparently.
            </p>
            <div className="flex flex-row flex-wrap gap-4 justify-center">
              <button
                onClick={scrollToCTA}
                className="border border-amber-400 hover:border-amber-300 hover:bg-amber-500/10 text-white px-8 py-3 rounded-lg font-semibold transition shadow-lg"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ─── How It Works ──────────────────────────────────────────────── */}
      <div className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight">
              How It Works
            </h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
              A guide on how to get started with Umozi Savings using simple
              steps for both admins and members.
            </p>
          </div>

          {/* Admin Row */}
          <div className="mb-16">
            <div className="flex flex-col items-center md:items-start mb-8">
              <h3 className="text-2xl font-bold text-gray-800">For Admins</h3>
              <div className="w-16 h-1 bg-emerald-400 mt-2 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                {adminSteps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-emerald-100/50 to-emerald-200/50 rounded-full p-3 flex-shrink-0 mt-1">
                        <Icon className="text-emerald-600" size={20} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-800">
                          {step.title}
                        </h4>
                        <p className="text-gray-600">{step.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="p-[1.5px] rounded-2xl bg-gradient-to-br from-emerald-300/70 to-emerald-500/70 order-1 lg:order-2">
                <div
                  className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                  onMouseEnter={handleAdminMouseEnter}
                  onMouseLeave={handleAdminMouseLeave}
                  onClick={toggleAdminPlay}
                >
                  <video
                    ref={adminVideoRef}
                    src={adminVideo}
                    className="w-full h-auto object-cover aspect-video"
                    muted
                    playsInline
                    loop
                  />
                  {!adminPlaying && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition">
                      <div className="bg-white/90 rounded-full p-5 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <FiPlay className="text-amber-500 text-3xl ml-1" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Member Row */}
          <div>
            <div className="flex flex-col items-center md:items-start mb-8">
              <h3 className="text-2xl font-bold text-gray-800">For Members</h3>
              <div className="w-16 h-1 bg-emerald-400 mt-2 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="p-[1.5px] rounded-2xl bg-gradient-to-br from-emerald-300/70 to-emerald-500/70 order-1">
                <div
                  className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                  onMouseEnter={handleMemberMouseEnter}
                  onMouseLeave={handleMemberMouseLeave}
                  onClick={toggleMemberPlay}
                >
                  <video
                    ref={memberVideoRef}
                    src={memberVideo}
                    className="w-full h-auto object-cover aspect-video"
                    muted
                    playsInline
                    loop
                  />
                  {!memberPlaying && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition">
                      <div className="bg-white/90 rounded-full p-5 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <FiPlay className="text-amber-500 text-3xl ml-1" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="space-y-6 order-2">
                {memberSteps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-emerald-100/50 to-emerald-200/50 rounded-full p-3 flex-shrink-0 mt-1">
                        <Icon className="text-emerald-600" size={20} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-800">
                          {step.title}
                        </h4>
                        <p className="text-gray-600">{step.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
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
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-[1.5px] rounded-2xl bg-gradient-to-t from-orange-300/10 to-amber-500/10 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col h-full">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="p-8 flex flex-col items-start flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Pricing Section ───────────────────────────────────────────── */}
      <div className="py-16 md:py-24 bg-gradient-to-b from-white to-emerald-50/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Subscription Plans
            </h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Choose the plan that fits your group size and needs. Upgrade or
              downgrade anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch justify-center">
            {plans.map((plan) => {
              const cardContent = (
                <>
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
                  <h3 className="text-xl font-bold text-gray-800">
                    {plan.name}
                  </h3>
                  <div className="mt-2 flex items-baseline">
                    <span className="text-3xl font-extrabold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="ml-1 text-gray-500">{plan.period}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {plan.memberLimit}
                  </p>

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
                </>
              );

              if (plan.popular) {
                return (
                  <div
                    key={plan.id}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col ring-2 ring-amber-400 hover:scale-[1.02]"
                  >
                    {cardContent}
                  </div>
                );
              }

              return (
                <div
                  key={plan.id}
                  className="p-[1.5px] rounded-2xl bg-gradient-to-br from-emerald-300/70 to-emerald-500/70 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col h-full">
                    {cardContent}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── FAQ Section – Two Columns ────────────────────────────────── */}
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div key={idx} className="border-b border-gray-200 pb-4">
                  <button
                    className="flex justify-between items-center w-full text-left group"
                    onClick={() => toggleFaq(idx)}
                  >
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-emerald-700 transition-colors duration-200">
                      {faq.q}
                    </h3>
                    <span className="ml-4 flex-shrink-0 text-amber-500 transition-transform duration-200">
                      {isOpen ? (
                        <FiChevronUp size={22} />
                      ) : (
                        <FiChevronDown size={22} />
                      )}
                    </span>
                  </button>
                  <div
                    className={`mt-2 text-gray-600 leading-relaxed overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="pb-2">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── CTA Section ────────────────────────────────────────────────── */}
      <div
        id="cta-section"
        className="py-16 md:py-24 bg-gradient-to-b from-emerald-50 to-white"
      >
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              Ready to Get Started?
            </h2>
            <p className="text-gray-700 mb-6">
              Create an account, join a group or create your own and start
              managing savings, loans, fines, and share‑outs with ease.
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
