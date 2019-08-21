import _ from "lodash";
import React from "react";
import { Button, Header, Icon, Image, Modal } from "semantic-ui-react";
import { heightConvert } from "../store/actions";

const ScrollingContent = ({ props }) => (
  console.log("modal props", props),
  (
    <Modal trigger={<Button>Add</Button>}>
      <Modal.Content image scrolling>
        <Header>{props.poke.name}</Header>
        <Image size="medium" src={props.poke.sprites.front_default} wrapped />

        <Modal.Description>
          <h3 className="type-container">
            <span>Type: </span>{" "}
            <div className="type-results">
              {props.poke.types.map((type, index) => {
                return (
                  <div key={index}>
                    <span className="pokemon-type">
                      {(index ? ", " : " ") + " " + type.type.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </h3>
          <h3 className="type-container">
            Abilities:
            <div className="type-results">
              {props.poke.abilities.map((ability, index) => {
                return (
                  <div key={index}>
                    <span className="pokemon-type">
                      {(index ? ", " : " ") + " " + ability.ability.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </h3>
          <h3 className="type-container">
            Weight:
            <div className="type-results">{`${props.poke.weight} lbs`}</div>
          </h3>
        </Modal.Description>
      </Modal.Content>
      <div className="move-container">
        <h3>
          Move List: <br />
          <div className="move-results">
            {props.poke.moves.map((move, index) => {
              return (
                <div className="move-items" key={index}>
                  <span className="pokemon-move">{move.move.name}</span>
                </div>
              );
            })}
          </div>
        </h3>
      </div>

      <Modal.Actions>
        <Button primary>
          Proceed <Icon name="chevron right" />
        </Button>
      </Modal.Actions>
    </Modal>
  )
);

export default ScrollingContent;
