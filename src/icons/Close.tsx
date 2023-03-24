import type { JSX } from "solid-js/web/types/jsx";

export function CloseIcon(props: Omit<JSX.MaskSVGAttributes<SVGSVGElement>, "width" | "height" | "viewBox">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20" {...props}>
      <path
        fill="currentColor"
        d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94L6.28 5.22Z"
      />
    </svg>
  );
}
