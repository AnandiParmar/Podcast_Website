import styles from "../search/Search.module.css";

export default function (){
    return <div className={styles.mainSearch}>
    <h1 className={styles.searchHead}>Search Podcasts</h1>
    <div className={styles.searchInput}>
        <input type="text" />
    </div>
    
    </div>
}