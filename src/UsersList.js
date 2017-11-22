import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Avatar from 'material-ui/Avatar';

const UsersList = props => (
  <List>
    {props.users.map((user, idx) => (
      <Link key={idx} to={`repos/${user.login}`}>
        <ListItem button>
          <Avatar alt={user.login} src={user.avatar_url} />
          <ListItemText primary={user.login} />
        </ListItem>
      </Link>
    ))}
  </List>
);

export default UsersList;
