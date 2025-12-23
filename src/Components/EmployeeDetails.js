import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function EmployeeDetails() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEmployee() {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setEmployee(res.data);
      setLoading(false);
    }

    fetchEmployee();
  }, [id]);

  if (loading) {
    return <h2 className="loading-text">Loading employee #{id}...</h2>;
  }

  return (
    <div className="employee-page">
      <div className="employee-card">
        <div className="employee-avatar">
          {employee.name.charAt(0)}
        </div>

        <h2 className="employee-name">{employee.name}</h2>
        <p className="employee-username">@{employee.username}</p>

        <div className="employee-info">
          <p><span>Email:</span>{<a href={`mailto:${employee.email}`}>{employee.email}</a>}</p>
          <p><span>Phone:</span> {employee.phone}</p>
          <p><span>City:</span> {employee.address.city}</p>
          <a target="_blank" rel="noopener noreferrer" href = {`https://www.google.com/maps?q=${employee.address.geo.lat},${employee.address.geo.lng}`}>Location</a>
        </div>
      </div>
    </div>
  );
}
