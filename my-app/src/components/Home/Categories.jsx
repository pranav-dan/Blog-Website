import React from 'react'
import { Button, TableRow,TableHead ,TableCell, makeStyles } from '@material-ui/core'
import {Link} from "react-router-dom"

const useStyle=makeStyles({
    createButton:{
        background:"rgb(115, 147, 179)",
        top:"5px",
        left:"15px",
        fontSize:"15px",

    },
    BtnLink:{
      color:"inherit",
      textDecoration:"none"
    }

})


export const Categories = () => {
    const classes=useStyle();
  return (
    <>
    <Link to={"/create"} className={classes.BtnLink}><Button variant="contained" className={classes.createButton}>Create Blog</Button></Link>
    <TableHead className={classes.categories}>
        <TableRow>
          <Link to={"/"} className={classes.BtnLink}>
        <TableCell>All Categories</TableCell>
        </Link>
        </TableRow>

        <TableRow>
          <Link to={"/?category=dataScience"} className={classes.BtnLink}>
        <TableCell>Data Science</TableCell>
        </Link>
        </TableRow>

        <TableRow>
          <Link to={"/?category=economics"} className={classes.BtnLink}>
        <TableCell>Economics</TableCell>
        </Link>
        </TableRow>

        <TableRow>
          <Link to ={"/?category=movies"} className={classes.BtnLink}>
            <TableCell>Movies</TableCell>
          </Link>
        </TableRow>

        <TableRow>
          <Link to={"/?category=sports"} className={classes.BtnLink}>
            <TableCell>Sports</TableCell>
          </Link>
        </TableRow>
  
    </TableHead>
    </>
  )
}
