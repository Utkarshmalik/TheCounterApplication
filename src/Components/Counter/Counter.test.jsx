import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';


test("renders Counter Component", ()=>{

    render(<Counter/>);

    //check if the initial value is zero 
    const countElement = screen.getByTestId("count");
    expect(countElement).toHaveTextContent('0');

})

test("increment and decrement count" , ()=>{

    render(<Counter/>);


    //Click on Increment 
    const incrementButton  = screen.getByText('Increment');
    fireEvent.click(incrementButton);


    const countElement = screen.getByTestId("count");
    expect(countElement).toHaveTextContent('1');

    //Clicks on Decrement 
    const decrementButton  = screen.getByText('Decrement');
    fireEvent.click(decrementButton);

     expect(countElement).toHaveTextContent('0');

})



