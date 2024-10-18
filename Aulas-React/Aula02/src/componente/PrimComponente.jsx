import './PrimComponente.css'
import styles from './PrimComponente.module.css'

function PrimComponente() {
    return (  
        <>
        <h1>Primeiro Componente</h1>
        <p className={`${styles.primaria} ${styles.fonte}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa praesentium corrupti neque quis optio quidem sapiente tempore facilis! Illo corrupti, dolorum aut eum laboriosam assumenda velit accusantium minus blanditiis eos.
        Ratione quis molestias obcaecati quibusdam aut. Reprehenderit perferendis quo, atque maxime cum earum unde, eligendi explicabo doloribus optio nostrum cumque ipsum quam sed labore dolore odit animi voluptas accusantium quae!</p>
        <p className={styles.secundaria}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam mollitia labore ullam expedita molestiae explicabo nulla dolore, quidem, necessitatibus veritatis accusamus sint, provident non cupiditate minima ex qui distinctio eligendi?</p>
        
        </>
        

    );
}

export default PrimComponente;