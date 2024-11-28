import styles from './Home.module.css'
import img from '../img/home.png'
import LinkButton from '../layout/LinkButton'

function Home () {
    return (
        <section className={styles.home_container}>
            <h1>Welcome to<span>Recipes</span></h1>
            <p>Start creating your Recipe</p>
            <LinkButton to= "/recipes/add" text="Create your Recipe" />
            <img src={img} alt="recipes" />
        </section>
    )
}

export default Home