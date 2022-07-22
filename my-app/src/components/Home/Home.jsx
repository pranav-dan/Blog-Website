import React from 'react'
import {Grid,Box} from "@material-ui/core"
import { Banner } from './Banner'
import { Categories } from './Categories'
import { Posts } from './Posts'


export const Home = () => {
  return (
      <>
      <Banner/>
      <Grid container  >
        
          <Grid item lg={2} xs={12} sm={2}>
            <Categories/>
          </Grid>
            <Grid  item lg={10} xs={12} xm={10}>
                <Posts/>
            </Grid>
        
      </Grid>
      
      </>
    
  )
}

