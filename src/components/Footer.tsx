import Link from "next/link";
import { Title } from "./ui";

export default function Footer() {
  return (
    <footer
      id="contact"
      className=" p-8 pb-2 sm:px-20 borderborder-t-border bg-secondary"
    >
      <div className="flex max-md:flex-wrap gap-8 md:gap-16">
        <div className="max-w-md">
          <Link
            href={"/"}
            className="text-lg md:text-xl lg:text-2xl font-semibold hover:text-blue-700 tracking-wider"
          >
            ALOK ARTS
          </Link>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
            sapiente, quam consequatur corporis repellendus eum ab, error
            aperiam voluptas atque deserunt labore eligendi vero.
          </p>
        </div>
        <div className="">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold tracking-wider">
            Address
          </h2>
          <p>SBI ATM Opposite Takiya Bazar, Sasaram (Rohtas) Bihar 821115</p>
        </div>
        <div className="">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold tracking-wider">
            Contact
          </h2>
          <div className="flex">
            <p className="pr-1">Phone:</p>
            <p className=""> 7667976507, 9113368825</p>
          </div>
        </div>
      </div>
      <hr className="border-border mb-3 mt-6 border-t-2" />
      <div className="flex justify-between text-sm">
        <p>&copy; {new Date().getFullYear()} Alok Arts</p>
        <div className="md:order-2 md:flex space-x-3">
          Designed by &nbsp;
          <Link
            href="https://s2sharpit.me"
            className="text-blue-700"
            target="_blank"
          >
            @s2sharpit
          </Link>
        </div>{" "}
      </div>
    </footer>
  );
}
