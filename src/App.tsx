import styles from './App.module.scss';
import withLayout from './layout/layout';
import { Routes, Route } from "react-router-dom";
import FindCountry from './pages/FindCountry/find_country';
import Country from './pages/CountryPage/[country]';
import Games from './pages/GamesPage/games';

function App(): JSX.Element {
    return (
        <div className={styles.main_block}>
            <Routes>
                <Route path="/" element={<FindCountry />} />
                <Route path="/country/:country" element={<Country />} />
                <Route path="/games" element={<Games />} />
            </Routes>

        </div>
    )
}

export default withLayout(App);