import './price-range-filters.css';

export default function PriceRangeFilters() {
    return (
        <>
            <p className='title'>Price Range</p>
            <p>Covered Price</p>
            <div className="minMaxConatiner">
                <label htmlFor="priceMin"></label>
                <input type="number" placeholder="Min" id="priceMin" name="priceMin" min="0" />
                <p>to</p>
                <label htmlFor="priceMax"></label>
                <input type="number" placeholder="Max" id="priceMax" name="priceMax" max="99999" />
            </div>

            <p className='title'>Monthly Due</p>
            <p>Covered Premium</p>
            <div className="minMaxConatiner">
                <label htmlFor="premiumMin"></label>
                <input type="number" placeholder="Min" id="premiumMin" name="premiumMin" min="0" />
                <p>to</p>
                <label htmlFor="premiumMax"></label>
                <input type="number" placeholder="Max" id="premiumMax" name="premiumMax" max="99999" />
            </div>

            <p className='title'>Duration (Months)</p>
            <p>Policy Duration</p>
            <div className="minMaxConatiner">
                <label htmlFor="durationMin"></label>
                <input type="number" placeholder="Min" id="durationMin" name="durationMin" min="0" />
                <p>to</p>
                <label htmlFor="durationMax"></label>
                <input type="number" placeholder="Max" id="durationMax" name="durationMax" />
            </div>
        </>
    );
}