import { describe, it, expect } from "vitest";
import { render, screen } from '@testing-library/react';
import App from '../App';
import { BrowserRouter } from "react-router-dom";

describe('App component', () => {
    it('renders header, outlet, and greyout', () => {
        render(<App />, { wrapper: BrowserRouter })
        expect(screen.getByTestId('header')).toBeInTheDocument();
        expect(screen.getByTestId('grey-out')).toBeInTheDocument();
    });
});

