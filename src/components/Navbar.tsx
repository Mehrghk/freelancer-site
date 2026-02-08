import styles from "../App.module.css";
interface Props{
    onClick: ()=> void;
}
const Navbar = ({onClick}:Props) => {
  return (
    <nav >
        <div className={styles.navbar1}>
            <p className={styles.logo}>
                Free<span className={styles.impWords}>Mo</span>Lancer
            </p>
            
            <ul className={styles.navli}>
                <li>
                    <a aria-current="page" href="#">پروژه ها</a>
                </li>
                <li>
                    <a href="#">درباره ما</a>
                </li>
                <li>
                    <a href="#">تعرفه ها</a>
                </li>
            </ul>
            
            <button className={styles.enterButton} type="submit">ورود</button>
            <button className={styles.menu} onClick={onClick}>≡</button>
        </div>
        
    </nav>
  )
}
// const Navbar = () => {
//   return (
//     <nav className="navbar sticky-bottom navbar-expand-lg bg-body-tertiary opacity-50" >
//         <div className="container-fluid">
//             <a className="navbar-brand" href="#">
//                 FreeMoLancer
//             </a>
//             <button className="navbar-toggler">
//                 <span className="navbar-toggler-icon"></span>
//             </button>
            
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                     <li className="nav-item">
//                         <a className="nav-link" aria-current="page" href="#">پروژه ها</a>
//                     </li>
//                     <li className="nav-item">
//                         <a className="nav-link" href="#">درباره ما</a>
//                     </li>
//                 </ul>
//                 <form className="d-flex" role="search">
//                     {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
//                     <button className="btn btn-outline-primary" type="submit">Search</button>
//                 </form>
//                 <button className="btn btn-primary me-2" type="submit">ورود</button>

//             </div>
//         </div>
//     </nav>
//   )
// }

export default Navbar;
