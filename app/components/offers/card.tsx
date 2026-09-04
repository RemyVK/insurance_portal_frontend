import './card.css';


export default function OfferCard() {
    return (
        <div className="infoContainer">
            <input id="searchBar" type="text" placeholder="Search for any Provider or Insurance"></input>
            <section className="offerContainer">
                <div className="offerDetails">
                    <p>STAR HEALTH</p>
                    <div className="miniDetailsContainer">
                        <div className="miniDetails">
                            <p>Provided By</p>
                            <p>Provider A </p>
                        </div>
                        <div className="miniDetails">
                            <p>Provided By</p>
                            <p>Provider A </p>
                        </div>
                        <div className="miniDetails">
                            <p>Provided By</p>
                            <p>Provider A </p>
                        </div>
                    </div>
                </div>
                <div className="offerCostActionDeatil">
                    <p>Total Amount Covered</p>
                    <p>99999</p>

                    <button>View Offer</button>

                </div>

            </section>




            <section className="offerContainer">
                <div className="offerDetails">
                    <p>STAR HEALTH</p>
                    <div className="miniDetailsContainer">
                        <div className="miniDetails">
                            <p>Provided By</p>
                            <p>Provider A </p>
                        </div>
                        <div className="miniDetails">
                            <p>Provided By</p>
                            <p>Provider A </p>
                        </div>
                        <div className="miniDetails">
                            <p>Provided By</p>
                            <p>Provider A </p>
                        </div>
                    </div>
                </div>
                <div className="offerCostActionDeatil">
                    <p>Total Amount Covered</p>
                    <p>99999</p>

                    <button>View Offer</button>

                </div>

            </section>
        </div>

    )
}