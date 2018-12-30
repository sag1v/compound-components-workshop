import React, { Component } from 'react';
import ClampLines from 'react-clamp-lines';
import defaultImage from './defaultImage';
import '../card.css';

const CardContext = React.createContext(false);


const Title = ({ children }) => <div className="title">{children}</div>;
const SubTitle = ({ children }) => <div className="subTitle">{children}</div>;
const Meta = ({ children }) => <div className="meta">{children}</div>
const Seperator = () => <div className="seperator" />
const Description = ({ children, trunc }) => (
    <div className="description" onClick={(e) => e.stopPropagation()}>
        <ClampLines
            text={children}
            lines={trunc}
        />
    </div>
);

const Marker = ({ active }) => (
    <div className={`marker  ${active ? 'active' : ''}`}>✓</div>
);

const ConnectedMarker = () => (
    <CardContext.Consumer>
        {
            (active) => <Marker active={active} />
        }
    </CardContext.Consumer>
)

class Poster extends Component {
    onError = ({ target }) => {
        const { placeHolder } = this.props;
        target.src = placeHolder || defaultImage;
    }

    render() {
        const { src, alt } = this.props;
        return <img className="poster" onError={this.onError} src={src} alt={alt}></img>
    }
}


class Card extends Component {

    state = {
        active: false
    }

    onClick = () => {
        this.setState(state => ({ active: !state.active }))
    }

    render() {
        const { active } = this.state;
        const { children } = this.props;
        return (
            <div className="card" onClick={this.onClick}>
                <CardContext.Provider value={active}>
                    {children}
                </CardContext.Provider>
            </div>
        );
    }
}

Card.Title = Title;
Card.SubTitle = SubTitle;
Card.Meta = Meta;
Card.Seperator = Seperator;
Card.Description = Description;
Card.Poster = Poster;
Card.Marker = ConnectedMarker;

export default Card;