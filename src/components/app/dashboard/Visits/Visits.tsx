/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import BarChart from "./BarChart";

export default function Visits() {
  const useDimensions = (targetRef: React.RefObject<HTMLDivElement>) => {
    const getDimensions = () => {
      return {
        width: targetRef.current ? targetRef.current.offsetWidth : 0,
        height: targetRef.current ? targetRef.current.offsetHeight : 0,
      };
    };

    const [dimensions, setDimensions] = useState(getDimensions);

    const handleResize = () => {
      setDimensions(getDimensions());
    };

    useEffect(() => {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    useLayoutEffect(() => {
      handleResize();
    }, []);

    return dimensions;
  };
  const chartRef = useRef(null);
  const chartSize = useDimensions(chartRef);
  return (
    <div className="flex flex-col gap-4 bg-blue-50 rounded-xl max-w-full p-8">
      <p className="font-extrabold text-xl 2xl:text-2xl text-blue-950">
        Patient Visits
      </p>
      <div
        ref={chartRef}
        className="aspect-[9/4]"
      >
        <BarChart
          height={chartSize.height}
          width={chartSize.width}
        />
      </div>
    </div>
  );
}
