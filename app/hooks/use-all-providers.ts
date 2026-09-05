
import { useEffect, useState } from "react";

interface Provider {
    id: string;
    name: string;
}

//Returns a list of all Insurance providers
export function useAllProviders() {
    const [providers, setProviders] = useState<Provider[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        fetch('http://127.0.0.1:8000/all-providers')
            .then(response => {
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                return response.json();
            })
            .then((data) => setProviders(data.data))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    return { providers, loading, error };
}