import React from 'react';
import { shallow } from 'enzyme';
import { %%pascalCase%% } from './%%pascalCase%%';

const defaultProps = {

};

const setup = props => shallow(<%%pascalCase%% {...defaultProps} {...props} />);

describe('%%pascalCase%% tests', () => {
  it('renders without exploding', () => {
    const wrapper = setup();

    expect(wrapper.length).toBe(1);
  });
});