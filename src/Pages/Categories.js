import React from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,
} from "@mui/material";




function Categories() {
  const [categories, setCategories] = React.useState([]);
  const [dishData, setDishData] = React.useState([]);
  const [dishes, setDishes] = React.useState([]);


  React.useEffect(() => {
    axios.get("https://resturantapi.lemonriver-2bb48c6f.germanywestcentral.azurecontainerapps.io/category").then((response) => {
      setCategories(response.data);
    });
  }, []);

  React.useEffect(() => {
    axios.get("https://resturantapi.lemonriver-2bb48c6f.germanywestcentral.azurecontainerapps.io/dish").then((response) => {
      setDishData(response.data);
    });
  }, []);

  return (
    <div>
      
      <Grid container spacing={4} sx={{direction:'rtl'}}>
        <Grid item xs={2.5}>
          {categories.map((category) => (
            <div sx={{ fontWeight: "bold", color: "black" }}
            onClick={() => {
              setDishes(
                dishData.filter((dish) => dish.category === category.name)
              );
            }}>
              <Card sx={{ Width: "100px", marginTop: "20px" }}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h8"
                    component="div"
                    sx={{ textAlign: "center" }}
                  >
                    {category.name}
                  </Typography>
                </CardContent>
                <CardMedia
                  sx={{ height: '100px', width: "100%" }}
                  image={category.imageUrl}
                />
      
              </Card>
            </div>
          ))}
        </Grid>
        <Grid item xs={8}>
          {dishes.map((dish) => (
            <div>
              <Card sx={{ maxWidth: "100%", marginTop: "20px" }}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ textAlign: "center" }}
                  >
                    {dish.name}
                  </Typography>
                  
                </CardContent>
                <CardMedia
                  sx={{ height: 200, width: "100%" }}
                  image={dish.imageUrl}
                />
                <Typography
                    gutterBottom
                    variant="h8"
                    component="div"
                    sx={{ textAlign: "center" }}
                  >
                    {dish.price}₪ :מחיר
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h8"
                    component="div"
                    sx={{ textAlign: "center" }}
                  >
                    {dish.description}
                  </Typography>
              </Card>
            </div>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default Categories;
