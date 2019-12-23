import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Rectangle from './Rectangle';
import {expect} from 'chai';
Enzyme.configure({adapter: new EnzymeAdapter()});

test('Test Rectangle',()=>{
    window.alert = jest.fn()
const wrapper = shallow(<Rectangle/>);
let mockedEvent = { currentTarget: {id:'Outer'},
stopPropagation: ()=>{} };
wrapper.find('#Outer').simulate('click',mockedEvent);
expect((window.alert.mock.calls)[0][0]).to.equal('Outer');
window.alert.mock.calls=[];
mockedEvent = { currentTarget: {id:'Inner'},
stopPropagation: ()=>{} };
wrapper.find('#Inner').simulate('click',mockedEvent);
expect((window.alert.mock.calls)[0][0]).to.equal('Inner');
});

