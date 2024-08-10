import Location from "@/components/Location/Location";
import UTCTime from "@/components/UTCTime/UTCTime";
import Employees from "@/components/Employees/Employees";

const App = () => {
  return (
    <div className="m-6 flex max-[768px]:flex-wrap max-[768px]:m-0">
      <Location />
      <div className="max-[768px]:w-full">
        <UTCTime />
        <Employees />
      </div>
    </div>
  );
};

export default App;
