import React, { PureComponent } from "react"
import { string } from "prop-types"

export class %%pascalCase%% extends PureComponent {
  render() {
    const { text } = this.props;

    return (
      <div className="%%delimiterSplitter%%">
        <span>{text}</span>
      </div>
    );
  }
}

%%pascalCase%%.propTypes = {
  text: string,
};

%%pascalCase%%.defaultProps = {
  text: '%%pascalCase%%',
};

export default %%pascalCase%%;
