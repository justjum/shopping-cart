import { expect, it, describe, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Cart from "../components/Cart/Cart"

describe('Cart Component', () => {
    const cart = [{item: 1, quantity: 2, key: 1}]
    const items = [{id: 1, title: 't-shirt', description: 'shirt with t', category: "men's", price: 100.99, rating: {rate: 3.9, count: 120}}]
    it('Does not show cart by default', () => {
        render(<Cart cart={JSON.stringify(cart)} items={JSON.stringify(items)}/>)
        let cartItem = screen.queryByText('t-shirt')
        expect(cartItem).not.toBeVisible()
    });
    it("Show's cart when 'visible'", () => {
        render(<Cart cart={JSON.stringify(cart)} items={JSON.stringify(items)} showCart={true}/>)
        let cartItem = screen.queryByText('t-shirt')
        expect(cartItem).toBeVisible()
    });


});
