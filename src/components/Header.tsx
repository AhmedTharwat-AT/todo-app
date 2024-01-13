function Header() {
  return (
    <header className="flex items-center justify-between">
      <h1 className="bp:text-4xl text-3xl font-bold tracking-[1rem] text-gray-100">
        TODO
      </h1>
      <span className="bp:h-7 bp:w-7 aspect-square h-6 w-6 cursor-pointer bg-icon-dark bg-cover bg-no-repeat"></span>
    </header>
  );
}

export default Header;
