import { render } from "@testing-library/react";
import { getBaseURL } from "@utils/apiHelper";
import { TMDBImg } from "./TMDBImg";

jest.mock(
  "next/image",
  () =>
    ({
      src,
      alt,
      width,
      height,
      className,
    }: {
      src: string;
      alt: string;
      width: number;
      height: number;
      className?: string;
    }) => (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    ),
);

describe("TMDBImg", () => {
  const defaultProps = {
    path: "/example.jpg",
    alt: "Example Image",
    imgType: "poster",
    width: 200,
    height: 300,
    quality: 100,
    className: "custom-class",
  };
  const baseURL = getBaseURL();

  it("renders image correctly", () => {
    const { container } = render(<TMDBImg {...defaultProps} />);
    const imgElement = container.querySelector("img");

    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", `${baseURL}poster/example.jpg`);
    expect(imgElement).toHaveAttribute("alt", "Example Image");
    expect(imgElement).toHaveAttribute("width", "200");
    expect(imgElement).toHaveAttribute("height", "300");
    expect(imgElement).toHaveClass("custom-class");
  });
});
