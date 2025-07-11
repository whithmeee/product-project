import {render, screen, fireEvent} from "@testing-library/react";
import {Sidebar} from "widgets/Sidebar";

describe("test sidebar", () => {
    test("render sidebar", () => {
        render(<Sidebar/>)
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });


    test("toggle sidebar", () => {
        render(<Sidebar/>);

        const toggleButton = screen.getByTestId("toggle-sidebar");
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(toggleButton);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
})
