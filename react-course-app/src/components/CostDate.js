import "./CostDate.css";

function CostDate(props) {
  const day = props.date.toLocaleDateString("de-De", { day: "2-digit" });
  const month = props.date.toLocaleDateString("de-De", { month: "long" });
  const year = props.date.toLocaleDateString("de-De", { year: "numeric" });

  return (
    <div className="cost-date">
      <div className="cost-date__month">{month}</div>
      <div className="cost-date__year">{year}</div>
      <div className="cost-date__day">{day}</div>
    </div>
  );
}

export default CostDate;
