import { it, describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home/Home';

describe('Home Component', () => {
    it('render home component', () => {
        render(<Home />);
        expect(screen.getByRole('heading')).toHaveTextContent('A Shopping Cart');
    });
});