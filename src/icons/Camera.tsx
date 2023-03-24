import type { JSX } from "solid-js/web/types/jsx";

export function CameraIcon(props: Omit<JSX.MaskSVGAttributes<SVGSVGElement>, "width" | "height" | "viewBox">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20" {...props}>
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M1 8a2 2 0 0 1 2-2h.93a2 2 0 0 0 1.664-.89l.812-1.22A2 2 0 0 1 8.07 3h3.86a2 2 0 0 1 1.664.89l.812 1.22A2 2 0 0 0 16.07 6H17a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8Zm13.5 3a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0ZM10 14a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
