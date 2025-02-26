
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import Header from "@/components/Header";

const Dashboard = () => {
  const { toast } = useToast();
  const [prediction, setPrediction] = useState<boolean | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement actual prediction logic
    const randomPrediction = Math.random() > 0.5;
    setPrediction(randomPrediction);
    toast({
      title: "Prediction Complete",
      description: randomPrediction
        ? "Risk of diabetes detected. Please consult a healthcare professional."
        : "No significant risk detected. Keep maintaining a healthy lifestyle!",
      variant: randomPrediction ? "destructive" : "default",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <div className="container py-8">
        <Card className="max-w-2xl mx-auto animate-fade-in">
          <CardHeader>
            <CardTitle>Diabetes Risk Assessment</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="glucose">Glucose Level</Label>
                  <Input
                    id="glucose"
                    type="number"
                    placeholder="Enter glucose level"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bloodPressure">Blood Pressure</Label>
                  <Input
                    id="bloodPressure"
                    type="number"
                    placeholder="Enter blood pressure"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="insulin">Insulin Level</Label>
                  <Input
                    id="insulin"
                    type="number"
                    placeholder="Enter insulin level"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bmi">BMI</Label>
                  <Input id="bmi" type="number" placeholder="Enter BMI" required />
                </div>
              </div>
              <Button type="submit" className="w-full">
                Predict Risk
              </Button>
            </form>

            {prediction !== null && (
              <div
                className={`mt-6 p-4 rounded-lg ${
                  prediction
                    ? "bg-destructive/10 text-destructive"
                    : "bg-green-50 text-green-700"
                }`}
              >
                <h3 className="font-semibold">Prediction Result:</h3>
                <p>
                  {prediction
                    ? "Risk of diabetes detected. Please consult a healthcare professional."
                    : "No significant risk detected. Keep maintaining a healthy lifestyle!"}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
