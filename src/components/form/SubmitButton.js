import styles from './SubmitButton.module.css'

function SubmitButton ({ text, onSubmit }) {
    return (
       <div><button className={styles.btn} type='submit'> {text} </button></div>
    )
}

export default SubmitButton