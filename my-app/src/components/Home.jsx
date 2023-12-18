import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <div className="border-2 border-indigo-600 text-red-500 text-5xl p-4">
          <h1>Welcome to Tailwind CSS</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
