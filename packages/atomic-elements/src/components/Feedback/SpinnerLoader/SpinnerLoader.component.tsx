import { Loader, LoaderProps } from "../Loader";
import { Spinner } from "@components/Animations/Spinner";

export interface SpinnerLoaderProps extends Omit<LoaderProps, "children"> {}

/** SpinnerLoader component */
export function SpinnerLoader(props: SpinnerLoaderProps) {
  const { className } = props;

  return (
    <Loader {...props} className={["aje-loader--spinner", className]}>
      <Spinner
        $size="2em"
        aria-label={props["aria-label"]}
        aria-describedby={props["aria-describedby"]}
        aria-details={props["aria-details"]}
        aria-labelledby={props["aria-labelledby"]}
      />
    </Loader>
  );
}
