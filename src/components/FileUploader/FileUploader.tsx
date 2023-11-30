import { ChangeEvent } from 'react';
import styles from './FileUploader.module.scss';

type FileUploaderProps = {
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
  error?: string;
};

const FileUploader: React.FC<FileUploaderProps> = ({
  onChange,
  placeholder,
  label,
  name,
  error,
  register,
}) => {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>

      <input
        type="file"
        placeholder={placeholder}
        onChange={onChange}
        id={name}
        name={name}
        ref={register}
        // accept=".png, .jpeg, .jpg"
      />
      <div className={styles.error}>{error}</div>
    </div>
  );
};

export default FileUploader;
