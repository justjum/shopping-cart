import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ErrorMessage from '../ErrorMessage';

describe("Error message", () => {
    it("renders default error state", () => {
        render(<ErrorMessage />);
        expect(screen.getByTestId('error-message')).toHaveTextContent(
            'Oh my. Something went wrong.'
            );
    });
    it("renders custom error state", () => {
        render(<ErrorMessage message='Nooooo' />);
        screen.debug();
        expect(screen.getByTestId('error-message')).toHaveTextContent('Nooooo')
    });
});

