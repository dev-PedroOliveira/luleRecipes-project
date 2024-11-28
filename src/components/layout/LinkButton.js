import styles from './LinkButton.module.css'
import { Link, useNavigate } from 'react-router-dom'

function LinkButton ({to, text, icon, ...rest}) {
    return (
        <Link className={styles.btn} to={to} {...rest}>
            {icon} {text}
        </Link>
    )
}

export default LinkButton