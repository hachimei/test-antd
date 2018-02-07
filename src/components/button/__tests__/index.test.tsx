import * as React from 'react'
import { Component } from "react";
import * as renderer from 'react-test-renderer';
import { mount, configure } from "enzyme";
import * as Adapter from 'enzyme-adapter-react-16';
import Button from '..';
import Icon from "../../icon";

configure({ adapter: new Adapter() });

describe('Button',() => {      
    it('renders characters correctly', () => {
      const wrapper1 = renderer.create(<Button>嘤嘤赢</Button>)
    .toJSON();
      const wrapper2 = renderer.create(<Button>嘤嘤</Button>)
    .toJSON();
    const wrapper3 = renderer.create(<Button><Icon type='book' />嘤嘤</Button>)
    .toJSON();
      expect(wrapper1).toMatchSnapshot();
      expect(wrapper2).toMatchSnapshot();
      expect(wrapper3).toMatchSnapshot();
    });

    it('have static property for type detecting',() => {
      const wrapper = mount(<Button>嘤嘤</Button>);
    // disable
      // expect(wrapper.type().__ANT_BUTTON).toBe(true);
    });

    it('should change loading state instantly by default',() => {
      class DefaultButton extends Component {
        state = {
          loading: false,
        };
        enterLoading = () => {
          this.setState({loading: true});
        }

        render(){
          return <Button loading={this.state.loading} onClick={this.enterLoading}>Button</Button>  
        }
      }
      const wrapper = mount(<DefaultButton />);
      wrapper.simulate('click');
      expect(wrapper.find('.ant-btn-loading').length).toBe(1);
    });

    it('should support link button',() => {
      const wrapper = renderer.create(
        <Button target="_blank" href="http://ant.design">link button</Button>
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('fixbug renders {0} , 0 and {false}', () => {
      const wrapper = renderer.create(
        <Button>{0}</Button>
      );
      expect(wrapper).toMatchSnapshot();
      const wrapper1 = renderer.create(
        <Button>0</Button>
      );
      expect(wrapper1).toMatchSnapshot();
      const wrapper2 = renderer.create(
        <Button>{false}</Button>
      );
      expect(wrapper2).toMatchSnapshot();
    });
})