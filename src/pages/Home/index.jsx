import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./home.css";

// URL: https://api.themoviedb.org/3/movie/now_playing?api_key=f65b7d708d05182c37d8f3129ffb0475&language=pt-BR

function Home() {

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {

        async function loadFilmes() {
            const response = await api.get('movie/now_playing', {
                params: {
                    api_key: 'f65b7d708d05182c37d8f3129ffb0475',
                    language: 'pt-BR',
                    page: 1,                
                }
            })

            // console.log(response.data.results.slice(0, 10));
            setFilmes(response.data.results.slice(0, 10));

        }

        loadFilmes();

    }, [])

    return (
        <div className="container">
            <div className="lista_filmes">
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>            
        </div>
    );
}

export default Home;