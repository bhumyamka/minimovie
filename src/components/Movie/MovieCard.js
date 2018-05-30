import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = (props) => (
            <div class="mdl-grid center-items">
                <div class="mdl-cell mdl-cell--4-col">
                    <div class="demo-card-wide mdl-card mdl-shadow--2dp ">
                        <div class="mdl-card__title">
                            <h2 class="mdl-card__title-text">{props.movie.title}</h2>
                            </div>
                            <div class="mdl-card__supporting-text">
                            {props.movie.description}
                            </div>
                            <div class="mdl-card__actions mdl-card--border">
                            <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" 
                                href={props.movie.url}>
                            Lihat di IMDB
                            </a>
                            </div>
                            <div class="mdl-card__menu">
                            <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                                <i class="material-icons">share</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div> 
);
MovieCard.PropTypes = {
    movie: PropTypes.object
};

export default MovieCard;