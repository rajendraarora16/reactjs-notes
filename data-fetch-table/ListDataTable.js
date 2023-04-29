import React from "react";

export default function ListDataTable({ data }) {
  return (
    <table>
      {data &&
        data.map((p) => {
          return (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.employee_name}</td>
              <td>{p.employee_salary}</td>
              <td>{p.employee_age}</td>
            </tr>
          );
        })}
    </table>
  );
}
