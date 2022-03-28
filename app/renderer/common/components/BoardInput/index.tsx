import React from 'react';
import classname from 'classnames';
import './index.less';

const TYPE = {
  text: 'text',
  textarea: 'textarea',
};

export type SizeType = 'normal' | 'large';
export type Type = 'text' | 'textarea' | '';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * @description 自动获取焦点
   */
  autoFocus?: boolean;
  /**
   * @description 控件类型
   */
  type?: Type;
  /**
   * @description 控件大小
   */
  size?: SizeType;
  /**
   * @description 是否禁用
   */
  disabled?: boolean;
  /**
   * @description 设置前置标签
   */
  addonBefore?: React.ReactNode;
  /**
   * @description 设置后置标签
   */
  addonAfter?: React.ReactNode;
  /**
   * @description 可以计数
   */
  allowCount?: boolean;
  /**
   * @description 可以点击清除图标删除内容
   */
  allowClear?: boolean;
  /**
   * @description textarea行数 3
   */
  rows?: number;
  /**
   * @description 动态样式
   */
  style?: React.CSSProperties;
  /**
   * @description 输入框内容
   */
  value?: string | number | undefined;
  /**
   * @description 输入框占位符
   */
  placeholder?: string;
  /**
   * @description 输入框id
   */
  id?: string;
  /**
   * @description 最大长度
   */
  maxLength?: number;
  /**
   * @description 是否背景透明
   */
  bgTransparent?: boolean;
  /**
   * @description 回调函数
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

interface InputState {
  focus: boolean;
  text: string | number;
}

export default class BoardInput extends React.PureComponent<InputProps, InputState> {
  input: HTMLInputElement | HTMLTextAreaElement | any;
  constructor(props: InputProps) {
    super(props);
    this.state = {
      focus: false,
      text: props?.value || '',
    };
  }
  actionChange(e: any) {
    const target = this.input as any;
    const event = Object.create(e);
    // 如果是点击清除按钮，则需要改target指向input，value清空
    if (e.type === 'click') {
      target.value = '';
      event.target = target;
      event.currentTarget = target;
    }
    this.props.onChange?.(event);
  }
  onFocus() {
    this.setState({
      focus: true,
    });
  }
  onBlur() {
    this.setState({
      focus: false,
    });
  }
  onInput(e: any) {
    this.setState({
      text: e.target.value,
    });
    this.actionChange(e);
  }
  renderInput() {
    const { placeholder, maxLength, id, disabled, autoFocus, size = 'normal' } = this.props;
    return (
      <div
        styleName={classname('board-input-input', {
          [`${size}`]: true,
        })}
      >
        <input
          {...{ placeholder, maxLength, id, disabled, autoFocus }}
          value={this.state.text}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onInput={this.onInput}
          ref={this.saveInput as any}
        />
      </div>
    );
  }
  renderTextarea() {}
  render() {
    const { type } = this.props;
    return <div>{TYPE.textarea == type ? this.renderTextarea() : this.renderInput()}</div>;
  }
}
