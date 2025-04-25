import UserButton from "./user-button";

export default function Header() {
  return (
    <header className="sticky flex justify-center border-b">
      <div className="mx-auto flex h-12 w-full  items-center justify-between  sm:px-6">
        <UserButton />
      </div>
    </header>
  );
}
