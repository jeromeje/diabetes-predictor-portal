
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Header from "@/components/Header";

const History = () => {
  // TODO: Fetch actual history from backend
  const mockHistory = [
    {
      id: 1,
      date: "2024-03-15",
      time: "14:30",
      glucose: 95,
      bloodPressure: 120,
      insulin: 80,
      bmi: 24.5,
      result: "Negative",
    },
    {
      id: 2,
      date: "2024-03-10",
      time: "09:15",
      glucose: 140,
      bloodPressure: 130,
      insulin: 95,
      bmi: 26.2,
      result: "Positive",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />
      <div className="container py-8">
        <div className="bg-white rounded-lg shadow animate-fade-in">
          <div className="p-6 border-b">
            <h2 className="text-2xl font-semibold">Assessment History</h2>
          </div>
          <div className="p-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Glucose</TableHead>
                  <TableHead>Blood Pressure</TableHead>
                  <TableHead>Insulin</TableHead>
                  <TableHead>BMI</TableHead>
                  <TableHead>Result</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockHistory.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell>{record.date}</TableCell>
                    <TableCell>{record.time}</TableCell>
                    <TableCell>{record.glucose}</TableCell>
                    <TableCell>{record.bloodPressure}</TableCell>
                    <TableCell>{record.insulin}</TableCell>
                    <TableCell>{record.bmi}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${
                          record.result === "Positive"
                            ? "bg-destructive/10 text-destructive"
                            : "bg-green-50 text-green-700"
                        }`}
                      >
                        {record.result}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
