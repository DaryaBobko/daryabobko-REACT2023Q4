import styles from './FileUploader.module.scss';

type FileUploaderProps = {
  // onChange: () => void;
  // value: string | number;
  placeholder?: string;
  label?: string;
  name: string;
};

const FileUploader: React.FC<FileUploaderProps> = ({
  // onChange,
  // value,
  // placeholder,
  label,
  name,
}) => {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>

      <input type="file" id={name} name={name} />
      {/* <div className={styles.error}>error</div> */}
    </div>
  );
};

export default FileUploader;
