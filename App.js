import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, List, ListItem, ListItemText, CssBaseline } from '@mui/material'; // Import Material-UI components
import Photos from '../src/components/photos';
import Comments from '../src/components/comments';
import Albums from '../src/components/albums';
import Posts from '../src/components/posts';
import Todos from '../src/components/todos';
import Users from '../src/components/users';
import './App.css';
// App component
function App() {
  return (
    <Router>
      <CssBaseline /> {/* Apply baseline styles for consistent rendering */}

      {/* AppBar for navigation */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hackthon React project
          </Typography>
          <List component="nav" aria-label="main navigation">
            <ListItem component={Link} to="/photos" button>
              <ListItemText primary="Photos" />
            </ListItem>
            <ListItem component={Link} to="/comments" button>
              <ListItemText primary="Comments" />
            </ListItem>
            <ListItem component={Link} to="/albums" button>
              <ListItemText primary="Albums" />
            </ListItem>
            <ListItem component={Link} to="/posts" button>
              <ListItemText primary="Posts" />
            </ListItem>
            <ListItem component={Link} to="/todos" button>
              <ListItemText primary="Todos" />
            </ListItem>
            <ListItem component={Link} to="/users" button>
              <ListItemText primary="Users" />
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 2 }}> {/* Container for content with margin top */}
        <Routes>
          <Route path="/photos" element={<Photos />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
