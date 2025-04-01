import {
    BarChart3,
    Receipt,
    PieChart,
    CreditCard,
    Globe,
    Zap,
    Heart,
    Target,
    Users,
    Shield,
  } from "lucide-react";
  
  // Stats Data
  export const statsData = [
    {
      value: "100K+",
      label: "Active Users",
    },
    {
      value: "$5B+",
      label: "Transactions Tracked",
    },
    {
      value: "99.99%",
      label: "Uptime",
    },
    {
      value: "4.95/5",
      label: "User Rating",
    },
  ];
  
  // Features Data
  export const featuresData = [
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: "AI-Powered Analytics",
      description:
        "Unlock deep financial insights with our cutting-edge machine learning analytics engine",
    },
    {
      icon: <Receipt className="h-8 w-8 text-blue-600" />,
      title: "Instant Receipt Processing",
      description:
        "Scan and categorize receipts in seconds with our advanced computer vision technology",
    },
    {
      icon: <PieChart className="h-8 w-8 text-blue-600" />,
      title: "Smart Budget Planning",
      description: "Get personalized budget suggestions based on your spending habits",
    },
    {
      icon: <CreditCard className="h-8 w-8 text-blue-600" />,
      title: "Unified Account Dashboard",
      description: "View and manage all your financial accounts from a single dashboard",
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Global Currency Support",
      description: "Seamless transactions across 150+ currencies with real-time exchange rates",
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Predictive Insights",
      description: "Stay ahead with AI-driven predictions and proactive financial advice",
    },
  ];
  
  // How It Works Data
  export const howItWorksData = [
    {
      icon: <CreditCard className="h-8 w-8 text-blue-600" />,
      title: "1. Quick Setup",
      description:
        "Start your financial journey with our 60-second secure onboarding process",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: "2. Smart Tracking",
      description:
        "Watch as our AI automatically organizes and analyzes your transactions",
    },
    {
      icon: <PieChart className="h-8 w-8 text-blue-600" />,
      title: "3. Transform Your Finances",
      description:
        "Make informed decisions with personalized insights and actionable recommendations",
    },
  ];
  
  // About Us Data
  export const aboutUsData = {
    mission: "Empowering individuals and businesses with intelligent financial management through cutting-edge AI technology.",
    description: "At PocketMind, we believe that financial success should be accessible to everyone. Our team of passionate experts combines artificial intelligence with financial expertise to revolutionize how you manage your money.",
    values: [
      {
        icon: <Heart className="h-8 w-8 text-blue-600" />,
        title: "Customer First",
        description: "Your financial success is our top priority. We're committed to providing the best possible experience."
      },
      {
        icon: <Shield className="h-8 w-8 text-blue-600" />,
        title: "Security & Trust",
        description: "Bank-level security and privacy protection for your peace of mind."
      },
      {
        icon: <Target className="h-8 w-8 text-blue-600" />,
        title: "Innovation",
        description: "Continuously pushing boundaries with cutting-edge AI technology."
      },
      {
        icon: <Users className="h-8 w-8 text-blue-600" />,
        title: "Inclusive Finance",
        description: "Making smart financial management accessible to everyone."
      }
    ],
    team: [
      {
        name: "Sarah Chen",
        role: "CEO & Co-founder",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        description: "Former fintech executive with 15+ years of experience in AI and finance."
      },
      {
        name: "Michael Rodriguez",
        role: "CTO & Co-founder",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
        description: "AI researcher and architect with multiple patents in financial technology."
      },
      {
        name: "Emily Watson",
        role: "Head of Product",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
        description: "Product visionary with a track record of launching successful fintech solutions."
      },
      {
        name: "James Park",
        role: "Head of Customer Success",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
        description: "Dedicated to ensuring the best experience for our growing user base."
      }
    ]
  };

  // Testimonials Data
  export const testimonialsData = [
    {
      name: "Alex Thompson",
      role: "Tech Startup Founder",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote:
        "The predictive analytics have revolutionized our financial planning. We've reduced operational costs by 30% thanks to the AI-driven insights.",
    },
    {
      name: "Nina Patel",
      role: "Digital Nomad",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      quote:
        "As someone who works globally, the multi-currency feature and instant receipt scanning have made managing finances across borders effortless.",
    },
    {
      name: "David Martinez",
      role: "Personal Finance Coach",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      quote:
        "The platform's smart budgeting tools and automated insights have helped my clients achieve their financial goals faster than ever before.",
    },
  ];