import styles from './card.module.css'
const card=(props)=>{
    return(
        <div className={styles.card}>{props.children}</div>
    );
}
export default card;