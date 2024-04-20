import styles from './NavButton.module.css' 
const NavButton=(props)=>{
    return(
        <button className={styles.NavButton}>{props.children}</button>
    );
}
export default NavButton;