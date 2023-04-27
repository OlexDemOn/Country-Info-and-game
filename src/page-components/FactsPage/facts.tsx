import { FactsProps } from './facts.props';
import styles from './facts.module.scss';
import cn from 'classnames';
import withGameLayout from '../GamesContainer/games_container';

function Facts({ ...props }: FactsProps): JSX.Element {



    return (
        <div {...props} className={styles.main_block}>
            FACTS
        </div>
    )
}

export default withGameLayout('Facts game', '', Facts);