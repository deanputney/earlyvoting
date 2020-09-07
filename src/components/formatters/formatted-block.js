import '../style.scss';
import React from 'react';
import MultilineBlock from './multiline-block';
import BulletedBlock from './bulleted-block';


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
    if (maybeBulletedText(text)) {
        return <BulletedBlock text={text} />
    }
    if (maybeMultilineText(text)) {
        return <MultilineBlock text={text}/>
    }
};

export default FormattedBlock;