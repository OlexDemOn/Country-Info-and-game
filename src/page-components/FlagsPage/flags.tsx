import { useState, useEffect } from 'react';
import { LevelElementProps } from './flags.props';
import styles from './flags.module.scss';
import withGameLayout from '../GamesContainer/games_container';
import cn from 'classnames'
import { CountriesProps } from '../../pages/FindCountry/find_country.props';

export default function Flags(): JSX.Element {

    const [data, setData] = useState<CountriesProps[]>();
    const [currentLvlVariants, setCurrentLvlVariants] = useState<LevelElementProps[]>();
    const [currentLvl, setCurrentLvl] = useState<number>(1);
    const [points, setPoints] = useState<number>(0);

    useEffect(() => {
        const dataFetch = async () => {
            const data = await (
                await fetch(
                    "https://restcountries.com/v3.1/all?fields=name,flags"
                )
            ).json();

            setData(data);
        };
        dataFetch();
    }, [])

    useEffect(() => {
        data && FlagsGenerator();
    }, [data])

    const FlagsGenerator = () => {
        let tmpArray = [];
        const CorrectAnswerNumber = Math.floor(Math.random() * 4);
        for (let i = 0; i < 4; i++) {
            tmpArray.push({
                ...data![Math.floor(Math.random() * (data!.length / 4 * (i + 1) - (data!.length / 4 * (i))) + (data!.length / 4 * (i)))],
                correctAnswer: i === CorrectAnswerNumber ? true : false,
            });
        }
        setCurrentLvlVariants(tmpArray);
    }

    const CheckAnswer = (el: LevelElementProps) => {
        el.correctAnswer && setPoints(current => current + 1);
        if (currentLvl < 20) {
            setCurrentLvl(current => current + 1);
            setTimeout(() => {
                FlagsGenerator();
                setCheckAnswer(false);
            }, 1800);
            return;
        }
    }

    const [checkAnswer, setCheckAnswer] = useState(false);

    return (
        <div className={styles.main_container}>
            <section className={styles.flag_container}>
                <span>{currentLvl}/20</span>
                {currentLvlVariants && <img src={currentLvlVariants.find((el: LevelElementProps) => el.correctAnswer)?.flags.svg} alt="" />}
            </section>
            <section className={styles.country_variants_container}>
                {currentLvlVariants && currentLvlVariants.map((el: LevelElementProps) =>
                    <div
                        onClick={() => { !checkAnswer && CheckAnswer(el); !checkAnswer && setCheckAnswer(true) }}
                        key={el.name.official}
                        className={cn(styles.country_name, {
                            [styles.uncorrect_answer]: !el.correctAnswer && checkAnswer,
                            [styles.correct_answer]: el.correctAnswer && checkAnswer,
                        })}
                    >{el.name.common}</div>
                )}
            </section>
        </div>
    )
}

// export default withGameLayout('Flags game', '', Flags);