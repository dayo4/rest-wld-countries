import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-extrabold">Where in the World?</h1>
      <ThemeToggle />
    </header>
  );
}

