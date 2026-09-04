import FiltersPanel from '../components/filters-panel';
import './home-page.css';
import OfferCard from '../components/offers/card';

export default function HomePage() {
    return (
        <>
            <header><h1>InsureCompare</h1></header>
            <div className='content'>
                <FiltersPanel />
                <OfferCard />
            </div>
        </>

    )
}