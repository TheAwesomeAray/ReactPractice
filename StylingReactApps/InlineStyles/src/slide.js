import React from 'react';
import styles from './slides-styles';

const { object, string } = React.PropTypes

function Slide(props) {
  return (
    <article style={{...props.style, ...styles.root}}>
      <img src={props.image} alt={props.title} />
      <footer style={styles.footer}>
        <h2 style={styles.title}>{props.title}</h2>
        <div>{props.children}</div>
      </footer>
    </article>
  )
}

Slide.propTypes = {
  image: string.isRequired,
  style: object,
  title: string
}

export default Slide
