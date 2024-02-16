
class MarvelService {
   getResource = async (url) => {
        const res = await fetch(url);
    
        if(!res.ok) {
            throw new Error(`Could not url ${url} status: ${res.status}`)
        }
    
        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResource('https://gateway.marvel.com:443/v1/public/characters?apikey=17c984d852299811a210c9b94f395735');
    }
}

export default MarvelService;