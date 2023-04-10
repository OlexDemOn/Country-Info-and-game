import { CartProps } from './cart.props';
import styles from './cart.module.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Cart({ children, link, ...props }: CartProps): JSX.Element {


    return (
        <Link to={link}>
            <div {...props} className={styles.cart}>
                {children}
            </div>
        </Link>
    )
}