import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/coloringpage" activeStyle>
                        Coloring Book
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
