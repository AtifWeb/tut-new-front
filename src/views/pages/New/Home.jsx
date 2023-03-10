import React from "react";
import Header from "../../components/New/Header";
import "../../../assets/css/New/home.css";
import { Main } from "../../components/New/Main";
import { RoundDiv } from "../../components/New/RoundDiv";
import { RiskWarning } from "../../components/New/RiskWarning";
import { OwnRoad } from "../../components/New/OwnRoad";
import { SellCrypto } from "../../components/New/SellCrypto";
import { PersonView } from "../../components/New/PersonView";
import { SellAnything } from "../../components/New/SellAnything";
import { OneMorePerson } from "../../components/New/OneMorePerson";
import { SellAnywhere } from "../../components/New/SellAnywhere";
import { Inspiration } from "../../components/New/Inspiration";
import { YearPerson } from "../../components/New/YearPerson";
import { CoinPrice } from "../../components/New/CoinPrice";
import { ShareWork } from "../../components/New/ShareWork";
import { Footer } from "../../components/New/Footer";
function Home() {
  return (
    <div>
      <Header showLogo />
      <div class="page-wrap">
        <Main />
        <RoundDiv />
        <RiskWarning />
        <OwnRoad />
        <SellCrypto />
        <PersonView />
        <SellAnything />
        <OneMorePerson />
        <SellAnywhere />
        <Inspiration />
        <YearPerson />
        <CoinPrice />
        <ShareWork />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
