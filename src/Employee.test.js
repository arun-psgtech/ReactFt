import React from 'react';
import Employee from './Employee';
import Enzyme,{shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
Enzyme.configure({adapter: new EnzymeAdapter()});


test('Employee testing',()=>{
    window.alert = jest.fn()
    const wrapper = shallow(<Employee />);
    expect(wrapper.find('#button1')).to.have.lengthOf(1);
    wrapper.find('#button1').simulate('click');
    expect((window.alert.mock.calls)[0][0]).to.equal('alert'+1);
    window.alert.mock.calls=[];   
    wrapper.find('#button2').simulate('click');
    expect((window.alert.mock.calls)[0][0]).to.equal('alert'+2);
    window.alert.mock.calls=[];    
    wrapper.find('#button3').simulate('click');
    expect((window.alert.mock.calls)[0][0]).to.equal('alert'+3);
    window.alert.mock.calls=[];
    wrapper.find('#button4').simulate('click');
    expect((window.alert.mock.calls)[0][0]).to.equal('alert'+4);
    window.alert.mock.calls=[];
    wrapper.find('#button5').simulate('click');
    expect((window.alert.mock.calls)[0][0]).to.equal('alert'+5);
    window.alert.mock.calls=[];
    wrapper.find('#button6').simulate('click');
    expect((window.alert.mock.calls)[0][0]).to.equal('alert'+6);
    window.alert.mock.calls=[];
    wrapper.find('#button7').simulate('click');
    expect((window.alert.mock.calls)[0][0]).to.equal('alert'+7);
    window.alert.mock.calls=[];
    wrapper.find('#button8').simulate('click');
    expect((window.alert.mock.calls)[0][0]).to.equal('alert'+8);
});