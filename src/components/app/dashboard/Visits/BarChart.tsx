import { useEffect, useRef } from "react";
import * as d3 from "d3";
export default function BarChart({ height, width }) {
  const marginTop = 30;
  const marginRight = 0;
  const marginBottom = 30;
  const marginLeft = 40;
  const ref = useRef();
  useEffect(() => {
    console.log(ref);
    ref.current.innerHTML = "";
    const data = [
      { label: "Jan", value: 512 },
      { label: "Feb", value: 254 },
      { label: "Mar", value: 684 },
      { label: "Apr", value: 823 },
      { label: "May", value: 564 },
      { label: "Jun", value: 497 },
      { label: "Jul", value: 185 },
      { label: "Aug", value: 213 },
      { label: "Sep", value: 345 },
      { label: "Oct", value: 387 },
      { label: "Nov", value: 488 },
      { label: "Dec", value: 132 },
    ];
    const xScale = d3
      .scaleBand()
      .domain(data.map((e) => e.label))
      .range([marginLeft, width - marginRight])
      .padding(0.5);
    const svgElement = d3.select(ref.current);
    svgElement
      .append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(d3.axisBottom(xScale))
      .call((g) => g.select(".domain").remove())
      .call((g) => g.selectAll(".tick line").remove())
      .call((g) =>
        g
          .selectAll(".tick text")
          .style("font-size", "16px")
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
          .style("font-size", "16px")
          .classed("text-gray-500", true),
      );
    svgElement
      .append("g")
      .attr("fill", "#818cf8")
      .selectAll()
      .data(data)
      .join("rect")
      .attr("x", (d) => xScale(d.label))
      .attr("y", (d) => yScale(d.value) + 1)
      .attr("height", (d) => yScale(0) - yScale(d.value))
      .attr("width", xScale.bandwidth())
      .attr("rx", 5);
  }, [height, width]);
  return (
    <svg
      ref={ref}
      width={width}
      height={height}
    />
  );
}
