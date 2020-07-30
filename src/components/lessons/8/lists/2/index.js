import React from 'react';

const friends = [
  'Mikenzi',
  'Cash',
  'Steven',
  'Kimmy',
  'Doug'
];

const List = ({friends}) => {
  // Render a list using the "friends" being passed in.
  return (
    <ul>
      {friends.map((friend, idx) => (
          <li key={idx}>{friend}</li>
      ))}
    </ul>
  );
};

const Task = () => {
  return (
    <div>
      <List friends={friends} />
    </div>
  );
};

export default Task;
