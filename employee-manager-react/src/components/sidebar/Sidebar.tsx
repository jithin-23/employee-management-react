import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <img className="logo" src="/assets/kv-logo.png" alt="KeyValue Logo>" />
            <nav>
                <div className="nav-item">
                    <a href="#">
                        <img
                            className="icon"
                            src="/assets/icon.svg"
                            alt="Employee Icon"
                        />
                        <span>Employee List</span>
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
