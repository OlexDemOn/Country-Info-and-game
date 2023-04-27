import { GamesProps } from './games.props';
import styles from './games.module.scss';
import quizImg from '../../imgs/quiz_time.jpg'
import fact from '../../imgs/fact.jpg'
import flags from '../../imgs/countries.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

export default function Games({ ...props }: GamesProps): JSX.Element {

    return (
        <div {...props} className={styles.main_block}>
            <section className={styles.game_container}>
                <img src={quizImg} loading="lazy" alt="" />
                <div className={styles.game_info}>
                    <h2>Quiz game</h2>
                    <span>In this game you will be able to test your knowledge of various facts about different countries</span>
                    <Link to={"/games/quizGame"}>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >Play</motion.button>
                    </Link>
                </div>
            </section>
            <section className={styles.game_container}>
                <img src={fact} loading="lazy" alt="" />
                <div className={styles.game_info}>
                    <h2>Facts game</h2>
                    <span>If you want to learn interesting facts and check if you knew them, press play</span>
                    <Link to={"/games/factsGame"}>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >Play</motion.button>
                    </Link>
                </div>
            </section>
            <section className={styles.game_container}>
                <img src={flags} loading="lazy" alt="" />
                <div className={styles.game_info}>
                    <h2>Flags game</h2>
                    <span>Test on the knowledge of flags of different countries</span>
                    <Link to={"/games/flagsGame"}>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >Play</motion.button>
                    </Link>
                </div>
            </section>
        </div>
    )
}