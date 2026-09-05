import { ALL_OFFERS_API } from '../../constants';
import './card.css';
import useAllOffer from '~/hooks/use-all-offers';

export default function OfferCard() {

    function handleOfferCTA(link: URL) {
        window.open(link, '_blank');
    }

    const { offers, loading, error } = useAllOffer(ALL_OFFERS_API);

    if (loading) {
        return <p>Loading</p>
    }

    if (error) {
        return <p>Error: {error}</p>
    }

    return (
        <div className="infoContainer">
            <input id="searchBar" type="text" placeholder="Search for any Provider or Insurance" />
            <section className="offerContainer">
                <div className="offerDetails">
                    {offers.map((offer) => (
                        <div key={offer.id}>
                            <div>
                                <p>{offer.name}</p>
                                <div className="miniDetailsContainer">
                                    <div className="miniDetails">
                                        <p>Provided By</p>
                                        <p>{offer.ProviderName}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="offerCostActionDeatil">
                                <p>Total Amount Covered</p>
                                <p>99999</p>
                                <button onClick={() => handleOfferCTA(offer.link)}>View Offer</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section >
        </div >
    );
}