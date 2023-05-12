import "./styles/MainBody.scss";
import Search from "../components/Search";
import ContentColumn from "../components/ContentColumn";
import MainCard from "../components/MainCard";
import PosterMak from "../assets/posterMak.svg";
import Eda1 from "../assets/eda1.svg";
import Eda2 from "../assets/eda2.svg";
import content from "../assets/Content.json";
import { useParams } from "react-router-dom";

const BrakfastBody = () => {
  const { mealName } = useParams();
  const meals = content.data[mealName];
  const title = meals.title;
  const cards = meals.cards;

  return (
    <div className="body">
      <ContentColumn>
        <Search />

        <p className="p1">{title}</p>
        <div className="cardsContent">
          {cards.map((meal, index) => (
            <MainCard
              poster={meal.poster}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </div>
      </ContentColumn>
    </div>
  );
};

export default BrakfastBody;
