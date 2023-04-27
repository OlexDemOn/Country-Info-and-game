import styles from './App.module.scss';
import withLayout from './layout/layout';
import { Routes, Route } from "react-router-dom";
import FindCountry from './pages/FindCountry/find_country';
import Country from './pages/CountryPage/[country]';
import Games from './pages/GamesPage/games';
import Quiz from './page-components/QuizPage/quiz';
import Facts from './page-components/FactsPage/facts';
import Flags from './page-components/FlagsPage/flags';
import { useEffect } from 'react';


function App(): JSX.Element {

    // const key = "SWSCMDV3N2DIOUNZTKNNCTBBCW";
    const API_KEY = process.env.REACT_APP_API_KEY

    useEffect(() => {
        const url = `https://stoplight.io/mocks/shopware/store-api/8265633/context`;
        const params = {
            Accept: "application/json",

        };

        fetch(`${url}?${new URLSearchParams(params)}`)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }, []);


    return (
        <div className={styles.main_block}>
            <Routes>
                <Route path="/" element={<FindCountry />} />
                <Route path="/country/:country" element={<Country />} />
                <Route path="/games" element={<Games />} />
                <Route path="/games/quizGame" element={<Quiz />} />
                <Route path="/games/factsGame" element={<Facts />} />
                <Route path="/games/flagsGame" element={<Flags />} />
            </Routes>

        </div>
    )
}

export default withLayout(App);