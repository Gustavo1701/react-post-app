import { Container } from "react-bootstrap";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return ( 
        <>
            <Header/>
                <Container>
                    {/* O outlet */}
                    <Outlet/>
                </Container>
            <Footer/>
        </>
     );
}
 
export default Layout;