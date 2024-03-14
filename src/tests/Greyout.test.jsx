import { expect, it, describe } from 'vitest'
import { screen, render, } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Greyout from '../components/GreyOut/GreyOut'

describe('Greyout component', () => {
    it('will not be visible on initial render', () => {
        render(<Greyout />)
        expect(screen.getByTestId('grey-out')).not.toBeVisible();
    });
    it('will be visible when switched to true', () => {
        render(<Greyout greyOut={true} />)
        expect(screen.getByTestId('grey-out')).toBeVisible();
    });
    it('will be invisible when switched to false', () => {
        render(<Greyout greyOut={false} />)
        expect(screen.getByTestId('grey-out')).not.toBeVisible();
    });

})