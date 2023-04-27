import { QuizProps } from './quiz.props';
import styles from './quiz.module.scss';
import cn from 'classnames';
import withGameLayout from '../GamesContainer/games_container';

function Quiz({ ...props }: QuizProps): JSX.Element {


    return (
        <div {...props} className={styles.main_block}>
            QUIZ
        </div>
    )
}

export default withGameLayout('Quiz game', '', Quiz);