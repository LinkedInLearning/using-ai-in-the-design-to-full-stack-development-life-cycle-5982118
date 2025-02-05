import { render, screen, act } from "@testing-library/react";
import RootLayout from "@/app/layout";
import Home from "@/app/page";
import ClientHomeWrapper from "@/tests/ClientHomeWrapper";

beforeAll(() => {
  process.env.CONTENTFUL_SPACE_ID = "test_space_id";
  process.env.CONTENTFUL_ACCESS_TOKEN = "test_access_token";
});

describe("Root Layout", () => {
  test("renders RootLayout component", async () => {
    render(<RootLayout />);

    // Check if the RootLayout div is rendered
    const rootElement = screen.getByTestId("main");
    expect(rootElement).toBeInTheDocument();
  });
});

describe("Home", () => {
  test("renders Home component", async () => {
    await act(async () => {
      render(<ClientHomeWrapper />);
    });

    screen.debug(); // ✅ See what renders

    // Check if Home is rendered
    const { container } = render(<ClientHomeWrapper />);
    const homeElement = container.querySelector(".Home");
    expect(homeElement).toBeInTheDocument();
  });
});

