
//Returns a list of all Insurance providers

export function getAllProviders(): {} {

    try {
        const response = fetch('http://127.0.0.1:8000/all-providers');
        console.log('all providers', response)
    } catch (error) {
        console.log(error);
    }
    return {};
}