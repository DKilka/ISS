import { useState, useEffect } from "react";
import Loading from "@/components/Loading/Loading";

const Employees = () => {
  const [employees, setEmployees] = useState<unknown[]>([]);

  useEffect(() => {
    const getEmployeesInfo = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_EMPLOYEES as string);
        const data = await response.json();
        const ISSEmployees = data.people.filter(
          (el: any) => el.craft === "ISS"
        );
        setEmployees(ISSEmployees);
      } catch (error: unknown) {
        if (typeof error === "string") throw new Error(error);
      }
    };
    const intervalId = setInterval(() => getEmployeesInfo(), 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div>
        <ul className="border border-black h-full">
          {employees.length ? (
            employees.map((el: any, index: number) => (
              <li key={index} className="border-b-2 mt-2 pl-2 text-xl">
                {el.name}
              </li>
            ))
          ) : (
            <Loading />
          )}
        </ul>
        <p className="border border-black border-t-0">
          Total amount: {employees.length} people on ISS
        </p>
      </div>
    </>
  );
};

export default Employees;
