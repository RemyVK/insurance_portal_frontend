import './provider-list.css';

export default function AllProviders() {
    return (
        <>
            <p>Providers</p>
            <p>Select your provider</p>
            <input type="checkbox" id="provider1" name="provider1" value="Bike" />
            <label htmlFor="provider1"> I have a bike</label><br />

            <input type="checkbox" id="provider2" name="provider2" value="Car" />
            <label htmlFor="provider2"> I have a car</label><br />

            <input type="checkbox" id="provider3" name="provider3" value="Boat" />
            <label htmlFor="provider3"> I have a boat</label><br />
        </>
    )
}