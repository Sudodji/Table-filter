import React, {
  FC,
} from 'react';
import styles from './style.module.scss'

type TProps = {
  value: string,
  onChange: (val: string) => void
}

const InputField: FC<TProps> = ({ value = '', onChange = () => {} }) => (
  <div className={ styles.inputGroup }>
    <div className="bp4-input-group">
      <span className="bp4-icon bp4-icon-th" />
      <input
        value={ value }
        onChange={ event => { onChange(event.target.value) } }
        className="bp4-input"
        type="search"
        placeholder="Search action"
      />
    </div>
  </div>
)

export default InputField;
