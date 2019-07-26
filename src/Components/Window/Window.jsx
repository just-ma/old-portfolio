import React, { Component } from "react";
import "./Window.scss";
import { selectWindow } from "../../utils";

const MAX_WIDTH = 800;
const MAX_HEIGHT = 500;
const MIN_WIDTH = 200;
const MIN_MIN_WIDTH = 160;
const MIN_HEIGHT = 120;

export default class Window extends Component {
  static defaultProps = {
    width: 400,
    height: 200,
    posX: 200,
    posY: 100
  };

  constructor(props) {
    super(props);

    this.state = {
      ease: true,
      width: 0,
      height: 0,
      posX: 0,
      posY: 0,
      offX: 0,
      offY: 0,
      zIndex: 0,
      isDragging: true
    };
  }

  componentDidMount = () => {
    let { width, height, posX, posY } = this.props;
    this.setState({
      width: width,
      height: height,
      posX: posX,
      posY: posY
    });
    document.addEventListener("mouseup", this.onMouseUp);
  };

  onMouseDownDrag = e => {
    this.setState({
      offX: this.state.posX - e.clientX,
      offY: this.state.posY - e.clientY,
      isDragging: true
    });
    document.addEventListener("mousemove", this.onMouseMove);
  };

  onMouseDownScale = e => {
    this.mySelectWindow();
    this.setState({
      ease: false,
      offX: this.state.width - e.clientX,
      offY: this.state.height - e.clientY,
      isDragging: false
    });
    document.addEventListener("mousemove", this.onMouseMove);
  };

  onMouseMove = e => {
    this.setState({
      [this.state.isDragging ? "posX" : "width"]: this.state.offX + e.clientX,
      [this.state.isDragging ? "posY" : "height"]: Math.max(
        this.state.offY + e.clientY,
        0
      )
    });
  };

  onMouseUp = () => {
    this.setState({
      ease: true
    });
    document.removeEventListener("mousemove", this.onMouseMove);
  };

  renderTitle = () => {
    let width =
      this.state.width < MIN_MIN_WIDTH
        ? MIN_MIN_WIDTH
        : this.state.width;
    let charLeft = Math.round(width / 8) - 17;
    let title = this.props.title;
    if (charLeft < title.length) {
      return title.slice(0, charLeft - 2) + "...";
    } else {
      return title;
    }
  };

  scale = maximize => {
    this.setState({
      width: maximize ? MAX_WIDTH : MIN_WIDTH,
      height: maximize ? MAX_HEIGHT : MIN_HEIGHT
    });
  };

  close = () => {
    document.getElementById(this.props.id).style.display = "none";
    this.setState({
      width: this.props.width,
      height: this.props.height,
      posX: this.props.posX,
      posY: this.props.posY
    });
  };

  mySelectWindow = () => {
    this.setState({
      zIndex: selectWindow(this.state.zIndex)
    });
  };

  render() {
    let { id, type, content } = this.props;
    return (
      <div
        id={id}
        className="window"
        onMouseDown={this.mySelectWindow}
        style={{
          left: this.state.posX,
          top: this.state.posY,
          zIndex: this.state.zIndex
        }}
      >
        <div className="window__header" onPointerDown={this.onMouseDownDrag}>
          <span>{this.renderTitle()}</span>
          <div className="window__button -exit" onClick={this.close} />
          <div
            className="window__button -minimize"
            onClick={() => this.scale(false)}
          />
          <div
            className="window__button -maximize"
            onClick={() => this.scale(true)}
          />
        </div>
        <div
          className={"window__content " + type}
          style={{
            transition: this.state.ease ? "all 0.5s ease" : null,
            width: this.state.width,
            height: this.state.height
          }}
        >
          {content}
        </div>
        <div className="window__scaleIcon" />
        <div
          className="window__scaleArea"
          onMouseDown={this.onMouseDownScale}
        />
      </div>
    );
  }
}
