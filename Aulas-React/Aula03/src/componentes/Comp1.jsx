import { useState } from 'react'
import styles from './Comp1.module.css'

function Comp1() {
    let images = ['berserk.jpg', 'inazuma.jfif', 'bleach.jpg']
    let img2 = ['gokuoldschool.webp', 'inazuma-eleven.jfif']

    let [imgAtual, setImgAtual] = useState(images[0])
    
    let [imgAt2, setImgAt2] = useState (img2[0])


    function trocarImagem() {
        if (imgAt2 == img2[0]) {
            setImgAt2(img2[1])
        } else {
            setImgAt2(img2[0])
        }
    }
    
    return ( 
        <>
        <h3>Principais Hooks</h3>
        <ul className={styles.lista}>
            <li>useState</li>
            <li>UseEffect</li>
            <li>UseContext</li>
            <li>useReducer</li>
            <li>useMemo</li>
            <li>useCallback</li>
        </ul>


        <h2>useState</h2>
        <img id={styles.imagemNova} onClick={() => {imgAtual == images[0] ? setImgAtual(images[1]):setImgAtual(images[2])}} src={imgAtual} alt="" width={'300px'} />
        <br /><br /><br /><br /><br />
        <img onClick={trocarImagem} src={imgAt2} alt="" />

        <br /><br /><br /><br /><br /><br /><br /><br />


        </>
     );
}

export default Comp1;