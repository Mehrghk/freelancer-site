import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
// import {orange, grey} from '@mui/material/colors';
import { Box, Paper } from "@mui/material";

interface props {
  title: string;
  items: string[];
  image: string;
}
export default function ImgMediaCard({ title, items, image }: props) {
  return (
    <Paper elevation={3} sx={{ maxWidth: 345,minWidth: 330, mb:10}}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          <Divider />
            <List>
              {items.length!==0 && items.map((item:string) => (
                <ListItem disablePadding key={item}>
                  <ListItemButton sx={{py:.5}}>
                    <ListItemText sx={{textAlign:'right'}} primary={item} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
        </Typography>
      </CardContent>
      <Box>
        <CardActions>
          {/* <Button size="small">Share</Button> */}
          <Button variant="contained" color="primary">همه پروژه های این بخش</Button>
        </CardActions>
        <CardMedia
          component="img"
          alt="engineering"
          height="150"
          image={image}
        />
      </Box>
    </Paper>
  );
}
