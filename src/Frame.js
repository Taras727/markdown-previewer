import React from 'react';
import $ from 'jquery';
import { text } from './data';
import { Icon } from '@iconify/react';
import expandArrowsAlt from '@iconify-icons/fa-solid/expand-arrows-alt';
import compressAlt from '@iconify-icons/fa-solid/compress-alt';

class Frame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: text,
      currentIconType: 'expand',
      types: {
        expand: expandArrowsAlt,
        compress: compressAlt
      }
    };
    this.toggleIcon = this.toggleIcon.bind(this);
  }

  render() {
    return (this.state.compress) ? 
      null :
      (
        <div className="d-flex flex-column col m-3 p-0 border border-dark">
          <div className="header d-flex align-items-center m-0 border-bottom border-dark pl-2 pr-2">
            {/*     size     */}
            <i className="fab fa-free-code-camp"></i>
            <strong className="col pl-2 text-capitalize">{ this.props.ID }</strong>
            <Icon 
              icon={ this.state.types[this.state.currentIconType] }
              className="icon"
              onClick={ this.toggleIcon }
            />
          </div>

          <textarea
            id={ this.props.ID }
            className="col border-0"
            defaultValue={ this.state.text }
          />
        </div>
      );
  }

  toggleIcon() {
    let anotherIconType = Object.keys(this.state.types).find(type => type !== this.state.currentIconType);

    this.setState(state => {
      return Object.assign(
        {},
        state,
        { currentIconType: anotherIconType }
      );
    });
  }
}

export default Frame;