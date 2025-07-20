import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { dashboardData, dashboardStats } from '../data/staticData';

const bwPalette = ['#111', '#666', '#ddd'];

const DashboardPage = () => (
  <div className="min-h-screen ">
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold  mb-2">Dashboard</h1>
        <p className="text-gray-400">Your analytics overview at a glance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {dashboardStats.map((metric, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                <metric.icon className={`w-6 h-6 ${metric.iconColor}`} />
              </div>
              <span className="text-green-700 text-sm font-medium">{metric.change}</span>
            </div>
            <h3 className="text-gray-500 text-sm font-medium mb-1">{metric.title}</h3>
            <p className="text-black text-2xl font-bold">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-black text-lg font-semibold mb-6">Revenue Trend</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dashboardData.revenue}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="month" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip
                  contentStyle={{
                    background: '#fff',
                    border: '1px solid #222',
                    borderRadius: '12px',
                    color: '#111',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#111"
                  strokeWidth={3}
                  dot={{ fill: '#111', strokeWidth: 2, r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-black text-lg font-semibold mb-6">User Growth</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dashboardData.userGrowth}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="month" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip
                  contentStyle={{
                    background: '#fff',
                    border: '1px solid #222',
                    borderRadius: '12px',
                    color: '#111',
                  }}
                />
                <Bar dataKey="users" fill="#111" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
        <h3 className="text-black text-lg font-semibold mb-6">Device Distribution</h3>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="h-64 w-full lg:w-1/2">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dashboardData.distribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {dashboardData.distribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={bwPalette[index % bwPalette.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: '#fff',
                    border: '1px solid #222',
                    borderRadius: '12px',
                    color: '#111',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="lg:w-1/2 space-y-4">
            {dashboardData.distribution.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{
                    backgroundColor: bwPalette[index % bwPalette.length],
                  }}
                ></div>
                <span className="text-black font-medium">{item.name}</span>
                <span className="text-gray-500">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DashboardPage;
