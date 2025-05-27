import Header from "../headers/Header";
import Sidebar from "../sidebar/Sidebar";
import "./Layout.css";

const Layout = (props: { title: string; children: React.ReactNode }) => {
    return (
        <div>
            <Sidebar />
            <div className="layout-content">
                <Header title={props.title} />
                {props.children}
            </div>
        </div>
    );
};

export default Layout;
