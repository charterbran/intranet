import {GearsIcon} from 'unify-design-icons'
import styles from './resource-card.module.scss'

const ResourceCard = (props) => {
    return (
        <div className={styles.ResourceCard}>
            <GearsIcon className={styles.icon} />
            <h6 className='detail-title'>{props.title}</h6>
            <p className={styles.description}>{props.description}</p>
            
            <a href={props.link} className={styles.button}>
                Read more
            </a>
        </div>
    )
}

export default ResourceCard