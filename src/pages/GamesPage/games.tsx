import { GamesProps } from './games.props';
import styles from './games.module.scss';
import cn from 'classnames';

export default function Games({ ...props }: GamesProps): JSX.Element {


    return (
        <div {...props} className={styles.main_block}>

        </div>
    )
}