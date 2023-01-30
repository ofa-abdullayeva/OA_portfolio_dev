import React, { useState } from "react";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import Portfolios from "../data/Portfolios";
import Menu from "../Components/Menu";
import Button from "../Components/Button";
import portfolios from "../data/Portfolios";

const allButtons = [
  "All",
  ...new Set(portfolios.map(item => item.category))];

function PortfolioPage() {
  const [menuItem, setMenuItem] = useState(Portfolios);

  const filter = (button) => {
    if (button === "All") {
      setMenuItem(portfolios);
      return;
    }
    const filteredData = portfolios.filter((item) => item.category === button);
    setMenuItem(filteredData);
  };

  return (
    <MainLayout>
      <Title title={"Portfolios"} span={"portfolios"} />
      <InnerLayout>
        {/* <div>PortfolioPage</div> */}
        <Button filter={filter} button={allButtons} />
        <Menu menuItem={menuItem} />
      </InnerLayout>
    </MainLayout>
  );
}

export default PortfolioPage;
