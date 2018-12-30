import React, { Component } from 'react';
import ClampLines from 'react-clamp-lines';
import styles from './styles.module.css';

const defaultImage = "https://www.thx.com/assets/uploads/2018/07/film-reel-c.png";

class Card extends Component {

    onError = ({ target }) => {
        target.src = defaultImage;
    }

    render() {
        const { title, subTitle, meta, description, imageUrl } = this.props;
        return (
            <div className={styles.card}>
                <div className={styles.content}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.subTitle}>{subTitle}</div>
                    <div className={styles.meta}>{meta}</div>
                    <div className={styles.seperator} />
                    <div className={styles.description}>
                        <ClampLines
                            text={description}
                            lines="2"
                        />
                    </div>
                </div>
                <img className={styles.poster} onError={this.onError} src={`${imageUrl}`} alt="poster"></img>
            </div>
        );
    }
}

export default Card;