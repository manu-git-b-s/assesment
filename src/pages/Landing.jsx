import { BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { landingPageStats } from '../data/staticData';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-3xl p-12 border border-gray-200 shadow-lg">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-black rounded-2xl mb-6 shadow">
              <BarChart3 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Analytics <span className="text-gray-700">Reimagined</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Transform your data into actionable insights with our modern analytics platform. Built
              for teams that move fast and think ahead.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate('/dashboard')}
              className="px-8 py-4 bg-black text-white font-semibold rounded-xl transition-all duration-300 hover:bg-gray-900 hover:scale-105 hover:shadow-xl shadow"
            >
              Get Started
            </button>
            <button className="px-8 py-4 text-black font-semibold rounded-xl border border-gray-300 bg-white hover:bg-gray-50 transition-all duration-300">
              Learn More
            </button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {landingPageStats.map((feature, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <feature.icon className={`w-8 h-8 mb-4 ${feature.iconColor}`} />
                <h3 className="text-black font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
