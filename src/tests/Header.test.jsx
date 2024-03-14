import { expect, it, describe, vi } from "vitest";
import { render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom";
import { userEvent } from "@testing-library/user-event";
import Header from '../components/Header/Header'
import App from '../App'

describe('Header Component', () => {
    it('renders header', () => {
        const handleShowCart = vi.fn();
        render(<Header totalItems={5} handleShowCart={handleShowCart} />, { wrapper: BrowserRouter });
        
    });
    it('home link returns to home page', async() => {
        const user = userEvent.setup();
        render(<App />, { wrapper: BrowserRouter});
        
        const homeLink = screen.getByRole('link', { name: 'Home' })
        expect(homeLink.href).toContain('/home');

        await user.click(homeLink);
        await waitFor(() => {
            expect(window.location.pathname).toBe('/home')
        });
    });
    it('products link forwards to shop page', async() => {
        const user = userEvent.setup();
        render(<App />, { wrapper: BrowserRouter});
        
        const shopLink = screen.getByRole('link', { name: 'Products' })
        expect(shopLink.href).toContain('/shop');

        await user.click(shopLink);
        await waitFor(() => {
            expect(window.location.pathname).toBe('/shop')
        });
    });
    it('cart image activates cart popup', async () => {
        const handleShowCart = vi.fn();
        render(<Header totalItems={5} handleShowCart={handleShowCart} />, { wrapper: BrowserRouter });
        const user = userEvent.setup();
        const cartLink = screen.getByTestId('cart-icon');
        await user.click(cartLink);
        expect(handleShowCart).toHaveBeenCalledOnce();
    });
});