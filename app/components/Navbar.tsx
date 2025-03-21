const Navbar = () => {
    return (
      <header className="h-16 bg-white flex items-center justify-between px-6 shadow-md">
        <h2 className="text-lg font-semibold">Dashboard</h2>
        <div className="flex items-center space-x-4">
          <span>Welcome, User</span>
        </div>
      </header>
    );
  };
  
  export default Navbar;
  