import React from 'react';
import { Link } from 'gatsby';
import '../style.scss';
import { statePageUri } from '../../lib/common';
import { dateDiffInDays, parseDate } from '../../lib/dates';

const MultilineBlock = ({ text }) => {
    var subBlocks = text.split(/[\r?\n]+/g);

    return subBlocks.map(
        (subBlock) => <p class="multiline p">{subBlock}</p>
    )
};

export default MultilineBlock;