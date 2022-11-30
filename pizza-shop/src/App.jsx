// import logo from './logo.svg';
import "./scss/app.scss"
import Header from "./JSX-components/Header"
import Categories from "./JSX-components/Categories"
import Sort from "./JSX-components/Sort"
import Card from "./JSX-components/Card"
import PizzasData from "./pizzas"

function App() {

  const pizzaCards = PizzasData.map(item => {

  

    
    return(
      <Card 
       key = {item.id}
      {...item}
      />
    )
  })

 
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
          <div className="content__items">
            {pizzaCards}
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
