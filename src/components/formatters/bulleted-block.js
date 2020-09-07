import React from 'react';
import { Link } from 'gatsby';
import '../style.scss';
import { statePageUri } from '../../lib/common';
import { dateDiffInDays, parseDate } from '../../lib/dates';

const BulletedBlock = ({ text }) => {
    var subBlocks = text.split(/[\r?\n]+/g);

    return (
        subBlocks.map(
            (subBlock) => <p>{subBlock}</p>
        )
    )
};

export default BulletedBlock;