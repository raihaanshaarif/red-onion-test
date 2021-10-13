import React from 'react';
import './Breakfasts.css'

import bf1 from '../../../Images/Breakfast/breakfast1.png'
import bf2 from '../../../Images/Breakfast/breakfast2.png'
import bf3 from '../../../Images/Breakfast/breakfast3.png'
import bf4 from '../../../Images/Breakfast/breakfast4.png'
import bf5 from '../../../Images/Breakfast/breakfast5.png'
import bf6 from '../../../Images/Breakfast/breakfast6.png'
import { Container, Row } from 'react-bootstrap';
import Breakfast from '../Breakfast/Breakfast';

const Breakfasts = () => {
    const breakfasts = [   
        {id:1, name:'Bagel and cream cheese',image:bf1, description:'How we dream about our future', price:6.99 },
    {id:2,name:'Breakfast sandwitch',image:bf2, description:'How we dream about our future', price:9.99 },
    {id:3,name:'Backed Chicken',image:bf3, description:'How we dream about our future', price:10.99 },
    {id:4,name:'Eggs Benedict',image:bf4, description:'How we dream about our future', price:8.99 },
    {id:5,name:'Toast Croissant Fried Egg',image:bf5, description:'How we dream about our future', price:19.99 },
    {id:6,name:'Full Breakfast Fried Toast Brunch',image:bf6, description:'How we dream about our future', price:3.99 }
]
    return (
        <div>
            <p className='item-header my-5'>Breakfast</p>

            <Container>
                <Row xs={1} md={2} xl={3} className="g-5">
                    
                        

                       {
                           breakfasts.map(breakfast=> <Breakfast
                           key={breakfast.id}
                           breakfast={breakfast}
                           ></Breakfast>)
                       } 
                    
                </Row>
            </Container>
            
        </div>
    );
};

export default Breakfasts;