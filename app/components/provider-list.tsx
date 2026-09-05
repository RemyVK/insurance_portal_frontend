import { useEffect } from 'react';
import './provider-list.css';
import { useAllProviders } from '../hooks/use-all-providers';

export default function AllProviders() {
    const { providers, loading, error } = useAllProviders();

    if (loading) {
        return <p>Loading</p>
    }

    if (error) {
        return <p>Error: {error}</p>
    }

    return (
        <>
            <p>Select your provider</p>
            {
                providers.map(provider => (
                    <div key={provider.id} className='providersList'>
                        <input type='checkbox' id={provider.id} name={provider.name} value={provider.name} />
                        <label htmlFor={provider.id}>{provider.name}</label>
                        <br />
                    </div>

                ))
            }
        </>
    );
}