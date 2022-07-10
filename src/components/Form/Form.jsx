import styles from "./Form.module.scss";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  createShortLink,
  selectLoading,
} from "../../store/slice/linkSlice";

export const Form = () => {
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onSubmit",
  });

  const onSubmit = ({ url }) => {
    dispatch(createShortLink(url));
    reset();
  };

  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          placeholder="Enter a link here..."
          className={styles.input}
          {...register("url", {
            required: "Please add a link",
            pattern: {
              value:
                /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g,
              message: "Please enter a valid URL",
            },
          })}
          style={{
            outlineColor: errors.url ? "red" : "currentcolor",
            outlineWidth: errors.url ? "4px" : "1px",
          }}
          disabled={loading === "loading"}
        />
        <button type="submit" disabled={loading === "loading"}>
          Shorten URL
        </button>
        {errors.url && <div className={styles.error}>{errors.url.message}</div>}
      </form>
    </div>
  );
};
