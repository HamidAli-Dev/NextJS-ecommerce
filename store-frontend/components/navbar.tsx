import Link from "next/link";

import Container from "@/components/shared/container";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="flex items-center h-16 relative px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex gap-x-2 ml-4 lg:ml-0">
            <p className="text-xl font-bold">Store</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
