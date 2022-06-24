import React, {
  FC,
} from 'react';

const styles: { [key: string]: React.CSSProperties } = {
  input_group: {
    width: '36%',
  },
};

type TProps = {
  value: string,
  onChange: (val: string) => void
}

const InputField: FC<TProps> = ({ value = '', onChange = () => {} }) => (
  <div style={ styles.input_group } className="bp4-input-group">
    <span className="bp4-icon bp4-icon-th" />
    <input
      value={ value }
      onChange={ event => { onChange(event.target.value) } }
      style={ styles.input_field }
      className="bp4-input"
      type="search"
      placeholder="Search action"
      dir="auto"
    />
  </div>
)

export default InputField;
