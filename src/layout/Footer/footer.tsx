import { FooterProps } from './footer.props';
import styles from './footer.module.scss';
import cn from 'classnames';

export default function Footer({ className, ...props }: FooterProps): JSX.Element {
    return (
        <div {...props} className={cn(className, styles.footer)}>
            Footer
        </div>
    )
}