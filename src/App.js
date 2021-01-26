import React,{useState} from "react";
import './App.css';
import './main.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './header.js';
import Food from './food.js';
import Animals from './animals.js';
import Game from './games.js';
import Footer from './footer.js';


function App() {
  const[items,setItems] = useState([
    {name:"Fruit Tart", image: "https://houseofnasheats.com/wp-content/uploads/2018/04/French-Fruit-Tart-4.jpg",description:"I love fruit tarts! I can eat an entire fruit tart by myself. I really want to try out this <a class='white' href='https://www.delish.com/cooking/recipe-ideas/a32896550/fruit-tart-recipe/' target='_blank'><strong>recipe.</strong></a>"},
    {name:"Coffee", image: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_938993594_391384.jpg", description:"Coffee is life. Coffee is like 30% of my personality and deserves some recognition at my graduation because I don't know how I would have gotten through school without it."},
    {name:"Turon", image: "https://panlasangpinoy.com/wp-content/uploads/2009/06/Turon-500x485.jpg", description: "An amazing Philippine desert that my mom makes. It's banana rolled in cinnimon sugar and wrapped in lumpia."},
]);

const[animals,setAnimals] = useState([
  {name:"Cat", image: "https://playjunkie.com/wp-content/uploads/2019/07/OwlKitty.jpg",description: "As many of you have seen my kitten Espurr, he is a demon but he is my baby kitten and I love him."},
  {name:"Red Panda", image: "https://i0.wp.com/www.redpandanetwork.org/wp-content/uploads/2018/11/stare_adoptipn-page_small-2.jpg?resize=680%2C450&ssl=1", description:"Red pandas are so cute, they are basically mini bears that run around like cats and I need one in my life"},
  {name:"Snake", image: "https://qph.fs.quoracdn.net/main-qimg-ad2df71f711af7f4f06641889b97e5cb",description:"I always liked snakes and one day I will own one of my own."},
]);

const[games,setGames] = useState([
  {name:"Gris", image: "https://i2.wp.com/bunnygaming.com/wp-content/uploads/2018/11/gris.png?fit=1920%2C1080&ssl=1",description:"Beautiful game, I love the artwork from this game. I've used it in a couple of my projects"},
  {name:"Journey", image: "https://oyster.ignimgs.com/wordpress/stg.ign.com/2012/03/journey_072315_1600.jpg",description:"Probably my absolute favorite game. The art and music are phenominal."},
  {name:"Abzu", image: "https://d2skuhm0vrry40.cloudfront.net/2019/articles/2019-09-05-23-41/abzu-and-the-end-is-nigh-are-currently-free-on-the-epic-store-1567723256379.jpg/EG11/resize/1200x-1/abzu-and-the-end-is-nigh-are-currently-free-on-the-epic-store-1567723256379.jpg",description:"Another 'That Game Company' game. Really pretty game that I also enjoy."},
]);

  return (
    <div className="app">
      <section>
          <Header />
      </section>

      <section>
      <div className="food">
          <h1 className="text-center red my-4">FOOD RELATED</h1>
          <div className="container">
            <div className="row">
            {items.map(item => (
              <Food name={item.name} image={item.image} description={item.description}/>
            ))}
            </div>
          </div>
        </div>
      </section>

      <section>
      <div className="animals">
          <h1 className="text-center red my-4">MY FAVORITE ANIMALS</h1>
          <div className="container">
            <div className="row">
            {animals.map(animal => (
              <Food name={animal.name} image={animal.image} description={animal.description} />
            ))}
            </div>
          </div>
        </div>
      </section>

      <section>
      <div className="video-games">
          <h1 className="text-center red my-4">MY FAVORITE VIDEO GAMES</h1>
          <div className="container">
            <div className="row">
            {games.map(game => (
              <Food name={game.name} image={game.image} description={game.description} />
            ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>

    </div>
  );
}
export default App;
