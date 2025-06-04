import "./Header.css";
import { useParams, useSearchParams } from "react-router-dom";
import { useState } from "react";
import HeaderButton, {
  type HeaderButtonTypes,
} from "./header_button/HeaderButton";
import { statusOptions } from "../../types/InputOptions";

interface HeaderProps {
  title: string;
  filterby?: boolean;
  headerBtn?: HeaderButtonTypes;
  empId?: string;
}
const Header = ({ title, filterby = false, headerBtn, empId }: HeaderProps) => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState<string>("");

  const availableStatusOptions = statusOptions;

  const handleFilterChange = (status: string) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (status === "all") newSearchParams.delete("status");
    else newSearchParams.set("status", status);

    setFilter(newSearchParams.get("status") || "NONE");
    setSearchParams(newSearchParams);
  };

  return (
    <div className="heading">
      {title}

      <div className="header-adornment">
        {filterby && (
          <div className="header-filter-box">
            Filter By
            <select
              className="header-filter-select"
              onChange={(event) => {
                handleFilterChange(event.target.value);
              }}
              // defaultValue="all"
            >
              <option value="all">All</option>

              {availableStatusOptions.map((item) => {
                return <option key={item.value} value={item.value}>{item.text}</option>;
              })}
            </select>
          </div>
        )}

        {headerBtn && <HeaderButton type={headerBtn} empId={empId} />}
      </div>
    </div>
  );
};

export default Header;
