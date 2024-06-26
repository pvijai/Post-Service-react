import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1>Title {props.title}</h1>
        <div className="Info">
<div className="Author">Author {props.author}</div>
        </div>
    </article>
);

export default post;