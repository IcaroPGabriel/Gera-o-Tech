import { Checkbox } from 'primereact/checkbox';
import styles from './FilterGroup.module.css';     
function FilterGroup() {
    
    
    return ( 
    <>
    <h4>Filtrar por</h4>
    <hr />
    <article className="filtros">
        <section className={styles.marca}>
        <div className="flex flex-wrap justify-content-center gap-3">
    <div className="flex align-items-center">
        <Checkbox inputId="ingredient1" name="pizza" value="Cheese" onChange={onIngredientsChange} checked={ingredients.includes('Cheese')} />
        <label htmlFor="ingredient1" className="ml-2">Adidas</label>
    </div>
    <div className="flex align-items-center">
        <Checkbox inputId="ingredient2" name="pizza" value="Mushroom" onChange={onIngredientsChange} checked={ingredients.includes('Mushroom')} />
        <label htmlFor="ingredient2" className="ml-2">Nike</label>
    </div>
    <div className="flex align-items-center">
        <Checkbox inputId="ingredient3" name="pizza" value="Pepper" onChange={onIngredientsChange} checked={ingredients.includes('Pepper')} />
        <label htmlFor="ingredient3" className="ml-2">Puma</label>
    </div>
    <div className="flex align-items-center">
        <Checkbox inputId="ingredient4" name="pizza" value="Onion" onChange={onIngredientsChange} checked={ingredients.includes('Onion')} />
        <label htmlFor="ingredient4" className="ml-2">Umbro</label>
    </div>
</div>
        </section>
        <section className="categoria">

        </section>
        <section className="genero">

        </section>
        <section className="estado">

        </section>
    </article>
    </> 
    );
}

export default FilterGroup;