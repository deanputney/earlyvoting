import '../style.scss';
import React from 'react';
import ReactMarkdown from 'react-markdown';


const maybeMultilineText = (text) => {
    if (text == null) {
        return false;
    }
    return text.match(/[\r?\n]+/g) !== null
}

const maybeBulletedText = (text) => {
    if (text == null) {
        return false;
    }
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
