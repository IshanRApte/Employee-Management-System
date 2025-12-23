import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEmployees() {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setEmployees(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchEmployees();
  }, []);

  if (loading) return <h2 className="loading-text">Loading employees...</h2>;

  return (
    <div className="employee-list-page">
      <h2 className="page-title">Employee Directory</h2>

      <div className="employee-cards">
        {employees.map((emp) => (
          <div key={emp.id} className="employee-card">
            <div className="employee-avatar">
              {emp.name.charAt(0)}
            </div>
            <h3 className="employee-name">{emp.name}</h3>
            <p className="employee-email">{emp.email}</p>
            <Link to={`/employee/${emp.id}`} className="details-btn">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
