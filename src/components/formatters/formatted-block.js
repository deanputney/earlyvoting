import '../style.scss';
import React from 'react';
import MultilineBlock from './multiline-block';
import BulletedBlock from './bulleted-block';
import ReactMarkdown from 'react-markdown';


const maybeMultilineText = (text) => {
    return text.match(/[\r?\n]+/g) !== null
}

const maybeBulletedText = (text) => {
    var match = text.match(/\*/g);
    if ((match !== null) && match.length > 1) {
        return true;
    }
    return false;
}

const FormattedBlock = ({ text }) => {
    return <ReactMarkdown source={text} />
};

export default FormattedBlock;