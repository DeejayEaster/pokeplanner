import React from "react";
import { Card } from "semantic-ui-react";
import ScrollingContent from "./PokeModal";

function Pokemon(props) {
  console.log("pokemon.js props:", props);
  return (
    <div className="poke-card flip-card">
      <div className="flip-card-inner">
        <div className="img-title flip-card-front">
          <img src={props.poke.sprites.front_default} />
          <Card.Meta>No.{props.poke.id}</Card.Meta>
          <Card.Header>{props.poke.name}</Card.Header>
        </div>
        <div className="flip-card-back">
          <h3>Base Stats</h3>
          <Card.Content>
            {props.poke.stats.map((stat, index) => {
              console.log(stat);
              return (
                <div key={index}>
                  <span className="pokemon-stat">{stat.stat.name}:</span>{" "}
                  {stat.base_stat}
                </div>
              );
            })}
          </Card.Content>
        </div>
      </div>
      <ScrollingContent props={props} />
    </div>
  );
}

export default Pokemon;
