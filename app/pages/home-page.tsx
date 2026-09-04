import FiltersPanel from '~/components/filters-panel';
import './home-page.css';
import OfferCrad from '~/components/offer-card';

export default function HomePage() {
    return (
        <>
            <header><h1>InsureCompare</h1></header>
            <div className='content'>
                <FiltersPanel />
                <OfferCrad />
            </div>
        </>

    )
}