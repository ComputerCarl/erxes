import { mount, shallow } from 'enzyme';
import React from 'react';

import ModifiableList from '../../../modules/common/components/ModifiableList';

describe('ModifiableList component', () => {
  const defaultProps = {
    options: ['80201929', '80801280'],
    addButtonLabel: '12312322',

    onChangeOption: (options?: string[], optionValue?: string) => null
  };

  test('renders shallow successfully', () => {
    shallow(<ModifiableList {...defaultProps} />);
  });

  test('renders mount with default props', () => {
    const control = mount(<ModifiableList {...defaultProps} />);
    const props = control.props();

    expect(props).toMatchObject(defaultProps);
  });

  test('renders test 2 different props', () => {
    defaultProps.options = ['80201929', '12312322'];
    defaultProps.addButtonLabel = 'primary';

    const rendered = mount(<ModifiableList {...defaultProps} />);
    const props = rendered.props();

    expect(defaultProps).toMatchObject(props);
  });

  test('render mount ModifiliableList', () => {
    const wrapper = mount(<ModifiableList {...defaultProps} />);
    const added = defaultProps.options;

    added.push('9090');
    wrapper.setState({ options: added });

    expect(wrapper.state('options')).toEqual(added);
  });
});
