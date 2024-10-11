import { useState } from "react";
import Progress from "./Progress";

const Form = () => {
  const [filledFields, setFilledFields] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  // Função para lidar com a mudança nos campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Contar campos preenchidos
    const count = Object.values({ ...formData, [name]: value }).filter(
      (field) => field !== ""
    ).length;

    setFilledFields(count);
  };

  return (
    <div className="w-full max-w-[550px] flex flex-col">
      <Progress value={filledFields} />
      <Label
        label={"Digite seu nome"}
        type={"text"}
        onChange={handleChange}
        name="name"
      />
      <Label
        label={"Digite seu telefone"}
        type={"tel"}
        onChange={handleChange}
        name="phone"
      />
      <Label
        label={"Digite seu e-mail"}
        type={"email"}
        onChange={handleChange}
        name="email"
      />
      <Label
        label={"Digite sua senha"}
        type={"password"}
        onChange={handleChange}
        name="password"
      />
      <Termo />
      <Button termsAccepted={true} />
    </div>
  );
};

export default Form;

const Label = ({ label, type, onChange, name }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false); // Estado para gerenciar o foco

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <label className="w-full flex flex-col text-base text-zinc-500 mb-4">
      {label}
      <div className="relative">
        <input
          type={showPassword ? "text" : type}
          name={name} // Adiciona o nome do campo
          onChange={onChange} // Chama a função de mudança
          onFocus={() => setIsFocused(true)} // Define o estado para focado
          onBlur={() => setIsFocused(false)} // Remove o estado de foco
          className={`text-base border-b-[1px] py-4 px-2 outline-none font-bold text-zinc-950 w-full ${
            isFocused ? "border-purple-700" : "border-zinc-500" // Aplica a cor da borda com base no foco
          }`}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer"
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 text-zinc-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12s2-3 9-3 9 3 9 3-2 3-9 3-9-3-9-3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 text-zinc-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12s2-3 9-3 9 3 9 3-2 3-9 3-9-3-9-3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.173 10.173a3 3 0 013.037 3.037M12 12l2.838-2.838M15.465 14.12A3 3 0 0015 12a3 3 0 00-3-3"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6.342 8.342a10.053 10.053 0 001.738 3.169M17.658 16.658a10.053 10.053 0 01-3.169 1.738"
                />
              </svg>
            )}
          </button>
        )}
      </div>
    </label>
  );
};

const Termo = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleCheckboxChange = () => {
    setTermsAccepted(!termsAccepted);
  };
  return (
    <div className="flex items-baseline mb-4">
      <input
        type="checkbox"
        id="aceita-termos"
        checked={termsAccepted}
        onChange={handleCheckboxChange}
        className="accent-purple-700"
      />
      <label htmlFor="aceita-termos" className="ml-2 text-zinc-500">
        Eu li, estou ciente das condições de tratamento dos meus dados pessoais
        e dou meu consentimento, quando aplicável, conforme descrito nesta
      </label>
    </div>
  );
};

const Button = ({ termsAccepted }) => {
  return (
    <button
      className={`botao w-full h-12 rounded-full bg-purple-700 text-white font-bold ${
        !termsAccepted && "opacity-50 cursor-not-allowed"
      }`}
      disabled={!termsAccepted}
    >
      Aceite os termos
    </button>
  );
};
