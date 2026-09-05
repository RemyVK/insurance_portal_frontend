import { useState } from "react";
import "./filters-panel.css";
import PriceRangeFilters from "./price-range-filters";
import AllProviders from "./provider-list";
import { BACKEND_URL } from "../constants";

export default function FiltersPanel() {
  const [minCoveredPrice, setMinCoveredPrice] = useState<number>(0);
  const [maxCoveredPrice, setMaxCoveredPrice] = useState<number>(99999);

  const [minMonthlyDue, setMinMonthlyDue] = useState<number>(0);
  const [maxMonthlyDue, setMaxMonthlyDue] = useState<number>(99999);

  const [minPolicyDuration, setMinPolicyDuration] = useState<number>(0);
  const [maxPolicyDuration, setMaxPolicyDuration] = useState<number>(99999);

  function handleApply() {
    const url = `${BACKEND_URL}?coveredMinPrice=${minCoveredPrice}&coveredMaxPrice=${maxCoveredPrice}`;
    console.log(url);
  }

  return (
    <section className="filtersContainer">
      <p>Filters</p>
      <AllProviders />
      <PriceRangeFilters
        minCoveredPrice={minCoveredPrice}
        setMinCoveredPrice={setMinCoveredPrice}
        maxCoveredPrice={maxCoveredPrice}
        setMaxCoveredPrice={setMaxCoveredPrice}
      />
      <button className="filterButton" onClick={handleApply}>
        Apply Filters
      </button>
    </section>
  );
}
