import '../style.scss';
import React from 'react';
import MultilineBlock from './multiline-block';
import BulletedBlock from './bulleted-block';


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
    if (maybeBulletedText(text)) {
        return <BulletedBlock text={text} />
    }
    if (maybeMultilineText(text)) {
        return <MultilineBlock text={text}/>
    }
    return text;
};

export default FormattedBlock;
