import { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function BarChart({ height, width }) {
  const marginTop = 30;
  const marginRight = 0;
  const marginBottom = 30;
  const marginLeft = 40;
  const ref = useRef();

  useEffect(() => {
    ref.current.innerHTML = "";

    const data = [
      { label: "Jan", value: 100 },
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

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)]) // Use the maximum value in the data array as the yScale domain
      .nice() // Adjust the domain to nice round numbers
      .range([height - marginBottom, marginTop]);

    const svgElement = d3.select(ref.current);

    // Append x-axis
    svgElement
      .append("g")
      .attr("transform", `translate(0, ${height - marginBottom})`)
      .call(d3.axisBottom(xScale))
      .call((g) => g.select(".domain").remove())
      .call((g) => g.selectAll(".tick line").remove())
      .call((g) =>
        g
          .selectAll(".tick text")
          .style("font-size", "16px")
          .classed("text-gray-500", true),
      );

    // Append y-axis
    svgElement
      .append("g")
      .attr("transform", `translate(${width}, 0)`)
      .call(
        d3
          .axisLeft(yScale)
          .tickSize(width - marginLeft - marginRight)
          .ticks(12),
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
          .attr("x", -width + marginRight + marginLeft - 6)
          .attr("dy", 7)
          .style("font-size", "16px")
          .classed("text-gray-500", true),
      );

    // Animate the bars using transition
    svgElement
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => xScale(d.label))
      .attr("y", height - marginBottom) // Start the bars at the bottom of the chart
      .attr("height", 0) // Start with zero height
      .attr("width", xScale.bandwidth())
      .attr("rx", 5)
      .attr("fill", "#818cf8")
      .transition() // Apply transition for smooth animation
      .duration(800) // Animation duration in milliseconds
      .delay((d, i) => i * 100) // Delay each bar's animation slightly for a staggered effect
      .attr("y", (d) => yScale(d.value)) // Final y position based on the scaled value
      .attr("height", (d) => height - marginBottom - yScale(d.value)); // Final height based on the scaled value
  }, [height, width]);

  return (
    <svg
      ref={ref}
      width={width}
      height={height}
    />
  );
}
