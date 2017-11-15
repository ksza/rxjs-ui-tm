import React, { Component } from 'react';

import List, { ListItem, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Avatar from 'material-ui/Avatar';

const UsersList = props => (
  <List>
    {props.users.map((user, idx) => (
      <ListItem key={idx} button onClick={() => window.open(user.html_url)}>
        <Avatar alt={user.login} src={user.avatar_url} />
        <ListItemText primary={user.login} />
      </ListItem>
    ))}
  </List>
);

export default UsersList;
