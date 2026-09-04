import './filters-panel.css';
import PriceRangeFilters from './price-range-filters';
import AllProviders from './provider-list';

export default function FiltersPanel() {
    return (
        <section className="filtersContainer">
            <p>Filters</p>
            <AllProviders />
            <PriceRangeFilters />
        </section>
    )
}