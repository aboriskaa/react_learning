import preloader from '../../../assets/images/preloader.svg'
import styles from './Preloader.module.css';

let Preloader = () => {
    return <div className={styles.wrapper}>
        <img src={preloader} alt="Loading..." className={styles.preldr} />
    </div>
}

export default Preloader