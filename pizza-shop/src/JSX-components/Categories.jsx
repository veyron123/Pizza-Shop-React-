import React from 'react'

export default function Categories() {

    const[index, setIndex] = React.useState()

        function onClickCategory(index){
            setIndex(index)
        }

    const categories = ["Все","Мясные","Вегетарианские","Гриль","Острые","Закрытые"]

    const category =  categories.map((item, i) => <li onClick = { () => onClickCategory(i)}  className= {index === i ?'active':""}>{item}</li>)

    return (
        <div className="categories">
            <ul>
                {/* <li onClick = { () => onClickCategory(0)}  className= {index === 0 ?'active':""}>Все</li>
                <li onClick = { () => onClickCategory(1)} className= {index === 1 ?'active':""}>Мясные</li>
                <li onClick = { () => onClickCategory(2)} className= {index === 2 ?'active':""}>Вегетарианская</li>
                <li onClick = { () => onClickCategory(3)} className= {index === 3 ?'active':""}>Гриль</li>
                <li onClick = { () => onClickCategory(4)} className= {index === 4 ?'active':""}>Острые</li>
                <li onClick = { () => onClickCategory(5)} className= {index === 5 ?'active':""}>Закрытые</li> */}
                {category}
            </ul>
        </div>
    )
}
