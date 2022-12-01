// import logo from './logo.svg';
import React from 'react'
import "./scss/app.scss"
import Header from "./JSX-components/Header"
import Categories from "./JSX-components/Categories"
import Sort from "./JSX-components/Sort"
import Card from "./JSX-components/Card"
import Skeleton from "./JSX-components/Skeleton"
// import PizzasData from "./pizzas"

function App() {



  let [pizzaCards, setPizzaCards] = React.useState([])

  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    fetch('https://63879364e399d2e473033f49.mockapi.io/items')
      .then((res) => { return res.json(); })
      .then(json => {
        setPizzaCards(json);
        setIsLoading(false);
      });
  }, []);

    console.log([...Array(6).keys()])


  const Cards = isLoading ? [...Array(6).keys()].map((item) => {
    return (
      <Skeleton
        key={item}
        {...item}
      />
    )
  }):pizzaCards.map(item => {
      return (
        <Card
          key={item.id}
          {...item}
        />
      )
    })




  // const Cards = pizzaCards.map(item => {
  //   return (
  //     <Skeleton
  //       key={item.id}
  //       {...item}
  //     />
  //   )
  // })

  return (

    <div className="wrapper">
      < Header />
      
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          {isLoading && "Загрузка..."}
          <div className="content__items">
            {Cards}
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
