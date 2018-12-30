import React, { Component } from 'react';
import ClampLines from 'react-clamp-lines';
import '../card.css';

const defaultImage = "https://www.thx.com/assets/uploads/2018/07/film-reel-c.png";

class Card extends Component {

    state = {
        active: false
    }

    onClick = () => {
        this.setState(state => ({ active: !state.active }))
    }

    onError = ({ target }) => {
        target.src = defaultImage;
    }

    render() {
        const { active } = this.state;
        const { title, subTitle, meta, description, imageUrl } = this.props;
        return (
            <div className="card" onClick={this.onClick}>
                <div className="content">
                    <div className="title">{title}</div>
                    <div className="subTitle">{subTitle}</div>
                    <div className="meta">{meta}</div>
                    <div className="seperator" />
                    <div className="description">
                        <ClampLines
                            text={description}
                            lines={2}
                        />
                    </div>
                </div>
                <img className="poster" onError={this.onError} src={`${imageUrl}`} alt="poster"></img>
                <div className={`marker  ${active ? 'active' : ''}`}>✓</div>
            </div>
        );
    }
}

export default Card;