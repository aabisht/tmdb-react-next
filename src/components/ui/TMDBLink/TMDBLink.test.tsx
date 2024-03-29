import { fireEvent, render, screen } from "@testing-library/react";
import { TMDBLink } from "./TMDBLink";
import { BUTTON_VARIANTS } from "@constants";

describe("TMDBLink", () => {
  const defaultProps = {
    href: "/example",
    children: "Example Link",
    className: "",
    replace: false,
    scroll: false,
    prefetch: false,
    external: false,
    severity: "",
    link: true,
    outline: false,
    rounded: false,
  };

  it("renders internal link correctly", () => {
    render(<TMDBLink {...defaultProps} />);
    const linkElement = screen.getByRole("link", { name: /Example Link/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/example");
  });

  it("renders external link correctly", () => {
    render(<TMDBLink {...defaultProps} external />);
    const linkElement = screen.getByRole("link", { name: /Example Link/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("target", "_blank");
    expect(linkElement).toHaveAttribute("rel", "noreferrer");
  });

  it("applies className prop", () => {
    render(<TMDBLink {...defaultProps} className="custom-class" />);
    const linkElement = screen.getByRole("link", { name: /Example Link/i });
    expect(linkElement).toHaveClass("custom-class");
  });

  it("applies severity prop correctly", () => {
    render(<TMDBLink {...defaultProps} severity="primary" />);
    const linkElement = screen.getByRole("link", { name: /Example Link/i });
    expect(linkElement).toHaveClass("text-primary");
  });

  it("applies severity prop correctly having rounded border", () => {
    render(
      <TMDBLink
        {...defaultProps}
        severity="primary"
        rounded={true}
        link={false}
      />,
    );
    const linkElement = screen.getByRole("link", { name: /Example Link/i });
    expect(linkElement).toHaveClass("rounded-3xl");
  });

  it("applies severity prop correctly and of not type link", () => {
    render(<TMDBLink {...defaultProps} severity="primary" link={false} />);
    const linkElement = screen.getByRole("link", { name: /Example Link/i });
    expect(linkElement).toHaveClass("text-white");
  });

  it("applies severity prop with secondary correctly", () => {
    render(<TMDBLink {...defaultProps} severity={BUTTON_VARIANTS.SECONDARY} />);
    const linkElement = screen.getByRole("link", { name: /Example Link/i });
    expect(linkElement).toHaveClass("text-secondary");
  });

  it("applies severity prop with success correctly", () => {
    render(<TMDBLink {...defaultProps} severity={BUTTON_VARIANTS.SUCCESS} />);
    const linkElement = screen.getByRole("link", { name: /Example Link/i });
    expect(linkElement).toHaveClass("text-success");
  });

  it("applies severity prop with light correctly", () => {
    render(<TMDBLink {...defaultProps} severity={BUTTON_VARIANTS.LIGHT} />);
    const linkElement = screen.getByRole("link", { name: /Example Link/i });
    expect(linkElement).toHaveClass("text-white");
  });

  it("applies severity prop with light and link as false correctly", () => {
    render(
      <TMDBLink
        {...defaultProps}
        severity={BUTTON_VARIANTS.LIGHT}
        link={false}
      />,
    );
    const linkElement = screen.getByRole("link", { name: /Example Link/i });
    expect(linkElement).toHaveClass("text-black-light");
  });

  it("applies severity prop with light and link as false correctly and is of type outline", () => {
    render(
      <TMDBLink
        {...defaultProps}
        severity={BUTTON_VARIANTS.LIGHT}
        link={false}
        outline={true}
      />,
    );
    const linkElement = screen.getByRole("link", { name: /Example Link/i });
    expect(linkElement).toHaveClass("text-white");
  });

  it("applies severity prop with warning correctly", () => {
    render(<TMDBLink {...defaultProps} severity={BUTTON_VARIANTS.WARNING} />);
    const linkElement = screen.getByRole("link", { name: /Example Link/i });
    expect(linkElement).toHaveClass("text-warning");
  });

  it("applies severity prop with dark correctly", () => {
    render(<TMDBLink {...defaultProps} severity={BUTTON_VARIANTS.DARK} />);
    const linkElement = screen.getByRole("link", { name: /Example Link/i });
    expect(linkElement).toHaveClass("text-black-light");
  });

  it("applies severity prop with dark and link as false correctly", () => {
    render(
      <TMDBLink
        {...defaultProps}
        severity={BUTTON_VARIANTS.DARK}
        link={false}
      />,
    );
    const linkElement = screen.getByRole("link", { name: /Example Link/i });
    expect(linkElement).toHaveClass("text-white");
  });

  it("applies severity prop with dark and link as false correctly and is of type outline", () => {
    render(
      <TMDBLink
        {...defaultProps}
        severity={BUTTON_VARIANTS.DARK}
        link={false}
        outline={true}
      />,
    );
    const linkElement = screen.getByRole("link", { name: /Example Link/i });
    expect(linkElement).toHaveClass("text-black-light");
  });

  it("applies severity prop with danger correctly", () => {
    render(<TMDBLink {...defaultProps} severity={BUTTON_VARIANTS.DANGER} />);
    const linkElement = screen.getByRole("link", { name: /Example Link/i });
    expect(linkElement).toHaveClass("text-danger");
  });

  it("applies outline style correctly", () => {
    render(
      <TMDBLink {...defaultProps} link={false} severity="primary" outline />,
    );
    const linkElement = screen.getByRole("link", { name: /Example Link/i });
    expect(linkElement).toHaveClass("border-primary");
  });

  it("applies rounded style correctly", () => {
    render(<TMDBLink {...defaultProps} rounded link={false} />);
    const linkElement = screen.getByRole("link", { name: /Example Link/i });
    expect(linkElement).toHaveClass("rounded-3xl");
  });
});
