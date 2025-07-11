import {render, screen} from "@testing-library/react";
import {Button} from "shared/button";

describe("тестирование button", () => {
    test("render button to in the document", () => {
        render(<Button>TEXT</Button>);
        expect(screen.getByText("TEXT")).toBeInTheDocument();
    });
})
