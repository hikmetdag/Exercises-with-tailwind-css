const Navbar = () => {
  return (
    <div className="flex justify-center h-12 bg-yellow-200">
      <div className="flex justify-between items-center w-full max-w-5xl">
        <span className="mx-2">tailwind</span>
        <div className="flex flex-row gap-x-10 mx-2">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
