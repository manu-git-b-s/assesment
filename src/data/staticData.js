import { DollarSign, Users, TrendingUp, Activity } from 'lucide-react';

export const dashboardData = {
  revenue: [
    { month: 'Jan', value: 4000 },
    { month: 'Feb', value: 3000 },
    { month: 'Mar', value: 5000 },
    { month: 'Apr', value: 4500 },
    { month: 'May', value: 6000 },
    { month: 'Jun', value: 5500 },
  ],
  userGrowth: [
    { month: 'Jan', users: 1200 },
    { month: 'Feb', users: 1900 },
    { month: 'Mar', users: 3000 },
    { month: 'Apr', users: 3500 },
    { month: 'May', users: 4200 },
    { month: 'Jun', users: 4800 },
  ],
  distribution: [
    { name: 'Desktop', value: 45 },
    { name: 'Mobile', value: 35 },
    { name: 'Tablet', value: 20 },
  ],
};

export const dashboardStats = [
  {
    title: 'Total Revenue',
    value: '$24,500',
    change: '+12%',
    icon: DollarSign,
    iconColor: 'text-green-600',
  },
  {
    title: 'Active Users',
    value: '4,823',
    change: '+8%',
    icon: Users,
    iconColor: 'text-blue-600',
  },
  {
    title: 'Conversion Rate',
    value: '3.2%',
    change: '+0.4%',
    icon: TrendingUp,
    iconColor: 'text-purple-600',
  },
  {
    title: 'Avg. Session',
    value: '4m 32s',
    change: '+1.2%',
    icon: Activity,
    iconColor: 'text-amber-600',
  },
];

export const landingPageStats = [
  {
    icon: TrendingUp,
    iconColor: 'text-blue-600',
    title: 'Real-time Analytics',
    description: 'Monitor your metrics as they happen',
  },
  {
    icon: Users,
    iconColor: 'text-green-600',
    title: 'Team Collaboration',
    description: 'Share insights across your organization',
  },
  {
    icon: Activity,
    iconColor: 'text-purple-600',
    title: 'Smart Insights',
    description: 'AI-powered recommendations',
  },
];

export const initialMessages = [
  {
    type: 'assistant',
    content: "Hello! I'm your AI assistant. How can I help you today?",
    timestamp: new Date(Date.now() - 3600000),
  },
  {
    type: 'user',
    content: 'Can you help me analyze my dashboard metrics?',
    timestamp: new Date(Date.now() - 3500000),
  },
  {
    type: 'assistant',
    content:
      'Of course! I can see your revenue is up 12% this month and user engagement has increased by 8%. Would you like me to dive deeper into any specific metrics?',
    timestamp: new Date(Date.now() - 3400000),
  },
  {
    type: 'user',
    content: 'What about the conversion rates?',
    timestamp: new Date(Date.now() - 3300000),
  },
  {
    type: 'assistant',
    content:
      'Your conversion rate is currently at 3.2%, which is above industry average. The recent A/B test on your landing page contributed to a 0.4% improvement.',
    timestamp: new Date(Date.now() - 3200000),
  },
];

export const defaultSessions = [
  {
    id: 1,
    title: 'Chat 1',
    messages: initialMessages,
  },
  {
    id: 2,
    title: 'Chat 2',
    messages: [
      {
        type: 'assistant',
        content: 'Welcome back! How can I assist you?',
        timestamp: new Date(Date.now() - 2800000),
      },
      {
        type: 'user',
        content: "Show me yesterday's user growth stats.",
        timestamp: new Date(Date.now() - 2700000),
      },
      {
        type: 'assistant',
        content: 'User growth yesterday was 9%. Would you like a detailed breakdown?',
        timestamp: new Date(Date.now() - 2600000),
      },
    ],
  },
];
