import React, { useState, useEffect } from 'react';
import { CountriesProps, FindCoutryProps } from './find_country.props';
import styles from './find_country.module.scss';
import cn from 'classnames';
import { AiOutlineSearch } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';
import { Link } from 'react-router-dom';

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
        if (e.target.value.length > 0) {
            setSearchResult(data?.filter((el: any) => el.name.official.toLowerCase().includes(e.target.value.toLowerCase())));
        }
        else {
            data && setSearchResult([...data]);
        }
        setHasMore(true)
    }

    const itemsPerPage = 20;
    const [hasMore, setHasMore] = useState(true);
    const [records, setRecords] = useState(itemsPerPage);

    const loadMore = () => {
        if (records === searchResult!.length) setHasMore(false);
        else {
            if (records + itemsPerPage < searchResult!.length) setRecords(records + itemsPerPage);
            else setRecords(searchResult!.length);
        }
    };

    const showItems = (el: any) => {
        var items = [];
        for (var i = 0; i < records; i++) {
            el[i] && items.push(
                <Link to={'/country/' + el[i].name.official} key={el[i].name.official}>
                    <motion.div className={styles.country_item}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <img src={el[i].flags.png} alt="" />
                        <span>{el[i].name.official}</span>
                    </motion.div>
                </Link>
            );
        }
        return items;
    };

    return (
        <div {...props} className={styles.main_block}>
            <section className={styles.form_block}>
                <form action="">
                    <input type="text" onChange={(e) => HandleSearch(e)} />
                    <AiOutlineSearch size={30} />
                </form>
            </section>
            <div className={styles.country_block}>
                {data &&
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={loadMore}
                        hasMore={hasMore}
                    >
                        {showItems(searchResult)}
                    </InfiniteScroll>}
            </div>
        </div>
    )
}