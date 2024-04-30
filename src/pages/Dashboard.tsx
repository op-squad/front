import Sidebar from "../components/app/Sidebar";
import StatCard from "../components/app/dashboard/StatCard";
// import MySvg from "../assets/stat_cards/1.svg";
import DropdownMenu from "../components/app/DropdownMenu";
import { useEffect, useRef } from "react";
import * as d3 from "d3";

function BarChart() {
  const height = 340;
  const width = 940;
  const marginTop = 30;
  const marginRight = 0;
  const marginBottom = 30;
  const marginLeft = 40;
  const data = [
    "Jan",
    "Feb",
    " Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const freq = [1200, 1000, 800, 600, 400, 200, 0];
  const ref = useRef();
  useEffect(() => {
    const xScale = d3
      .scaleBand()
      .domain(data)
      .range([marginLeft, width - marginRight]);
    const svgElement = d3.select(ref.current);
    svgElement
      .append("g")
      .style("font", "24px")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(d3.axisBottom(xScale))
      .call((g) => g.select(".domain").remove())
      .call((g) => g.selectAll(".tick line").remove())
      .call((g) =>
        g
          .selectAll(".tick text")
          .style("font-size", "14px")
          .classed("text-gray-500", true),
      );
    const yScale = d3
      .scaleLinear()
      .domain([0, 1200])
      .range([height - marginBottom, marginTop]);
    svgElement
      .append("g")
      .attr("transform", `translate(${width}, 0)`)
      .call(
        d3
          .axisLeft(yScale)
          .tickSize(width - marginLeft - marginRight)
          .ticks(6),
      )
      .call((g) => g.select(".domain").remove())
      .call((g) =>
        g
          .selectAll(".tick line")
          .attr("stroke-opacity", 0.2)
          .attr("stroke-dasharray", "8,4"),
      )
      .call((g) =>
        g
          .selectAll(".tick text")
          .attr("x", -width + marginRight + marginLeft - 1)
          .attr("dy", 7)
          .style("font-size", "14px")
          .classed("text-gray-500", true),
      );
  }, []);
  // const x = d3.scaleBand().domain(data).range();
  // console.log(x);
  // const y = d3.scaleLinear();
  // console.log(y);
  return (
    <svg
      ref={ref}
      width={width}
      height={height}
    />
  );
}

export default function Dashboard() {
  return (
    <div className="h-[1300px]">
      <Sidebar />
      <div className="pl-80 bg-blue-100 h-full">
        <div className="flex flex-col gap-8 h-full p-8">
          <div className="text-5xl font-extrabold py-4 text-blue-950">Home</div>
          <div className="flex gap-8 h-full">
            <div className="flex flex-col h-full gap-8 basis-[65%]">
              <div className="flex gap-8">
                <StatCard
                  card={{
                    cardName: "Patients",
                    value: 145,
                  }}
                  style={{
                    textColor: "text-blue-950",
                    cardColor: "bg-indigo-300",
                    circleColor: "bg-blue-50",
                  }}
                  icon={{
                    src: "src/assets/stat_cards/1.svg",
                    alt: "bandage",
                  }}
                />
                <StatCard
                  card={{
                    cardName: "Appointments",
                    value: 514,
                  }}
                  style={{
                    textColor: "text-blue-50",
                    cardColor: "bg-blue-950",
                    circleColor: "bg-blue-50",
                  }}
                  icon={{
                    src: "src/assets/stat_cards/2.svg",
                    alt: "diagnosis",
                  }}
                />
                <StatCard
                  card={{
                    cardName: "Model Reports",
                    value: 64,
                  }}
                  style={{
                    textColor: "bg-blue-50",
                    cardColor: "text-indigo-950",
                    circleColor: "bg-indigo-200",
                  }}
                  icon={{
                    src: "src/assets/stat_cards/3.svg",
                    alt: "robot",
                  }}
                />
              </div>
              <div className="flex flex-col gap-8 basis-1/2 bg-blue-50 rounded-xl p-8">
                <p className="font-extrabold text-2xl text-blue-950">
                  Patient Visits
                </p>
                <BarChart />
                {/* <div className="flex px-4 pb-4 h-full">
                  <div className="flex flex-col justify-between items-end text-blue-900 h-full pb-4">
                    <p>1200</p>
                    <p>1000</p>
                    <p>800</p>
                    <p>600</p>
                    <p>400</p>
                    <p>200</p>
                    <p>0</p>
                  </div>
                </div> */}
              </div>
              <div className="flex flex-col gap-8 basis-1/2 bg-blue-50 rounded-xl p-8">
                <p className="font-extrabold text-2xl text-blue-950">
                  Patient List
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8 basis-[35%] h-max">
              <div className="bg-blue-50 rounded-xl p-8">
                <p className="font-extrabold text-2xl text-blue-950">
                  To be determined
                </p>
              </div>
              <div className="flex flex-col gap-6 bg-blue-50 text-blue-950 rounded-xl p-8">
                <div className="flex justify-between">
                  <p className="font-extrabold text-2xl text-blue-950">
                    Schedule
                  </p>
                  <DropdownMenu />
                </div>
                <hr className="mx-[-32px]" />
                <div>Calendar</div> {/*todo later*/}
                <hr className="mx-[-32px]" />
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-end">
                    <div className="flex flex-col gap-0.5">
                      <p className="text-sm font-bold text-neutral-400">
                        10:30am - 11:00am
                      </p>
                      <p className="text-lg font-semibold">Patient Checkup</p>
                    </div>
                    <p className="text-sm font-semibold text-blue-700 hover:underline cursor-pointer">
                      View Details
                    </p>
                  </div>
                  <hr />
                  <div className="flex justify-between items-end">
                    <div className="flex flex-col gap-0.5">
                      <p className="text-sm font-bold text-neutral-400">
                        10:30am - 11:00am
                      </p>
                      <p className="text-base font-semibold">Patient Checkup</p>
                    </div>
                    <p className="text-sm font-semibold text-blue-700 hover:underline cursor-pointer">
                      View Details
                    </p>
                  </div>
                  <hr />
                  <div className="flex justify-between items-end">
                    <div className="flex flex-col gap-0.5">
                      <p className="text-sm font-bold text-neutral-400">
                        10:30am - 11:00am
                      </p>
                      <p className="text-lg font-semibold">Patient Checkup</p>
                    </div>
                    <p className="text-sm font-semibold text-blue-700 hover:underline cursor-pointer">
                      View Details
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
