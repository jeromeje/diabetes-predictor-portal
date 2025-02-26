
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import { Activity, History, LineChart, UserCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // TODO: Replace with actual user data from authentication
  const user = {
    name: "John Doe",
    assessments: 5,
    lastAssessment: "2024-03-15",
  };

  const dashboardItems = [
    {
      title: "New Assessment",
      description: "Start a new diabetes risk assessment",
      icon: Activity,
      link: "/prediction",
      color: "text-primary",
    },
    {
      title: "Assessment History",
      description: "View your previous assessments",
      icon: History,
      link: "/history",
      color: "text-blue-500",
    },
    {
      title: "Health Trends",
      description: "Analyze your health metrics over time",
      icon: LineChart,
      link: "/history",
      color: "text-green-500",
    },
    {
      title: "Profile",
      description: "Manage your account settings",
      icon: UserCircle,
      link: "/profile",
      color: "text-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Welcome back, {user.name}</h1>
          <p className="text-muted-foreground mt-2">
            You've completed {user.assessments} assessments. Last check: {user.lastAssessment}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dashboardItems.map((item, index) => (
            <Link to={item.link} key={index}>
              <Card className="h-full transition-all hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <item.icon className={`w-12 h-12 ${item.color}`} />
                    <div>
                      <CardTitle className="mb-2">{item.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
