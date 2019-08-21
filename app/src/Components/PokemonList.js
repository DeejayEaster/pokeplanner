import React, { useEffect } from "react";
import Loader from "react-loader-spinner";
import Pokemon from "./Pokemon";
import { connect } from "react-redux";
import { getData } from "../store/actions";

const PokemonList = props => {
  useEffect(() => props.getData(), []);
  return (
    <>
      <div className="card-container">
        {props.isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height="35" width="100" />
        ) : (
          ""
        )}
        {props.pokemon &&
          props.pokemon.map(mon => <Pokemon poke={mon} key={mon.name} />)}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    isLoading: state.isLoading,
    pokemon: state.pokemon
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(PokemonList);
