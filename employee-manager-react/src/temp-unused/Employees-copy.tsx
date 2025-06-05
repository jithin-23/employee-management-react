// import Header from "../../components/headers/Header";
// import "./Employees.css";

// import dummyEmployees from "../../data/DummyData";
// import { useSearchParams } from "react-router-dom";
// import TableRow from "./table_row/TableRow";

// const Employees = () => {
//   const employees = dummyEmployees;

//   const [searchParams, setSearchParams] = useSearchParams();

//   const status = searchParams.get("status");

//   const filteredEmployees = status
//     ? employees.filter((employee) => employee.status === status)
//     : employees;

//   return (
//     <div className="employees-body">
//       <Header title="Employee List" filterby={true} headerBtn={"create"} />

//       <table className="list-table">
//         <thead >
//           <tr className="list-table-header">
//             <th className="list-table-column">Employee Name</th>
//             <th className="list-table-column">Employee ID</th>
//             <th className="list-table-column">Joining Date</th>
//             <th className="list-table-column">Role</th>
//             <th className="list-table-column">Status</th>
//             <th className="list-table-column">Experience</th>
//             <th className="list-table-column">Actions</th>
//           </tr>
//         </thead>

//         <tbody className="list-table-body">
//           {filteredEmployees.map((employee) => (
//             <TableRow
//               name={employee.name}
//               id={employee.empId}
//               joinDate={employee.joinDate}
//               role={employee.role}
//               status={employee.status}
//               experience={JSON.stringify(employee.experience)}
//             />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Employees;
