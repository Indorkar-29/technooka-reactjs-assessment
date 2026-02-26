const StatCard = ({ title, value }) => {
  let textColor = "text-gray-800";
  let bgColor = "bg-white";

  if (value > 1000) {
    textColor = "text-university-danger";
    bgColor = "bg-red-50";
  } else if (value > 500) {
    textColor = "text-university-accent";
    bgColor = "bg-orange-50";
  }

  return (
    <div
      className={`${bgColor} shadow-soft rounded-xl2 p-6 flex flex-col`}
    >
      <p className="text-gray-500 text-sm">{title}</p>

      <h2 className={`text-4xl font-bold mt-2 ${textColor}`}>
        {value}
      </h2>
    </div>
  );
};

export default StatCard;
