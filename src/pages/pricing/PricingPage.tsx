import {
  Check,
  Palette,
  Zap,
  Bot,
  Smartphone,
  Shield,
  Star,
  Download,
  Mail,
  Crown,
  Users,
  BarChart3,
  Sparkles,
} from "lucide-react";

const PricingPage = () => {
  const plans = [
    {
      name: "Free",
      price: 0,
      period: "forever",
      description: "Perfect for getting started with basic resume building",
      features: [
        { icon: <Palette className="w-5 h-5" />, text: "1 resume template" },
        { icon: <Zap className="w-5 h-5" />, text: "Basic editing tools" },
        { icon: <Download className="w-5 h-5" />, text: "PDF download" },
        { icon: <Mail className="w-5 h-5" />, text: "Email support" },
      ],
      buttonText: "Get Started Free",
      buttonStyle:
        "bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-gray-300",
      popular: false,
    },
    {
      name: "Pro",
      price: 9,
      period: "/month",
      description: "Best for job seekers who want professional results",
      features: [
        { icon: <Crown className="w-5 h-5" />, text: "15+ premium templates" },
        {
          icon: <Sparkles className="w-5 h-5" />,
          text: "Advanced formatting tools",
        },
        { icon: <Bot className="w-5 h-5" />, text: "AI-powered suggestions" },
        {
          icon: <Download className="w-5 h-5" />,
          text: "Multiple file formats",
        },
        { icon: <Mail className="w-5 h-5" />, text: "Cover letter builder" },
        { icon: <Star className="w-5 h-5" />, text: "Priority support" },
      ],
      buttonText: "Start Pro Trial",
      buttonStyle:
        "bg-blue-500 text-white hover:bg-blue-600 shadow-lg hover:shadow-xl",
      popular: true,
    },
    {
      name: "Enterprise",
      price: 29,
      period: "/month",
      description: "For teams and organizations with multiple users",
      features: [
        { icon: <Check className="w-5 h-5" />, text: "Everything in Pro" },
        { icon: <Users className="w-5 h-5" />, text: "Team collaboration" },
        { icon: <Palette className="w-5 h-5" />, text: "Brand customization" },
        {
          icon: <BarChart3 className="w-5 h-5" />,
          text: "Analytics dashboard",
        },
        { icon: <Zap className="w-5 h-5" />, text: "Bulk operations" },
        { icon: <Shield className="w-5 h-5" />, text: "Dedicated support" },
      ],
      buttonText: "Contact Sales",
      buttonStyle:
        "bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-gray-300",
      popular: false,
    },
  ];

  const features = [
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Professional Templates",
      description:
        "Choose from expertly designed templates that catch recruiters' attention",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Quick & Easy",
      description:
        "Build your resume in minutes with our intuitive drag-and-drop editor",
    },
    {
      icon: <Bot className="w-12 h-12" />,
      title: "AI-Powered",
      description:
        "Get smart suggestions and content optimization based on your industry",
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile Friendly",
      description: "Edit and create resumes on any device, anywhere, anytime",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 drop-shadow-sm">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Create professional resumes that get you hired. Pick the plan that's
            right for you and start building your dream career today.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                plan.popular
                  ? "border-4 border-blue-500 md:scale-110"
                  : "border border-gray-200"
              }`}
              style={{
                background: plan.popular
                  ? "linear-gradient(135deg, #f8faff 0%, #f1f5ff 100%)"
                  : "white",
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {plan.description}
                </p>

                <div className="flex items-baseline justify-center mb-8">
                  <span className="text-2xl font-semibold text-gray-400 mr-1">
                    $
                  </span>
                  <span className="text-5xl font-bold text-gray-800">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="text-green-500 mr-3 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <span className="text-gray-700 font-medium">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Why Choose Our Resume Builder?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-500 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Guarantee */}
          <div className="text-center mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-200">
            <div className="flex items-center justify-center mb-2">
              <Shield className="w-8 h-8 text-blue-500 mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">
                30-Day Money-Back Guarantee
              </h3>
            </div>
            <p className="text-gray-600">
              Not satisfied? Get a full refund within 30 days, no questions
              asked.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
