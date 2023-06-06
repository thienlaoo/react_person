import React from 'react';

export const Person = ({ person: {
  name,
  age,
  partnerName,
  isMarried,
  sex,
} }) => (
  <section className="Person">
    <h2 className="Person__name">
      {`My name is ${name}`}
    </h2>
    {age ? (
      <p className="Person__age">
        {`I am ${age}`}
      </p>
    ) : null}
    <p className="Person__partner">
      {isMarried && sex === 'm' && `${partnerName} is my wife`}
      {isMarried && sex === 'f' && `${partnerName} is my husband`}
      {!isMarried && 'I am not married'}
    </p>
  </section>
);
