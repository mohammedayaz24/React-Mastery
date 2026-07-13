import { Bookmark } from 'lucide-react'
import styles from './Cards.module.css'


const Cards = (props) => {
    console.log(props)
  return (
    <div>
         <div className={styles.card}>
          <div>
            <div className={styles.top}>
            <img
              src={props.img}
              alt={props.company}
              loading="lazy"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/44'; }}
            />
            <button>Save<Bookmark size={12}/></button>
            </div>
            <div className={styles.center}>
            <h3>{props.company}<span>{props.date}</span></h3>
            <h2>{props.post}</h2>
            <div className={styles.tag}>
              <h4>{props.tag1}</h4>
              <h4>{props.tag2}</h4>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div>
              <h3>{props.pay}</h3>
              <p>{props.location}</p>
          </div>
          <button>Apply</button>
          </div>
        </div>
    </div>
  )
}

export default Cards