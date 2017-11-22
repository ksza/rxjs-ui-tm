import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import HotSearch from './HotSearch';

class ReposList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: []
    };
  }

  getItemsFromApi() {
    return fetch(
      'https://api.github.com/users/' +
        this.props.match.params.username +
        '/repos'
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ repos: responseJson });
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentWillMount() {
    this.getItemsFromApi();
  }

  render() {
    return (
      <List>
        {this.state.repos.map((row, idx) => (
          <ListItem key={idx}>
            <ListItemText primary={row.name} />
          </ListItem>
        ))}
      </List>
    );
  }
}

export default ReposList;
