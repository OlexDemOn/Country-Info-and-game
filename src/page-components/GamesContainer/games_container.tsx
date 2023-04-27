import { GamesProps } from './games.props';
import styles from './games.module.scss';
import cn from 'classnames';
import { useEffect, useState, FunctionComponent } from 'react';
import { motion } from 'framer-motion';

function GameLayout({ gameName, gameDiscription, children }: GamesProps): JSX.Element {

    const [stateOfGame, setStateOfGame] = useState(false);
    const [timer, setTimer] = useState(-1);

    useEffect(() => {
        if (timer > 0) {
            setTimeout(() => {
                setTimer(timer - 1);
            }, 600);
        }
        else if (!stateOfGame && timer === 0) {
            setStateOfGame(true);
        }
    }, [timer])

    return (
        <div className={styles.main_block}>
            {timer >= 0 ?
                <div className={styles.game_container}>
                    {timer !== 0 ?
                        <div className={styles.game_timer}>
                            {timer}
                        </div> :
                        <>{children}</>
                    }


                </div> :
                <div className={styles.start_play_container}>
                    <p>{gameName}</p>
                    <p>{gameDiscription}</p>
                    <button onClick={() => setTimer(3)}>PLAY</button>
                </div>
            }
        </div>
    )
}

export default function withGameLayout<T extends Record<string, unknown>>(gameName: string, gameDiscription: string, Component: FunctionComponent<T>) {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <GameLayout gameName={gameName} gameDiscription={gameDiscription}>
                <Component {...props} />
            </GameLayout>
        )
    }
}