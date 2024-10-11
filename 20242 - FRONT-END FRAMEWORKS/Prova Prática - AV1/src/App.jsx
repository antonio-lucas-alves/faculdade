import Form from "./components/Form";
import Logo from "./components/Logo";

const App = () => {
  return (
    <main className="flex h-screen">
      <aside className="w-1/2 flex justify-center bg-gray-100 py-20">
        <div className="max-w-[550px] flex flex-col justify-between">
          <Logo />
          <div className="titulo">
            <h1 className="text-5xl font-bold mb-6">
              Complete os campos ao lado para abrir sua Conta Digital
            </h1>
            <p className="text-gray-500 mb-4 text-xl">
              Aqui, você acontece com segurança e toda a praticidade que o
              Digital Bank oferece. Mais do que uma conta com cartão, você tem
              uma experiência completa com investimentos, Mimos exclusivos e
              muito mais
            </p>
          </div>
          <small>&copy; Criado por Nome do Aluno e Matrícula 000000000</small>
        </div>
      </aside>
      <div className="flex flex-col justify-center items-center bg-white p-16 w-1/2">
        <Form />
      </div>
    </main>
  );
};

export default App;
