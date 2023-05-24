import { FunctionComponent, ReactNode } from "react";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

type LayoutProps = {
    children: ReactNode;
}
 
const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
    );
}
 
export default Layout;