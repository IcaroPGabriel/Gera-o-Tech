import { Checkbox } from 'primereact/checkbox';
import styles from './FilterGroup.module.css';     
function FilterGroup() {
    
    {categories.map((category) => {
        return (
            <div key={category.key} className="flex align-items-center">
                <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === category.key)} />
                <label htmlFor={category.key} className="ml-2">{category.name}</label>
            </div>
        );
    })}
    
    return ( 
    <>
    <h4>Filtrar por</h4>
    <hr />
    <article className="filtros">
        <section className={styles.marca}>
        
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