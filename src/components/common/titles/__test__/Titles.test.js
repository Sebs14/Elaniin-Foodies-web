import { render, screen } from "@testing-library/react";

import Titles from "../Titles";

describe("Titles", () => {
    test('titles renders a text', () => {
        render(<Titles />);
        const article = screen.getByRole('article', {name: 'titles'})
        expect(article).toBeInTheDocument();
    })
})