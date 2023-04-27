import React, { useState, useEffect } from 'react';
import { CountryItemProps, CoutryProps } from './country.props';
import styles from './country.module.scss';
import cn from 'classnames';
import { useLocation } from 'react-router-dom';

export default function Country({ children, ...props }: CoutryProps): JSX.Element {

    const [data, setData] = useState<CountryItemProps>();

    const countryToFind = useLocation();
    useEffect(() => {
        const dataFetch = async () => {
            const data = await (
                await fetch(
                    `https://restcountries.com/v3.1/name/${countryToFind.pathname.slice(9)}?fields=name,flags,status,currencies,capital,altSpellings,region,subregion,languages,borders,area,maps,population,timezones,continents,flags,coatOfArms`
                )
            ).json();

            setData(data[0]);
        };
        dataFetch();

    }, []);

    console.log(data);

    return (
        <div {...props} className={styles.main_block}>
            <div className={styles.country_mainInfo}>
                <span>Country name: </span>
                <span>{data?.name.official}</span>
                <span>The capital: </span>
                <span>{data?.capital}</span>
                <span>Population: </span>
                <span>{data?.population}</span>
                <span>Native languages:</span>
                <span className={cn({
                    [styles.languages]: data && Object.keys(data.languages).length > 1
                })}>
                    {data && Object.keys(data.languages).map((el: string) => <p key={el}>
                        {data.languages[el]}
                    </p>)}
                </span>
                <span>Region: </span>
                <span>{data?.region}</span>
                <span>Subregion: </span>
                <span>{data?.subregion}</span>
                <span>Timezone: </span>
                <span>{data?.timezones[0]}</span>
            </div>
            <div></div>
            <section className={styles.right_part}>
                <div className={styles.country_flags}>
                    <img src={data?.flags.svg} alt={data?.flags.alt} />
                    <img src={data?.coatOfArms.svg} alt="" />
                </div>
                <div className={styles.country_placement}>

                </div>

            </section>

        </div>
    )
}