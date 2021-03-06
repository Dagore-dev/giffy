import {Helmet} from 'react-helmet';

import useGifs from 'hooks/useGifs';
import ListOfGifs from 'components/ListOfGifs';
import LazyTrending from 'components/LazyTrending/index';
import SearchForm from 'components/SearchForm';

export default function Home () {
    const { gifs } = useGifs();

    return(
        <>
            <Helmet>
                <title>Inicio | Giffy</title>
            </Helmet>

            <SearchForm />

            <h2>Última búsqueda</h2>

            <ListOfGifs gifs={gifs} />
            
            <LazyTrending />
        </>
    )
}
