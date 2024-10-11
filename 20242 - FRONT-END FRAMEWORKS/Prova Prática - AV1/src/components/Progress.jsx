const Progress = ({ value }) => {
  const percentage = (value / 4) * 100;

  return (
    <div className="mb-6">
      <label className="text-base text-zinc-500">Preencha os campos</label>
      <div className="w-full h-1 bg-gray-300 rounded">
        {" "}
        {/* Barra de fundo */}
        <div
          style={{ width: `${percentage}%` }}
          className={`h-full rounded ${
            percentage === 100 ? "bg-green-500" : "bg-blue-500"
          }`}
        />
      </div>
    </div>
  );
};

export default Progress;
