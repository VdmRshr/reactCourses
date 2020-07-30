import React, {Fragment} from 'react';

import faker from 'faker';
import Chance from 'chance';

const MIN_ID = 0;
const MAX_ID = 400;

const MIN_COUNT = 5;

const chance = Chance();

const generateData = (count) => {
    const ids = chance.unique(chance.integer, count, {
        min: MIN_ID,
        max: MAX_ID
    });
    return ids.map(id => (
        {id: id, title: faker.lorem.sentence(), body: faker.lorem.paragraphs(2)}
    ));
};

const data = generateData(MIN_COUNT);

const Articles = ({data}) => {
    return null; //remove this line
    //uncomment and fix the code below
    return (
        <Fragment>
            <h1>Articles</h1>
            <div>
                {data.map(({id, title, body}) => (
                    <Fragment key={id}>
                        <h3>{title}</h3>
                        <p>{body}</p>
                    </Fragment>
                ))}
            </div>
        </Fragment>
    );
}

const Task = () => {
    return (
        <div>
            <Articles data={data}/>
        </div>
    );
};

export default Task;
