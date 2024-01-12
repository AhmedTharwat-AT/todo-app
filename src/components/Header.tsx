function Header() {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-4xl font-bold tracking-[1rem] text-gray-100">TODO</h1>
      <span className="bg-icon-dark aspect-square h-7 w-7 cursor-pointer bg-cover bg-no-repeat"></span>
    </header>
  );
}

export default Header;
