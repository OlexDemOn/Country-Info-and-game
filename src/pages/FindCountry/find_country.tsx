import React, { useState, useEffect } from 'react';
import { CountriesProps, FindCoutryProps } from './find_country.props';
import styles from './find_country.module.scss';
import cn from 'classnames';
import { AiOutlineSearch } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function FindCountry({ ...props }: FindCoutryProps): JSX.Element {

    const [data, setData] = useState<CountriesProps[]>();
    const [searchResult, setSearchResult] = useState<any>('');

    useEffect(() => {
        const dataFetch = async () => {
            const data = await (
                await fetch(
                    "https://restcountries.com/v3.1/all?fields=name,flags"
                )
            ).json();

            setData(data);
            setSearchResult(data);
        };
        dataFetch();

    }, [])


    function HandleSearch(e: any) {
        setSearchResult(data?.filter((el: any) => el.name.official.toLowerCase().includes(e.target.value.toLowerCase())));
    }

    const navigate = useNavigate();
    const routeChange = (route: string) => {
        navigate(`/country/${route}`);
    }

    return (
        <div {...props} className={styles.main_block}>
            <section className={styles.form_block}>
                <form action="">
                    <input type="text" onChange={(e) => HandleSearch(e)} />
                    <AiOutlineSearch size={30} />
                </form>
            </section>
            <div className={styles.country_block}>
                {searchResult && searchResult.map((el: any) =>
                    <div className={styles.country_item} key={el.name.official}
                        onClick={() => routeChange(el.name.official)}
                    >
                        <img src={el.flags.svg} alt="" />
                        <span>{el.name.official}</span>
                    </div>
                )}
            </div>
        </div>
    )
}